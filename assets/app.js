(function () {
  "use strict";
  var DATA = Array.isArray(window.PROJECT_DATA) ? window.PROJECT_DATA.slice() : [];

  // Pinned projects always come first (stable order within each group)
  DATA.sort(function (a, b) {
    return (b.pinned === true ? 1 : 0) - (a.pinned === true ? 1 : 0);
  });

  // Precompute search text once (faster filtering)
  DATA.forEach(function (p) {
    p._search = [p.title, p.category, p.about]
      .concat(p.blurb || [])
      .concat(p.features || [])
      .concat(p.stack || [])
      .join(' ')
      .toLowerCase();
  });

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
  }
  // Theme already applied in <head>; keep toggle in sync
  try {
    var saved = localStorage.getItem('aj-theme');
    if (!root.getAttribute('data-theme')) {
      applyTheme(saved === 'dark' ? 'dark' : 'light');
    }
  } catch (e) {
    if (!root.getAttribute('data-theme')) applyTheme('light');
  }
  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('aj-theme', next); } catch (e) {}
    toggle.blur();
  });

  /* ---------- hide on scroll down / show header+search on scroll up ---------- */
  var topbar = document.getElementById('topbar');
  var filterbar = document.getElementById('filterbar');
  var topSpacer = document.getElementById('topSpacer');
  var lastScroll = 0;
  var ticking = false;
  var heroEl = document.getElementById('hero') || document.querySelector('.hero');
  var heroToggle = document.getElementById('heroToggle');
  var stackSheet = document.getElementById('stackSheet');
  var stackBackdrop = document.getElementById('stackBackdrop');
  var stackClose = document.getElementById('stackClose');

  function isMobile() {
    return window.matchMedia('(max-width: 640px)').matches;
  }

  function syncStackSheetMode() {
    if (!stackSheet) return;
    if (!isMobile()) {
      stackSheet.classList.remove('is-open', 'is-closing');
      stackSheet.hidden = false;
      document.body.style.overflow = '';
      if (heroToggle) {
        heroToggle.setAttribute('aria-expanded', 'false');
      }
    }
  }

  function setStackOpen(open) {
    if (!stackSheet || !isMobile()) return;
    if (open) {
      if (stackSheet.classList.contains('is-open') && !stackSheet.classList.contains('is-closing')) return;
      stackSheet.classList.remove('is-closing');
      stackSheet.classList.add('is-open');
      if (heroToggle) {
        heroToggle.setAttribute('aria-expanded', 'true');
        heroToggle.setAttribute('aria-label', 'Hide tech stack');
      }
      document.body.style.overflow = 'hidden';
      return;
    }

    if (!stackSheet.classList.contains('is-open') || stackSheet.classList.contains('is-closing')) return;
    stackSheet.classList.add('is-closing');
    if (heroToggle) {
      heroToggle.setAttribute('aria-expanded', 'false');
      heroToggle.setAttribute('aria-label', 'Show tech stack');
    }

    var panel = stackSheet.querySelector('.stack-sheet-panel');
    var done = false;
    function finishClose() {
      if (done) return;
      done = true;
      stackSheet.classList.remove('is-open', 'is-closing');
      document.body.style.overflow = '';
      if (panel) panel.removeEventListener('animationend', onEnd);
    }
    function onEnd(e) {
      if (e.target !== panel) return;
      finishClose();
    }
    if (panel) panel.addEventListener('animationend', onEnd);
    window.setTimeout(finishClose, 320);
  }

  if (heroToggle) {
    heroToggle.addEventListener('click', function () {
      if (!isMobile()) return;
      var open = stackSheet && stackSheet.classList.contains('is-open') && !stackSheet.classList.contains('is-closing');
      setStackOpen(!open);
    });
  }
  if (stackBackdrop) {
    stackBackdrop.addEventListener('click', function () { setStackOpen(false); });
  }
  if (stackClose) {
    stackClose.addEventListener('click', function () { setStackOpen(false); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setStackOpen(false);
  });

  syncStackSheetMode();
  window.addEventListener('resize', syncStackSheetMode);

  function hideAfterY() {
    // Don't float/hide until the hero has scrolled past (search stays with content, not over hero)
    if (heroEl) return heroEl.offsetTop + heroEl.offsetHeight;
    return 180;
  }

  function onScroll() {
    if (document.body.classList.contains('is-detail')) return;
    var y = window.scrollY || window.pageYOffset;
    var dy = y - lastScroll;
    var goingDown = dy > 4;
    var goingUp = dy < -4;
    var pastHero = y > hideAfterY();

    filterbar.classList.remove('is-search-only');

    if (y < 32) {
      topbar.classList.remove('is-hidden');
      filterbar.classList.remove('is-hidden');
    } else if (goingDown && pastHero) {
      topbar.classList.add('is-hidden');
      filterbar.classList.add('is-hidden');
    } else if (goingUp) {
      topbar.classList.remove('is-hidden');
      filterbar.classList.remove('is-hidden');
    }

    lastScroll = y <= 0 ? 0 : y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ---------- icons for meta ---------- */
  /* (card meta badges removed — stack shown as text) */

  var MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function formatProjectDate(value) {
    if (!value) return '';
    var s = String(value).trim();
    var m = s.match(/^(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?$/);
    if (!m) return s;
    var year = m[1];
    var month = m[2] ? parseInt(m[2], 10) : 0;
    if (month >= 1 && month <= 12) return MONTHS_SHORT[month - 1] + ' ' + year;
    return year;
  }

  /* ---------- categories ---------- */
  var categories = [];
  var catSet = {};
  DATA.forEach(function (p) {
    if (p.category && !catSet[p.category]) {
      catSet[p.category] = true;
      categories.push(p.category);
    }
  });
  categories.sort();

  var activeCategory = '';
  var catToggle = document.getElementById('catToggle');
  var catPanel = document.getElementById('categoriesPanel');
  var catList = document.getElementById('categoriesList');

  function buildCategoryChips() {
    var html = '<button type="button" class="cat-chip' + (activeCategory === '' ? ' is-active' : '') + '" data-cat="">All</button>';
    categories.forEach(function (c) {
      html += '<button type="button" class="cat-chip' + (activeCategory === c ? ' is-active' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
    });
    catList.innerHTML = html;
  }

  // One listener for all chips (faster than rebinding every click)
  catList.addEventListener('click', function (e) {
    var btn = e.target.closest('.cat-chip');
    if (!btn) return;
    activeCategory = btn.getAttribute('data-cat') || '';
    catList.querySelectorAll('.cat-chip').forEach(function (chip) {
      chip.classList.toggle('is-active', (chip.getAttribute('data-cat') || '') === activeCategory);
    });
    render();
  });

  catToggle.addEventListener('click', function () {
    var open = catPanel.classList.toggle('is-open');
    catToggle.setAttribute('aria-expanded', String(open));
  });

  function updateSpacer() {
    topSpacer.style.height = topbar.offsetHeight + 'px';
  }

  /* ---------- search ---------- */
  var searchInput = document.getElementById('searchInput');
  var searchClear = document.getElementById('searchClear');
  var searchTerm = '';
  var searchTimer = null;
  var SEARCH_DEBOUNCE_MS = 500;

  function syncSearchUI() {
    var hasText = searchInput.value.length > 0;
    searchClear.classList.toggle('is-visible', hasText);
  }

  function applySearch() {
    searchTerm = searchInput.value.trim().toLowerCase();
    render();
  }

  searchInput.addEventListener('input', function () {
    syncSearchUI();
    if (searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(applySearch, SEARCH_DEBOUNCE_MS);
  });

  searchClear.addEventListener('click', function () {
    if (searchTimer) clearTimeout(searchTimer);
    searchInput.value = '';
    searchTerm = '';
    syncSearchUI();
    render();
    searchInput.focus();
  });

  // Desktop: focus search on load
  if (!isMobile()) {
    try { searchInput.focus({ preventScroll: true }); } catch (e) { searchInput.focus(); }
  }

  function matches(p) {
    if (activeCategory && p.category !== activeCategory) return false;
    if (!searchTerm) return true;
    return (p._search || '').indexOf(searchTerm) > -1;
  }

  /* ---------- card rendering ---------- */
  function esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function projectId(p) {
    if (p.id) return String(p.id);
    return String(p.title || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function getGallerySets(p) {
    var desktop = Array.isArray(p.screenshotsDesktop) ? p.screenshotsDesktop.filter(Boolean) : [];
    var tablet = Array.isArray(p.screenshotsTablet) ? p.screenshotsTablet.filter(Boolean) : [];
    var mobile = Array.isArray(p.screenshotsMobile) ? p.screenshotsMobile.filter(Boolean) : [];
    if (!desktop.length && !tablet.length && !mobile.length) {
      if (Array.isArray(p.screenshots) && p.screenshots.length) {
        desktop = p.screenshots.filter(Boolean);
      } else if (p.image) {
        desktop = [p.image];
      }
    }
    return { desktop: desktop, tablet: tablet, mobile: mobile };
  }

  function projectShots(p) {
    var sets = getGallerySets(p);
    if (sets.desktop.length) return sets.desktop.slice();
    if (sets.tablet.length) return sets.tablet.slice();
    if (sets.mobile.length) return sets.mobile.slice();
    return [];
  }

  function cardHTML(p) {
    var id = projectId(p);
    var detailHtml = (p.blurb || []).slice(0, 4).map(function (d) { return '<p>' + esc(d) + '</p>'; }).join('');
    var titleInner = esc(p.title);

    var linksBlock = '';
    if (p.extraLinks && p.extraLinks.length) {
      var items = p.extraLinks.map(function (l) {
        return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.text) + '</a>';
      }).join('');
      linksBlock = '<details class="card-links"><summary>' + p.extraLinks.length + ' variants on GitHub</summary><div class="card-links-panel"><div class="card-links-list">' + items + '</div></div></details>';
    }

    var stackLine = (p.stack || []).length
      ? '<div class="card-stack">' + (p.stack || []).map(function (t) {
          return '<span class="card-tech">' + esc(t) + '</span>';
        }).join('') + '</div>'
      : '';

    var pinBadge = p.pinned
      ? '<span class="card-pin" title="Pinned" aria-label="Pinned">' +
          '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>' +
        '</span>'
      : '';

    var href = '#project/' + encodeURIComponent(id);

    var dateLabel = formatProjectDate(p.date);
    var dateLine = dateLabel ? '<p class="card-date">' + esc(dateLabel) + '</p>' : '';

    return '' +
      '<article class="card' + (p.pinned ? ' is-pinned' : '') + '">' +
        '<div class="card-media">' +
          '<a href="' + href + '" tabindex="-1" aria-hidden="true">' +
            '<img src="' + esc(p.image) + '" alt="" loading="lazy" decoding="async">' +
          '</a>' +
        '</div>' +
        '<div class="card-body">' +
          '<div class="card-head">' +
            '<h3 class="card-title"><a href="' + href + '">' + titleInner + '</a></h3>' +
            '<div class="card-head-end">' +
              dateLine +
              pinBadge +
            '</div>' +
          '</div>' +
          '<div class="card-detail">' + detailHtml + '</div>' +
          linksBlock +
          stackLine +
        '</div>' +
      '</article>';
  }

  var gridEl = document.getElementById('grid');
  var listView = document.getElementById('listView');
  var detailView = document.getElementById('detailView');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var galleryIndex = 0;
  var galleryShots = [];
  var gallerySets = { desktop: [], mobile: [] };
  var galleryDevice = 'desktop';
  var lightboxOpen = false;
  var galleryBusy = false;

  function wireImages() {
    gridEl.querySelectorAll('.card-media img').forEach(function (img) {
      var media = img.closest('.card-media');
      function done() {
        img.classList.add('is-loaded');
        if (media) media.classList.add('has-image');
      }
      if (img.complete && img.naturalWidth) {
        done();
      } else {
        img.addEventListener('load', done);
        img.addEventListener('error', done);
      }
    });
  }

  function wireCardLinks() {
    gridEl.querySelectorAll('.card-links').forEach(function (details) {
      var summary = details.querySelector('summary');
      if (!summary || summary._wired) return;
      summary._wired = true;
      var closeTimer = null;
      summary.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
        var opening = !details.classList.contains('is-open');
        if (opening) {
          details.open = true;
          void details.offsetHeight;
          details.classList.add('is-open');
        } else {
          details.classList.remove('is-open');
          var panel = details.querySelector('.card-links-panel');
          var finished = false;
          var done = function () {
            if (finished) return;
            finished = true;
            details.open = false;
            if (panel) panel.removeEventListener('transitionend', onEnd);
            closeTimer = null;
          };
          var onEnd = function (ev) {
            if (ev.target !== panel || ev.propertyName !== 'grid-template-rows') return;
            done();
          };
          if (panel) panel.addEventListener('transitionend', onEnd);
          closeTimer = setTimeout(done, 400);
        }
      });
    });
  }

  function openProject(id) {
    if (!id) {
      location.hash = '#/';
      return;
    }
    location.hash = '#project/' + encodeURIComponent(id);
  }

  function findProject(id) {
    for (var i = 0; i < DATA.length; i++) {
      if (projectId(DATA[i]) === id) return DATA[i];
    }
    return null;
  }

  function setGalleryLoading(on) {
    var stage = detailView.querySelector('.gallery-stage');
    if (!stage) return;
    stage.classList.toggle('is-loading', !!on);
  }

  function bindGalleryLayerLoad(img, forceLoading) {
    if (!img) return;
    if (img.complete && img.naturalWidth) {
      setGalleryLoading(false);
      return;
    }
    if (forceLoading !== false) setGalleryLoading(true);
    var done = function () { setGalleryLoading(false); };
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  }

  function crossfadeTo(src, done) {
    var stack = detailView.querySelector('.gallery-stack');
    var mainBtn = document.getElementById('galleryMain');
    if (!stack) {
      if (done) done();
      return;
    }
    var current = stack.querySelector('.gallery-layer.is-show');
    var next = stack.querySelector('.gallery-layer:not(.is-show)');
    if (!current || !next) {
      if (done) done();
      return;
    }
    var curSrc = current.getAttribute('src') || '';
    if (curSrc === src || curSrc.endsWith(src.replace(/^\.\//, ''))) {
      if (done) done();
      return;
    }

    var reduce = false;
    try {
      reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    if (reduce) {
      current.src = src;
      current.alt = '';
      next.removeAttribute('src');
      next.classList.remove('is-show');
      current.classList.add('is-show');
      if (mainBtn) {
        mainBtn.style.height = '';
        mainBtn.style.transition = '';
      }
      bindGalleryLayerLoad(current, true);
      if (done) done();
      return;
    }

    var fromH = mainBtn ? mainBtn.offsetHeight : 0;
    var hasVisible = current.complete && current.naturalWidth;
    if (!hasVisible) setGalleryLoading(true);

    next.src = src;
    var finished = false;
    var finish = function () {
      if (finished) return;
      finished = true;

      if (mainBtn && fromH > 0) {
        mainBtn.style.transition = 'none';
        mainBtn.style.height = fromH + 'px';
      }

      next.classList.add('is-show');
      current.classList.remove('is-show');
      setGalleryLoading(false);

      var toH = next.offsetHeight || fromH;
      var clearHeight = function () {
        if (mainBtn) {
          mainBtn.style.height = '';
          mainBtn.style.transition = '';
        }
        current.removeAttribute('src');
        current.alt = '';
        if (done) done();
      };

      if (mainBtn && fromH > 0 && Math.abs(toH - fromH) > 2) {
        requestAnimationFrame(function () {
          mainBtn.style.transition = 'height 0.35s ease';
          mainBtn.style.height = toH + 'px';
        });
        var ended = false;
        var onEnd = function (e) {
          if (e && e.propertyName && e.propertyName !== 'height') return;
          if (ended) return;
          ended = true;
          mainBtn.removeEventListener('transitionend', onEnd);
          clearHeight();
        };
        mainBtn.addEventListener('transitionend', onEnd);
        setTimeout(onEnd, 420);
      } else {
        setTimeout(clearHeight, 360);
      }
    };

    if (next.complete && next.naturalWidth) {
      requestAnimationFrame(function () {
        requestAnimationFrame(finish);
      });
    } else {
      next.addEventListener('load', finish, { once: true });
      next.addEventListener('error', finish, { once: true });
    }
  }

  function thumbsHTML(shots, activeIndex) {
    return shots.map(function (src, i) {
      return '<button type="button" class="gallery-thumb' + (i === activeIndex ? ' is-active' : '') + '" data-index="' + i + '" aria-label="Screenshot ' + (i + 1) + '">' +
        '<img src="' + esc(src) + '" alt="" loading="lazy">' +
      '</button>';
    }).join('');
  }

  function syncGalleryNav() {
    var show = galleryShots.length > 1;
    var prev = document.getElementById('galleryPrev');
    var next = document.getElementById('galleryNext');
    if (prev) prev.hidden = !show;
    if (next) next.hidden = !show;
  }

  function applyGalleryShots(shots, animate) {
    galleryShots = shots.slice();
    galleryIndex = 0;
    galleryBusy = false;
    var mainShow = detailView.querySelector('.gallery-layer.is-show');
    var mainOther = detailView.querySelector('.gallery-layer:not(.is-show)');
    var thumbs = detailView.querySelector('.gallery-thumbs');
    var mainBtn = document.getElementById('galleryMain');

    if (!galleryShots.length) {
      if (mainBtn) mainBtn.hidden = true;
      if (thumbs) thumbs.hidden = true;
      syncGalleryNav();
      return;
    }
    if (mainBtn) mainBtn.hidden = false;

    if (animate && mainShow) {
      galleryBusy = true;
      crossfadeTo(galleryShots[0], function () {
        galleryBusy = false;
      });
    } else if (mainShow) {
      mainShow.src = galleryShots[0];
      mainShow.classList.add('is-show');
      if (mainOther) {
        mainOther.classList.remove('is-show');
        mainOther.removeAttribute('src');
      }
      bindGalleryLayerLoad(mainShow, true);
    } else {
      setGalleryLoading(false);
    }

    if (thumbs) {
      if (galleryShots.length > 1) {
        thumbs.hidden = false;
        thumbs.innerHTML = thumbsHTML(galleryShots, 0);
        wireGalleryThumbsDrag(thumbs);
        thumbs.querySelectorAll('.gallery-thumb').forEach(function (btn) {
          btn.addEventListener('click', function () {
            setGalleryIndex(parseInt(btn.getAttribute('data-index'), 10) || 0);
          });
        });
      } else {
        thumbs.hidden = true;
        thumbs.innerHTML = '';
      }
    }

    syncGalleryNav();

    if (lightboxOpen) {
      lightboxImg.src = galleryShots[0];
      resetLightboxZoom();
    }
  }

  function setGalleryDevice(device, animate) {
    var nextShots = gallerySets[device] || [];
    if (!nextShots.length || device === galleryDevice) return;
    if (galleryBusy) return;
    galleryDevice = device;
    detailView.querySelectorAll('.gallery-device-btn').forEach(function (btn) {
      var on = btn.getAttribute('data-device') === device;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    applyGalleryShots(nextShots, animate !== false);
  }

  function setGalleryIndex(i) {
    if (!galleryShots.length || galleryBusy) return;
    var next = (i + galleryShots.length) % galleryShots.length;
    if (next === galleryIndex) {
      detailView.querySelectorAll('.gallery-thumb').forEach(function (btn, idx) {
        btn.classList.toggle('is-active', idx === galleryIndex);
      });
      return;
    }
    galleryIndex = next;
    galleryBusy = true;
    var src = galleryShots[galleryIndex];
    crossfadeTo(src, function () {
      galleryBusy = false;
    });
    if (lightboxOpen) {
      lightboxImg.src = src;
      resetLightboxZoom();
    }
    detailView.querySelectorAll('.gallery-thumb').forEach(function (btn, idx) {
      btn.classList.toggle('is-active', idx === galleryIndex);
    });
  }

  function projectHash(id, lightbox) {
    var base = '#project/' + encodeURIComponent(id);
    return lightbox ? base + '/lightbox' : base;
  }

  function openLightboxUI() {
    if (!galleryShots.length) return;
    lightboxOpen = true;
    lightboxImg.src = galleryShots[galleryIndex];
    resetLightboxZoom();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightboxUI() {
    if (!lightboxOpen && lightbox.hidden) return;
    lightboxOpen = false;
    lightbox.hidden = true;
    document.body.style.overflow = '';
    resetLightboxZoom();
  }

  /* Opens via hash so Android/iOS back gesture closes lightbox first */
  function openLightbox() {
    if (!galleryShots.length) return;
    var id = detailView.getAttribute('data-project-id');
    if (!id) {
      openLightboxUI();
      return;
    }
    var target = projectHash(id, true);
    if (location.hash !== target) {
      location.hash = target;
      return;
    }
    openLightboxUI();
  }

  function closeLightbox() {
    var id = detailView.getAttribute('data-project-id');
    var hash = (location.hash || '').replace(/^#/, '');
    if (id && /\/lightbox\/?$/.test(hash)) {
      location.hash = projectHash(id, false);
      return;
    }
    closeLightboxUI();
  }

  function detailHTML(p) {
    gallerySets = getGallerySets(p);
    var deviceOrder = ['desktop', 'tablet', 'mobile'];
    var available = deviceOrder.filter(function (d) { return gallerySets[d].length > 0; });
    galleryDevice = available[0] || 'desktop';
    var shots = available.length ? gallerySets[galleryDevice].slice() : [];
    galleryShots = shots;
    galleryIndex = 0;

    var metaParts = [];
    if (p.category) metaParts.push(esc(p.category));
    var dateLabel = formatProjectDate(p.date);
    if (dateLabel) metaParts.push(esc(dateLabel));

    var actions = '';
    if (p.liveUrl) {
      actions += '<a class="btn-demo" href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener">Live Demo</a>';
    }
    if (p.githubUrl) {
      actions += '<a class="btn-github" href="' + esc(p.githubUrl) + '" target="_blank" rel="noopener">GitHub</a>';
    }

    var deviceIcons = {
      desktop: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
      tablet: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M11 18h2"/></svg>',
      mobile: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>'
    };
    var deviceLabels = { desktop: 'Desktop', tablet: 'Tablet', mobile: 'Mobile' };

    var deviceToggle = available.length > 1
      ? '<div class="gallery-device" role="group" aria-label="Screenshot device">' +
          available.map(function (d, i) {
            var on = d === galleryDevice;
            return '<button type="button" class="gallery-device-btn' + (on ? ' is-active' : '') + '" data-device="' + d + '" aria-pressed="' + (on ? 'true' : 'false') + '">' +
              deviceIcons[d] +
              '<span>' + deviceLabels[d] + '</span>' +
            '</button>';
          }).join('') +
        '</div>'
      : '';

    var thumbs = shots.length > 1 ? thumbsHTML(shots, 0) : '';

    var features = (p.features || []).map(function (f) {
      return '<li>' + esc(f) + '</li>';
    }).join('');

    var stack = (p.stack || []).join(' · ');

    var related = (p.relatedLinks || []).map(function (l) {
      return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a></li>';
    }).join('');

    return '' +
      '<div class="wrap detail-inner">' +
        '<button type="button" class="detail-back" id="detailBack">← All projects</button>' +
        '<div class="detail-header">' +
          '<div>' +
            '<h1 class="detail-title">' + esc(p.title) + '</h1>' +
            (metaParts.length ? '<p class="detail-meta">' + metaParts.join(' · ') + '</p>' : '') +
          '</div>' +
          (actions ? '<div class="detail-actions">' + actions + '</div>' : '') +
        '</div>' +
        (shots.length
          ? '<section class="detail-section gallery-section">' +
              (deviceToggle ? '<div class="gallery-head">' + deviceToggle + '</div>' : '') +
              '<div class="gallery">' +
                '<div class="gallery-stage is-loading">' +
                  (shots.length > 1
                    ? '<button type="button" class="gallery-nav gallery-prev" id="galleryPrev" aria-label="Previous screenshot">‹</button>' +
                      '<button type="button" class="gallery-nav gallery-next" id="galleryNext" aria-label="Next screenshot">›</button>'
                    : '') +
                  '<button type="button" class="gallery-main" id="galleryMain" aria-label="Open screenshot larger">' +
                    '<span class="gallery-stack">' +
                      '<img class="gallery-layer is-show" src="' + esc(shots[0]) + '" alt="' + esc(p.title) + ' screenshot">' +
                      '<img class="gallery-layer" alt="" aria-hidden="true">' +
                    '</span>' +
                  '</button>' +
                '</div>' +
                '<div class="gallery-thumbs"' + (shots.length > 1 ? '' : ' hidden') + '>' + thumbs + '</div>' +
              '</div>' +
            '</section>'
          : '') +
        (p.about
          ? '<section class="detail-section"><h2>About</h2><p>' + esc(p.about) + '</p></section>'
          : '') +
        (features
          ? '<section class="detail-section"><h2>Features</h2><ul class="detail-features">' + features + '</ul></section>'
          : '') +
        (stack
          ? '<section class="detail-section"><h2>Tech Stack</h2><p class="detail-stack">' + esc(stack) + '</p></section>'
          : '') +
        (related
          ? '<section class="detail-section"><h2>Related</h2><ul class="detail-related">' + related + '</ul></section>'
          : '') +
      '</div>';
  }

  function wireGalleryThumbsDrag(thumbs) {
    if (!thumbs || thumbs.getAttribute('data-drag-wired') === '1') return;
    thumbs.setAttribute('data-drag-wired', '1');

    var dragging = false;
    var moved = false;
    var startX = 0;
    var startScroll = 0;

    thumbs.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      dragging = true;
      moved = false;
      startX = e.pageX;
      startScroll = thumbs.scrollLeft;
    });

    window.addEventListener('mousemove', function (e) {
      if (!dragging) return;
      var dx = e.pageX - startX;
      if (!moved && Math.abs(dx) > 5) {
        moved = true;
        thumbs.classList.add('is-dragging');
      }
      if (moved) {
        thumbs.scrollLeft = startScroll - dx;
      }
    });

    window.addEventListener('mouseup', function () {
      if (!dragging) return;
      dragging = false;
      thumbs.classList.remove('is-dragging');
      if (moved) {
        // swallow the click that fires after a drag
        var block = function (e) {
          e.preventDefault();
          e.stopPropagation();
          thumbs.removeEventListener('click', block, true);
        };
        thumbs.addEventListener('click', block, true);
        setTimeout(function () {
          thumbs.removeEventListener('click', block, true);
          moved = false;
        }, 0);
      }
    });
  }

  function wireGallerySwipe(el) {
    if (!el || el.getAttribute('data-swipe-wired') === '1') return;
    el.setAttribute('data-swipe-wired', '1');

    var startX = 0;
    var startY = 0;
    var tracking = false;
    var blockClick = false;

    el.addEventListener('touchstart', function (e) {
      if (!e.touches || e.touches.length !== 1) return;
      if (galleryShots.length < 2) return;
      tracking = true;
      blockClick = false;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    el.addEventListener('touchend', function (e) {
      if (!tracking) return;
      tracking = false;
      if (galleryShots.length < 2 || galleryBusy) return;
      var touch = e.changedTouches && e.changedTouches[0];
      if (!touch) return;
      var dx = touch.clientX - startX;
      var dy = touch.clientY - startY;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.15) return;
      blockClick = true;
      if (dx < 0) setGalleryIndex(galleryIndex + 1);
      else setGalleryIndex(galleryIndex - 1);
      setTimeout(function () { blockClick = false; }, 350);
    }, { passive: true });

    el.addEventListener('click', function (e) {
      if (!blockClick) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      blockClick = false;
    }, true);
  }

  function wireDetail() {
    var back = document.getElementById('detailBack');
    if (back) {
      back.addEventListener('click', function () {
        location.hash = '#/';
      });
    }
    var main = document.getElementById('galleryMain');
    if (main) {
      main.addEventListener('click', openLightbox);
      wireGallerySwipe(main);
      var showLayer = main.querySelector('.gallery-layer.is-show');
      bindGalleryLayerLoad(showLayer, true);
    }
    var prev = document.getElementById('galleryPrev');
    var next = document.getElementById('galleryNext');
    if (prev) {
      prev.addEventListener('click', function (e) {
        e.stopPropagation();
        setGalleryIndex(galleryIndex - 1);
      });
    }
    if (next) {
      next.addEventListener('click', function (e) {
        e.stopPropagation();
        setGalleryIndex(galleryIndex + 1);
      });
    }
    var thumbs = detailView.querySelector('.gallery-thumbs');
    if (thumbs) wireGalleryThumbsDrag(thumbs);
    detailView.querySelectorAll('.gallery-thumb').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setGalleryIndex(parseInt(btn.getAttribute('data-index'), 10) || 0);
      });
    });
    detailView.querySelectorAll('.gallery-device-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var device = btn.getAttribute('data-device');
        if (!device) return;
        setGalleryDevice(device, true);
      });
    });
  }

  function showList() {
    document.body.classList.remove('is-detail');
    listView.hidden = false;
    detailView.hidden = true;
    detailView.innerHTML = '';
    detailView.removeAttribute('data-project-id');
    galleryShots = [];
    closeLightboxUI();
    topbar.classList.remove('is-hidden');
    if (filterbar) {
      filterbar.classList.remove('is-hidden');
      filterbar.classList.remove('is-search-only');
    }
    document.title = 'Milad Joodi — Frontend Developer';
  }

  function showDetail(p) {
    document.body.classList.add('is-detail');
    listView.hidden = true;
    detailView.hidden = false;
    detailView.setAttribute('data-project-id', projectId(p));
    detailView.innerHTML = detailHTML(p);
    wireDetail();
    topbar.classList.remove('is-hidden');
    closeLightboxUI();
    setStackOpen(false);
    window.scrollTo(0, 0);
    document.title = p.title + ' — Milad Joodi';
  }

  function route() {
    var hash = (location.hash || '').replace(/^#/, '');
    var match = hash.match(/^project\/([^/?#]+)(?:\/(lightbox))?\/?$/);
    if (match) {
      var id = decodeURIComponent(match[1]);
      var wantLb = match[2] === 'lightbox';
      var p = findProject(id);
      if (p) {
        var onDetail = document.body.classList.contains('is-detail') &&
          detailView.getAttribute('data-project-id') === id;
        if (!onDetail) showDetail(p);
        if (wantLb) openLightboxUI();
        else closeLightboxUI();
        return;
      }
    }
    showList();
  }

  function render() {
    var filtered = DATA.filter(matches);
    var n = filtered.length;
    var total = DATA.length;
    searchInput.placeholder = n === total
      ? 'Search ' + total + ' builds…'
      : 'Search ' + n + ' of ' + total + ' builds…';
    gridEl.innerHTML = filtered.length
      ? filtered.map(cardHTML).join('')
      : '<div class="empty-state">No builds match that search. Try a different term or category.</div>';
    wireImages();
    wireCardLinks();
  }

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', function () {
    setGalleryIndex(galleryIndex - 1);
  });
  document.getElementById('lightboxNext').addEventListener('click', function () {
    setGalleryIndex(galleryIndex + 1);
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.id === 'lightboxStage') {
      if (lbZoom <= 1.05) closeLightbox();
      else resetLightboxZoom();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (!lightboxOpen) {
      if (e.key === 'Escape' && document.body.classList.contains('is-detail')) {
        location.hash = '#/';
      }
      return;
    }
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') setGalleryIndex(galleryIndex - 1);
    if (e.key === 'ArrowRight') setGalleryIndex(galleryIndex + 1);
  });

  /* lightbox pinch-zoom + pan + swipe */
  var lightboxStage = document.getElementById('lightboxStage');
  var lbZoom = 1;
  var lbPanX = 0;
  var lbPanY = 0;
  var lbPinchStart = 0;
  var lbZoomStart = 1;
  var lbPanStartX = 0;
  var lbPanStartY = 0;
  var lbTouchX = null;
  var lbTouchY = null;
  var lbMoved = false;

  function applyLightboxTransform() {
    lightboxImg.style.transform =
      'translate(' + lbPanX + 'px,' + lbPanY + 'px) scale(' + lbZoom + ')';
  }

  function resetLightboxZoom() {
    lbZoom = 1;
    lbPanX = 0;
    lbPanY = 0;
    lbPinchStart = 0;
    applyLightboxTransform();
  }

  function touchDist(t) {
    var dx = t[0].clientX - t[1].clientX;
    var dy = t[0].clientY - t[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function touchMid(t) {
    return {
      x: (t[0].clientX + t[1].clientX) / 2,
      y: (t[0].clientY + t[1].clientY) / 2
    };
  }

  lightboxStage.addEventListener('touchstart', function (e) {
    if (!lightboxOpen) return;
    lbMoved = false;
    if (e.touches.length === 2) {
      e.preventDefault();
      lbPinchStart = touchDist(e.touches);
      lbZoomStart = lbZoom;
      var mid = touchMid(e.touches);
      lbPanStartX = lbPanX;
      lbPanStartY = lbPanY;
      lbTouchX = mid.x;
      lbTouchY = mid.y;
    } else if (e.touches.length === 1) {
      lbTouchX = e.touches[0].clientX;
      lbTouchY = e.touches[0].clientY;
      lbPanStartX = lbPanX;
      lbPanStartY = lbPanY;
    }
  }, { passive: false });

  lightboxStage.addEventListener('touchmove', function (e) {
    if (!lightboxOpen) return;
    if (e.touches.length === 2) {
      e.preventDefault();
      lbMoved = true;
      var dist = touchDist(e.touches);
      if (lbPinchStart > 0) {
        lbZoom = Math.min(4, Math.max(1, lbZoomStart * (dist / lbPinchStart)));
      }
      var mid = touchMid(e.touches);
      if (lbTouchX != null) {
        lbPanX = lbPanStartX + (mid.x - lbTouchX);
        lbPanY = lbPanStartY + (mid.y - lbTouchY);
      }
      if (lbZoom <= 1) {
        lbZoom = 1;
        lbPanX = 0;
        lbPanY = 0;
      }
      applyLightboxTransform();
    } else if (e.touches.length === 1 && lbZoom > 1.05) {
      e.preventDefault();
      lbMoved = true;
      lbPanX = lbPanStartX + (e.touches[0].clientX - lbTouchX);
      lbPanY = lbPanStartY + (e.touches[0].clientY - lbTouchY);
      applyLightboxTransform();
    }
  }, { passive: false });

  lightboxStage.addEventListener('touchend', function (e) {
    if (!lightboxOpen) return;
    if (e.touches.length === 0 && e.changedTouches[0] && lbTouchX != null && !lbMoved && lbZoom <= 1.05) {
      var dx = e.changedTouches[0].clientX - lbTouchX;
      if (Math.abs(dx) > 50) {
        if (dx > 0) setGalleryIndex(galleryIndex - 1);
        else setGalleryIndex(galleryIndex + 1);
      }
    }
    if (e.touches.length < 2) lbPinchStart = 0;
    if (e.touches.length === 0) {
      lbTouchX = null;
      lbTouchY = null;
      if (lbZoom < 1.05) resetLightboxZoom();
    }
  }, { passive: true });

  window.addEventListener('hashchange', route);

  buildCategoryChips();
  render();
  route();
  updateSpacer();
  window.addEventListener('resize', updateSpacer);
})();
