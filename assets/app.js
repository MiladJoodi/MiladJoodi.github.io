(function () {
  "use strict";
  var DATA = Array.isArray(window.PROJECT_DATA) ? window.PROJECT_DATA.slice() : [];

  // Pinned first, then newest date first
  function projectDateValue(d) {
    if (!d) return 0;
    var parts = String(d).split('-');
    var y = parseInt(parts[0], 10) || 0;
    var m = parseInt(parts[1], 10) || 1;
    var day = parseInt(parts[2], 10) || 1;
    return y * 10000 + m * 100 + day;
  }
  DATA.sort(function (a, b) {
    var pin = (b.pinned === true ? 1 : 0) - (a.pinned === true ? 1 : 0);
    if (pin) return pin;
    return projectDateValue(b.date) - projectDateValue(a.date);
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

  /* ---------- hide on scroll down / show header on scroll up ---------- */
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
    // Don't float/hide until the hero has scrolled past
    if (heroEl) return heroEl.offsetTop + heroEl.offsetHeight;
    return 180;
  }

  function withChromeInstant(fn) {
    topbar.classList.add('is-instant');
    if (filterbar) filterbar.classList.add('is-instant');
    fn();
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        topbar.classList.remove('is-instant');
        if (filterbar) filterbar.classList.remove('is-instant');
      });
    });
  }

  function showChromeBars() {
    topbar.classList.remove('is-hidden');
    if (filterbar) {
      filterbar.classList.remove('is-hidden');
    }
  }

  function onScroll() {
    if (document.body.classList.contains('is-detail')) return;
    var y = window.scrollY || window.pageYOffset;
    var dy = y - lastScroll;
    var goingDown = dy > 4;
    var goingUp = dy < -4;
    var pastHero = y > hideAfterY();
    // Layout shifts (filter/route) cause huge scroll jumps; snap chrome without slide animation
    var jump = Math.abs(dy) > 80;

    if (jump) {
      withChromeInstant(function () {
        showChromeBars();
      });
      lastScroll = y <= 0 ? 0 : y;
      ticking = false;
      return;
    }

    if (y < 32) {
      showChromeBars();
    } else if (goingDown && pastHero) {
      topbar.classList.add('is-hidden');
      if (filterbar) filterbar.classList.add('is-hidden');
    } else if (goingUp) {
      showChromeBars();
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
  var categoryOrder = [
    'Developer Tools',
    'Web App',
    'Chrome Extension',
    'Package'
  ];
  var categories = [];
  var catSet = {};
  DATA.forEach(function (p) {
    if (p.category && !catSet[p.category]) {
      catSet[p.category] = true;
      categories.push(p.category);
    }
  });
  categories.sort(function (a, b) {
    var ia = categoryOrder.indexOf(a);
    var ib = categoryOrder.indexOf(b);
    if (ia === -1) ia = categoryOrder.length;
    if (ib === -1) ib = categoryOrder.length;
    if (ia !== ib) return ia - ib;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  var activeCategory = '';
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

  function updateSpacer() {
    topSpacer.style.height = topbar.offsetHeight + 'px';
  }

  function matches(p) {
    if (activeCategory && p.category !== activeCategory) return false;
    return true;
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
        (p.image
          ? '<div class="card-media">' +
              '<a href="' + href + '" tabindex="-1" aria-hidden="true">' +
                '<img src="' + esc(p.image) + '" alt="" loading="lazy" decoding="async">' +
              '</a>' +
            '</div>'
          : '') +
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
  var galleryVideo = '';
  var galleryPoster = '';
  var lightboxOpen = false;
  var galleryBusy = false;

  function isVideoSrc(src) {
    return /\.(mp4|webm|ogg)(\?|#|$)/i.test(String(src || ''));
  }

  function withVideoFirst(shots) {
    var list = (shots || []).slice();
    if (galleryVideo && list.indexOf(galleryVideo) === -1) {
      list.unshift(galleryVideo);
    }
    var videos = [];
    var images = [];
    list.forEach(function (src) {
      if (isVideoSrc(src)) videos.push(src);
      else images.push(src);
    });
    return videos.concat(images);
  }

  function pauseGalleryVideo() {
    var videoEl = detailView.querySelector('.gallery-video-layer');
    if (!videoEl) return;
    try { videoEl.pause(); } catch (e) {}
  }

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
    if (!current) {
      current = stack.querySelectorAll('.gallery-layer')[0];
      if (current) current.classList.add('is-show');
    }
    if (!next) {
      next = stack.querySelector('.gallery-layer:not(.is-show)');
    }
    if (!current || !next) {
      if (current) {
        current.src = src;
        bindGalleryLayerLoad(current, true);
      }
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

  function showGalleryMedia(src, animate, done) {
    var main = document.getElementById('galleryMain');
    var videoEl = detailView.querySelector('.gallery-video-layer');
    var cover = document.getElementById('galleryVideoCover');
    var layers = detailView.querySelectorAll('.gallery-layer');

    if (isVideoSrc(src)) {
      layers.forEach(function (img) {
        img.classList.remove('is-show');
        img.removeAttribute('src');
        img.alt = '';
      });
      if (videoEl) {
        if (galleryPoster) videoEl.setAttribute('poster', galleryPoster);
        else videoEl.removeAttribute('poster');
        videoEl.src = src;
        videoEl.hidden = false;
        videoEl.classList.add('is-show');
        videoEl.removeAttribute('controls');
        try { videoEl.pause(); } catch (e) {}
        try { videoEl.currentTime = 0; } catch (e2) {}
      }
      if (cover) cover.hidden = false;
      if (main) {
        main.classList.add('is-video');
        main.style.height = '';
        main.style.transition = '';
      }
      setGalleryLoading(false);
      syncGalleryNav();
      if (done) done();
      return;
    }

    pauseGalleryVideo();
    if (videoEl) {
      videoEl.classList.remove('is-show');
      videoEl.removeAttribute('src');
      videoEl.removeAttribute('controls');
      videoEl.hidden = true;
    }
    if (cover) cover.hidden = true;
    if (main) main.classList.remove('is-video');

    var visibleImg = detailView.querySelector('.gallery-layer.is-show[src]');
    var canCrossfade = animate && visibleImg && visibleImg.getAttribute('src');

    if (canCrossfade) {
      crossfadeTo(src, function () {
        syncGalleryNav();
        if (done) done();
      });
      return;
    }

    layers.forEach(function (img, idx) {
      if (idx === 0) {
        img.src = src;
        img.classList.add('is-show');
      } else {
        img.classList.remove('is-show');
        img.removeAttribute('src');
        img.alt = '';
      }
    });
    bindGalleryLayerLoad(layers[0], true);
    syncGalleryNav();
    if (done) done();
  }

  function thumbsHTML(shots, activeIndex) {
    return shots.map(function (src, i) {
      var video = isVideoSrc(src);
      var thumbSrc = video && galleryPoster ? galleryPoster : src;
      return '<button type="button" class="gallery-thumb' +
        (i === activeIndex ? ' is-active' : '') +
        (video ? ' is-video' : '') +
        '" data-index="' + i + '" aria-label="' + (video ? 'Demo video' : ('Screenshot ' + (i + 1))) + '">' +
        (video
          ? '<img src="' + esc(thumbSrc) + '" alt="" loading="lazy"><span class="gallery-thumb-play" aria-hidden="true"></span>'
          : '<img src="' + esc(thumbSrc) + '" alt="" loading="lazy">') +
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

  function resetVideoCover() {
    var videoEl = detailView.querySelector('.gallery-video-layer');
    var cover = document.getElementById('galleryVideoCover');
    if (videoEl) {
      try { videoEl.pause(); } catch (e) {}
      videoEl.removeAttribute('controls');
      try { videoEl.currentTime = 0; } catch (e2) {}
    }
    if (cover) cover.hidden = false;
  }

  function wireGalleryVideoCover() {
    var cover = document.getElementById('galleryVideoCover');
    var videoEl = detailView.querySelector('.gallery-video-layer');
    if (!cover || !videoEl || cover.getAttribute('data-wired') === '1') return;
    cover.setAttribute('data-wired', '1');
    cover.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      cover.hidden = true;
      videoEl.setAttribute('controls', '');
      var play = videoEl.play();
      if (play && typeof play.catch === 'function') play.catch(function () {});
    });
    videoEl.addEventListener('ended', function () {
      resetVideoCover();
    });
  }

  function applyGalleryShots(shots, animate) {
    galleryShots = withVideoFirst(shots);
    galleryIndex = 0;
    galleryBusy = false;
    var thumbs = detailView.querySelector('.gallery-thumbs');
    var mainBtn = document.getElementById('galleryMain');

    if (!galleryShots.length) {
      if (mainBtn) mainBtn.hidden = true;
      if (thumbs) thumbs.hidden = true;
      syncGalleryNav();
      return;
    }
    if (mainBtn) mainBtn.hidden = false;

    if (animate) {
      galleryBusy = true;
      showGalleryMedia(galleryShots[0], true, function () {
        galleryBusy = false;
      });
    } else {
      showGalleryMedia(galleryShots[0], false);
    }

    if (thumbs) {
      if (galleryShots.length >= 1) {
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

    if (lightboxOpen && !isVideoSrc(galleryShots[0])) {
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
    showGalleryMedia(src, true, function () {
      galleryBusy = false;
    });
    syncGalleryNav();
    if (lightboxOpen) {
      if (isVideoSrc(src)) closeLightbox();
      else {
        lightboxImg.src = src;
        resetLightboxZoom();
      }
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
    if (isVideoSrc(galleryShots[galleryIndex])) return;
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
    if (isVideoSrc(galleryShots[galleryIndex])) return;
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
    galleryVideo = p.video || '';
    galleryPoster = p.image || '';
    var deviceOrder = ['desktop', 'tablet', 'mobile'];
    var available = deviceOrder.filter(function (d) { return gallerySets[d].length > 0; });
    // Video-only projects still get a gallery
    if (!available.length && galleryVideo) available = ['desktop'];
    galleryDevice = available[0] || 'desktop';
    var shots = withVideoFirst(available.length ? (gallerySets[galleryDevice] || []).slice() : []);
    galleryShots = shots;
    galleryIndex = 0;
    var firstIsVideo = shots.length && isVideoSrc(shots[0]);

    var metaParts = [];
    if (p.category) metaParts.push(esc(p.category));
    var dateLabel = formatProjectDate(p.date);
    if (dateLabel) metaParts.push(esc(dateLabel));

    var actions = '';
    var demos = (p.demoLinks && p.demoLinks.length)
      ? p.demoLinks
      : (p.liveUrl ? [{ label: 'Live Demo', url: p.liveUrl }] : []);
    demos.forEach(function (l) {
      if (!l || !l.url) return;
      actions += '<a class="btn-demo" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label || 'Live Demo') + '</a>';
    });
    var repos = (p.githubLinks && p.githubLinks.length)
      ? p.githubLinks
      : (p.githubUrl ? [{ label: 'GitHub', url: p.githubUrl }] : []);
    repos.forEach(function (l) {
      if (!l || !l.url) return;
      actions += '<a class="btn-github" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label || 'GitHub') + '</a>';
    });

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

    var thumbs = shots.length >= 1 ? thumbsHTML(shots, 0) : '';

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
                '<div class="gallery-stage' + (firstIsVideo ? '' : ' is-loading') + '">' +
                  (shots.length > 1
                    ? '<button type="button" class="gallery-nav gallery-prev" id="galleryPrev" aria-label="Previous screenshot">‹</button>' +
                      '<button type="button" class="gallery-nav gallery-next" id="galleryNext" aria-label="Next screenshot">›</button>'
                    : '') +
                  '<div class="gallery-main' + (firstIsVideo ? ' is-video' : '') + '" id="galleryMain"' +
                    (firstIsVideo ? '' : ' role="button" tabindex="0" aria-label="Open screenshot larger"') + '>' +
                    '<span class="gallery-stack">' +
                      '<img class="gallery-layer' + (firstIsVideo ? '' : ' is-show') + '"' +
                        (firstIsVideo ? '' : ' src="' + esc(shots[0]) + '"') +
                        ' alt="' + esc(p.title) + ' screenshot">' +
                      '<img class="gallery-layer" alt="" aria-hidden="true">' +
                      '<video class="gallery-video-layer' + (firstIsVideo ? ' is-show' : '') + '"' +
                        (firstIsVideo ? '' : ' hidden') +
                        ' playsinline preload="metadata"' +
                        (galleryPoster ? ' poster="' + esc(galleryPoster) + '"' : '') +
                        (firstIsVideo ? ' src="' + esc(shots[0]) + '"' : '') +
                      '></video>' +
                      '<button type="button" class="gallery-video-cover" id="galleryVideoCover" aria-label="Play video"' +
                        (firstIsVideo ? '' : ' hidden') + '>' +
                        '<span class="gallery-video-play" aria-hidden="true">' +
                          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>' +
                        '</span>' +
                      '</button>' +
                    '</span>' +
                  '</div>' +
                '</div>' +
                '<div class="gallery-thumbs"' + (shots.length >= 1 ? '' : ' hidden') + '>' + thumbs + '</div>' +
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
      main.addEventListener('click', function (e) {
        if (e.target.closest('video') || e.target.closest('.gallery-video-cover')) return;
        if (isVideoSrc(galleryShots[galleryIndex])) return;
        openLightbox();
      });
      main.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        if (isVideoSrc(galleryShots[galleryIndex])) return;
        e.preventDefault();
        openLightbox();
      });
      wireGallerySwipe(main);
      wireGalleryVideoCover();
      if (!isVideoSrc(galleryShots[0])) {
        var showLayer = main.querySelector('.gallery-layer.is-show');
        bindGalleryLayerLoad(showLayer, true);
      } else {
        setGalleryLoading(false);
      }
      syncGalleryNav();
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
    galleryVideo = '';
    galleryPoster = '';
    closeLightboxUI();
    withChromeInstant(function () {
      showChromeBars();
    });
    lastScroll = window.scrollY || window.pageYOffset || 0;
    document.title = 'My Portfolio';
  }

  function showDetail(p) {
    document.body.classList.add('is-detail');
    listView.hidden = true;
    detailView.hidden = false;
    detailView.setAttribute('data-project-id', projectId(p));
    detailView.innerHTML = detailHTML(p);
    wireDetail();
    withChromeInstant(function () {
      topbar.classList.remove('is-hidden');
    });
    closeLightboxUI();
    setStackOpen(false);
    window.scrollTo(0, 0);
    lastScroll = 0;
    document.title = p.title + ' — My Portfolio';
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
    gridEl.innerHTML = filtered.length
      ? filtered.map(cardHTML).join('')
      : '<div class="empty-state">No builds in this category.</div>';
    wireImages();
    wireCardLinks();
    window.requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset || 0;
      if (Math.abs(y - lastScroll) > 40) {
        withChromeInstant(function () {
          showChromeBars();
        });
      }
      lastScroll = y;
    });
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
