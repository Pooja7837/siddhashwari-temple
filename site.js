/* ============================================================================
 *  MANDIR SIDDHASHWARI PEETH DHAM — SITE ENGINE
 * ----------------------------------------------------------------------------
 *  You normally DO NOT need to edit this file. All text and data live in
 *  js/content.js. This file only draws the pages and wires up the behaviour:
 *    language toggle, sticky header, mobile menu, scroll reveal, countdown,
 *    live open/closed badge, animated counters, copy buttons and forms.
 * ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  var LANG_KEY = "siddhashwari-lang";

  /* ---------------------------------------------------------------- LANGUAGE */
  // Default language is Hindi. The visitor's choice is remembered.
  var lang = localStorage.getItem(LANG_KEY) || "hi";

  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] != null ? v[lang] : v.en || "";
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function setLang(next) {
    lang = next === "en" ? "en" : "hi";
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    document.documentElement.setAttribute("data-lang", lang);
    render();
  }

  /* ------------------------------------------------------------------- UTILS */
  // Mobile detection drives tap-to-call/email vs desktop copy-to-clipboard.
  function isMobile() {
    return /Android|iPhone|iPad|iPod|Windows Phone|Mobile/i.test(navigator.userAgent) ||
      (window.matchMedia && window.matchMedia("(max-width: 820px)").matches);
  }

  function toast(msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  function copyText(value, msg) {
    var done = function () { toast(msg || t(S.ui.copied)); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, function () { legacyCopy(value, done); });
    } else {
      legacyCopy(value, done);
    }
  }
  function legacyCopy(value, done) {
    var ta = document.createElement("textarea");
    ta.value = value;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }

  var ICON = {
    instagram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V14h2.3v8h3.6z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M20.5 3.5A10.5 10.5 0 0 0 3.6 16.2L2 22l5.9-1.5A10.5 10.5 0 1 0 20.5 3.5zm-8.4 16a8.7 8.7 0 0 1-4.4-1.2l-.3-.2-3.5.9.9-3.4-.2-.3a8.7 8.7 0 1 1 7.5 4.2zm4.9-6.5c-.3-.1-1.6-.8-1.8-.9-.3-.1-.5-.1-.7.1l-1 1.2c-.2.2-.4.2-.6.1a7.1 7.1 0 0 1-3.5-3c-.1-.2 0-.4.1-.6l.9-1c.2-.2.1-.4 0-.7l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.2 5 4.4 2.5 1 3 .8 3.6.7.5-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a16 16 0 0 1-16-16z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    copy: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 12.5l5 5L20 6.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/></svg>',
    play: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>'
  };

  /* -------------------------------------------------------------- DECORATION */
  // Subtle Om / lotus divider used between sections.
  function divider(small) {
    return '' +
      '<div class="divider' + (small ? ' divider--sm' : '') + '" aria-hidden="true">' +
      '<span class="divider__line"></span>' +
      '<span class="divider__orn">' +
      '<svg viewBox="0 0 120 40" width="132" height="44" fill="none">' +
      '<path d="M10 20h32M78 20h32" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>' +
      '<path d="M60 6c4 6 10 9 10 15s-5 9-10 9-10-3-10-9 6-9 10-15z" stroke="currentColor" stroke-width="1.5"/>' +
      '<path d="M60 30c-6 0-11 2-14 6 6 2 13 1 14-6zM60 30c6 0 11 2 14 6-6 2-13 1-14-6z" fill="currentColor" opacity=".7"/>' +
      '<circle cx="44" cy="20" r="2.4" fill="currentColor" opacity=".7"/><circle cx="76" cy="20" r="2.4" fill="currentColor" opacity=".7"/>' +
      '</svg></span>' +
      '<span class="divider__line"></span></div>';
  }

  /* ------------------------------------------------------------------ HEADER */
  function headerHTML(page) {
    var links = S.nav.map(function (n) {
      var active = n.id === page ? ' class="nav__link is-active" aria-current="page"' : ' class="nav__link"';
      return '<a href="' + n.href + '"' + active + '>' + esc(t(n.label)) + "</a>";
    }).join("");

    return '' +
      '<div class="header__inner container">' +
        '<a class="brand" href="index.html" aria-label="' + esc(t(S.brand.name)) + ' — Home">' +
          '<img class="brand__logo" src="' + S.brand.logo + '" alt="' + esc(t(S.brand.name)) + ' emblem" width="52" height="52">' +
          '<span class="brand__text"><span class="brand__name">' + esc(t(S.brand.name)) + '</span>' +
          '<span class="brand__tag">' + esc(t(S.brand.tagline)) + "</span></span>" +
        "</a>" +
        '<nav class="nav" id="primary-nav" aria-label="Main">' + links + "</nav>" +
        '<div class="header__actions">' +
          '<div class="lang" role="group" aria-label="' + esc(t(S.ui.language)) + '">' +
            '<button type="button" class="lang__btn' + (lang === "en" ? " is-on" : "") + '" data-lang="en">EN</button>' +
            '<span class="lang__sep" aria-hidden="true">|</span>' +
            '<button type="button" class="lang__btn' + (lang === "hi" ? " is-on" : "") + '" data-lang="hi">हिन्दी</button>' +
          "</div>" +
          '<a class="btn btn--primary btn--sm header__donate" href="donation.html">' + esc(t(S.ui.donateNow)) + "</a>" +
          '<button type="button" class="burger" id="burger" aria-label="' + esc(t(S.ui.menu)) + '" aria-expanded="false" aria-controls="primary-nav">' +
            "<span></span><span></span><span></span></button>" +
        "</div>" +
      "</div>";
  }

  /* ------------------------------------------------------------------ FOOTER */
  function contactRow(kind, label, value, href) {
    // Mobile: real tap action. Desktop: copy to clipboard with a toast.
    var mob = isMobile();
    var attrs = mob ? ' href="' + href + '"' : ' href="#" data-copy="' + esc(value) + '" data-copy-msg="' + esc(label) + '"';
    return '<li class="foot__contact">' +
      '<span class="foot__ico">' + ICON[kind] + "</span>" +
      '<a class="foot__link"' + attrs + ">" + esc(value) + "</a></li>";
  }

  function footerHTML() {
    var quick = S.nav.map(function (n) {
      return '<li><a href="' + n.href + '">' + esc(t(n.label)) + "</a></li>";
    }).join("");

    return '' +
      '<div class="container foot__grid">' +
        '<div class="foot__col">' +
          '<a class="brand brand--foot" href="index.html">' +
            '<img class="brand__logo" src="' + S.brand.logo + '" alt="" width="46" height="46">' +
            '<span class="brand__text"><span class="brand__name">' + esc(t(S.brand.name)) + "</span></span>" +
          "</a>" +
          "<p class=\"foot__about\">" + esc(t(S.footer.about)) + "</p>" +
          '<div class="foot__social">' +
            '<a href="' + S.social.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICON.instagram + "</a>" +
            '<a href="' + S.social.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICON.facebook + "</a>" +
          "</div>" +
        "</div>" +
        '<div class="foot__col">' +
          "<h3>" + esc(t(S.footer.quickLinks)) + "</h3>" +
          '<ul class="foot__links">' + quick + "</ul>" +
        "</div>" +
        '<div class="foot__col">' +
          "<h3>" + esc(t(S.footer.reachUs)) + "</h3>" +
          '<ul class="foot__list">' +
            '<li class="foot__contact"><span class="foot__ico">' + ICON.pin + "</span>" +
              '<a class="foot__link" href="' + S.contact.mapLink + '" target="_blank" rel="noopener">' + esc(t(S.contact.address)) + "</a></li>" +
            contactRow("phone", t(S.ui.phoneCopied), S.contact.phoneDisplay, "tel:" + S.contact.phone) +
            contactRow("mail", t(S.ui.emailCopied), S.contact.email, "mailto:" + S.contact.email) +
          "</ul>" +
        "</div>" +
      "</div>" +
      '<div class="foot__bar"><div class="container">' + esc(t(S.footer.copyright)) + "</div></div>";
  }

  /* -------------------------------------------------------------- ANIMATION */
  var observer = null;
  function observeReveals() {
    var nodes = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("is-in"); });
      return;
    }
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach(function (n) { observer.observe(n); });
  }

  function animateCounters() {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    var run = function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var start = performance.now(), dur = 1500;
      var tick = function (now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString("en-IN");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------ LIVE OPEN/CLOSED */
  function mins(hhmm) {
    var p = hhmm.split(":").map(Number);
    return p[0] * 60 + p[1];
  }
  function fmt12(hhmm) {
    var p = hhmm.split(":").map(Number);
    var h = p[0], m = p[1], ap = h >= 12 ? "PM" : "AM";
    h = h % 12; if (h === 0) h = 12;
    return h + ":" + (m < 10 ? "0" + m : m) + " " + ap;
  }
  function openState() {
    var now = new Date();
    var cur = now.getHours() * 60 + now.getMinutes();
    var wins = S.pages.timings.openWindows;
    for (var i = 0; i < wins.length; i++) {
      if (cur >= mins(wins[i][0]) && cur < mins(wins[i][1])) {
        return { open: true, until: fmt12(wins[i][1]) };
      }
    }
    for (var j = 0; j < wins.length; j++) {
      if (cur < mins(wins[j][0])) return { open: false, opens: fmt12(wins[j][0]) };
    }
    return { open: false, opens: fmt12(wins[0][0]) };
  }
  function renderBadge() {
    var el = document.getElementById("open-badge");
    if (!el) return;
    var st = openState();
    el.className = "badge " + (st.open ? "badge--open" : "badge--closed");
    el.innerHTML = '<span class="badge__dot"></span><strong>' +
      esc(st.open ? t(S.ui.openNow) : t(S.ui.closedNow)) + "</strong>" +
      '<span class="badge__sub">' + esc(st.open ? t(S.ui.openUntil) + " " + st.until : t(S.ui.opensAt) + " " + st.opens) + "</span>" +
      '<span class="badge__live" aria-hidden="true">' + ICON.clock + "</span>";
  }
  setInterval(renderBadge, 30000);

  /* ------------------------------------------------------------- COUNTDOWN */
  function renderCountdown() {
    var wrap = document.getElementById("countdown");
    if (!wrap) return;
    var target = new Date(S.pages.programs.upcoming.startDate).getTime();
    var diff = Math.max(0, target - Date.now());
    var s = Math.floor(diff / 1000);
    var parts = {
      days: Math.floor(s / 86400),
      hours: Math.floor((s % 86400) / 3600),
      minutes: Math.floor((s % 3600) / 60),
      seconds: s % 60
    };
    Object.keys(parts).forEach(function (k) {
      var el = wrap.querySelector('[data-cd="' + k + '"]');
      if (el) el.textContent = String(parts[k]).padStart(2, "0");
    });
  }
  setInterval(renderCountdown, 1000);

  /* ------------------------------------------------------------ PAGE BUILD */
  function section(inner, cls) {
    return '<section class="section ' + (cls || "") + '"><div class="container">' + inner + "</div></section>";
  }
  function heading(block, center) {
    return '<header class="sec-head' + (center ? " sec-head--center" : "") + '">' +
      '<h2 data-reveal>' + esc(t(block)) + "</h2>" + "</header>";
  }
  function card(img, title, date, text, alt) {
    return '<article class="card" data-reveal>' +
      '<div class="card__media"><img src="' + img + '" alt="' + esc(alt || t(title)) + '" loading="lazy" decoding="async"></div>' +
      '<div class="card__body">' +
        (date ? '<span class="chip chip--date">' + esc(t(date)) + "</span>" : "") +
        "<h3>" + esc(t(title)) + "</h3>" +
        "<p>" + esc(t(text)) + "</p>" +
      "</div></article>";
  }
    function galleryItems(items, cls) {
    return '<div class="gallery ' + (cls || "") + '">' + items.map(function (it, i) {
      var dir = it.from || (i % 2 === 0 ? "right" : "left");
      var n = it.album && it.album.length;
      var clickable = n ? ' data-album="' + i + '" role="button" tabindex="0" aria-label="' + esc(t(it.caption)) + '"' : "";
      return '<figure class="gallery__item reveal-' + dir + (n ? " gallery__item--album" : "") + '" data-reveal' + clickable + '>' +
        '<img src="' + it.image + '" alt="' + esc(t(it.caption)) + '" loading="lazy" decoding="async">' +
        (n ? '<span class="album-count">' + n + " " + esc(t({ en: "photos", hi: "फ़ोटो" })) + "</span>" : "") +
        '<figcaption>' + esc(t(it.caption)) + "</figcaption></figure>";
    }).join("") + "</div>";
  }

  /* ---------------------------------------------------------------- LIGHTBOX */
  var LB = { album: null, i: 0, x0: null };
  function injectLightboxCSS() {
    if (document.getElementById("lb-style")) return;
    var st = document.createElement("style");
    st.id = "lb-style";
    st.textContent =
      ".gallery--albums{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}" +
      "@media(max-width:700px){.gallery--albums{grid-template-columns:1fr}}" +
      ".gallery__item--album{position:relative;cursor:pointer}" +
      ".gallery__item--album img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block}" +
      ".gallery__item--album:focus-visible{outline:3px solid #D4A017;outline-offset:3px}" +
      ".album-count{position:absolute;top:12px;right:12px;background:rgba(122,31,31,.9);color:#fff;font-size:.8rem;padding:.25rem .7rem;border-radius:999px}" +
      ".lb{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.92);display:none;align-items:center;justify-content:center;flex-direction:column;padding:1rem}" +
      ".lb.is-open{display:flex}" +
      ".lb__img{max-width:92vw;max-height:76vh;object-fit:contain;border-radius:8px;user-select:none}" +
      ".lb__cap{color:#fff;margin-top:.9rem;font-size:1.05rem;text-align:center}" +
      ".lb__count{color:#D4A017;font-size:.85rem;margin-top:.3rem}" +
      ".lb__btn{position:absolute;background:rgba(255,255,255,.15);color:#fff;border:0;width:46px;height:46px;border-radius:50%;font-size:1.6rem;cursor:pointer}" +
      ".lb__btn:hover{background:#E8710A}" +
      ".lb__close{top:16px;right:16px}.lb__prev{left:14px;top:50%}.lb__next{right:14px;top:50%}" +
      ".lb--single .lb__prev,.lb--single .lb__next,.lb--single .lb__count{display:none}";
    document.head.appendChild(st);
  }
  function lbShow() {
    var box = document.getElementById("lb");
    if (!box || !LB.album) return;
    var p = LB.album[LB.i];
    box.querySelector(".lb__img").src = p.image;
    box.querySelector(".lb__img").alt = t(p.caption);
    box.querySelector(".lb__cap").textContent = t(p.caption);
    box.querySelector(".lb__count").textContent = (LB.i + 1) + " / " + LB.album.length;
    box.classList.toggle("lb--single", LB.album.length < 2);
  }
  function lbOpen(album, start) {
    injectLightboxCSS();
    var box = document.getElementById("lb");
    if (!box) {
      box = document.createElement("div");
      box.id = "lb"; box.className = "lb";
      box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true");
      box.innerHTML = '<button class="lb__btn lb__close" aria-label="Close">&times;</button>' +
        '<button class="lb__btn lb__prev" aria-label="Previous">&#8249;</button>' +
        '<img class="lb__img" alt="">' +
        '<button class="lb__btn lb__next" aria-label="Next">&#8250;</button>' +
        '<div class="lb__cap"></div><div class="lb__count"></div>';
      document.body.appendChild(box);
      box.addEventListener("click", function (e) {
        if (e.target.closest(".lb__close") || e.target === box) lbClose();
        else if (e.target.closest(".lb__prev")) lbStep(-1);
        else if (e.target.closest(".lb__next")) lbStep(1);
      });
      box.addEventListener("touchstart", function (e) { LB.x0 = e.touches[0].clientX; }, { passive: true });
      box.addEventListener("touchend", function (e) {
        if (LB.x0 == null) return;
        var dx = e.changedTouches[0].clientX - LB.x0; LB.x0 = null;
        if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1);
      });
      document.addEventListener("keydown", function (e) {
        if (!box.classList.contains("is-open")) return;
        if (e.key === "Escape") lbClose();
        else if (e.key === "ArrowRight") lbStep(1);
        else if (e.key === "ArrowLeft") lbStep(-1);
      });
    }
    LB.album = album; LB.i = start || 0;
    lbShow();
    box.classList.add("is-open");
    document.body.style.overflow = "hidden";
    box.querySelector(".lb__close").focus();
  }
  function lbStep(d) {
    if (!LB.album) return;
    LB.i = (LB.i + d + LB.album.length) % LB.album.length;
    lbShow();
  }
  function lbClose() {
    var box = document.getElementById("lb");
    if (box) box.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  var PAGES = {};

  /* ------------------------------------------------------------------ HOME */
  PAGES.home = function () {
    var h = S.pages.home;
    var html = "";

    html += '<section class="hero">' +
      '<div class="hero__media"><img src="' + h.hero.image + '" alt="' + esc(t(h.hero.title)) + ' at aarti" fetchpriority="high"></div>' +
      '<div class="hero__scrim"></div>' +
      '<div class="container hero__inner">' +
        '<p class="hero__kicker" data-reveal>' + esc(t(h.hero.kicker)) + "</p>" +
        '<div class="hero__om" aria-hidden="true">ॐ</div>' +
        '<h1 data-reveal>' + esc(t(h.hero.title)) + "</h1>" +
        '<p class="hero__tag" data-reveal>' + esc(t(h.hero.subtitle)) + "</p>" +
        '<p class="hero__text" data-reveal>' + esc(t(h.hero.text)) + "</p>" +
        '<div class="hero__cta" data-reveal>' +
          '<a class="btn btn--primary btn--lg" href="donation.html">' + esc(t(S.ui.donate)) + "</a>" +
          '<a class="btn btn--ghost btn--lg" href="timings.html">' + esc(t(S.ui.planVisit)) + "</a>" +
        "</div>" +
      "</div></section>";

    html += section(
      heading(h.gallery.heading, true) +
      '<p class="sec-sub" data-reveal>' + esc(t(h.gallery.subheading)) + "</p>" +
      galleryItems(h.gallery.items, "gallery--albums"), "section--cream");
    html += divider();

    html += section(
      '<div class="split">' +
        '<div class="split__media" data-reveal><img src="' + h.about.image + '" alt="' + esc(t(h.about.heading)) + '" loading="lazy"></div>' +
        '<div class="split__body" data-reveal>' +
          heading(h.about.heading) +
          h.about.paragraphs.map(function (p) { return "<p>" + esc(t(p)) + "</p>"; }).join("") +
          '<a class="btn btn--outline" href="history.html">' + esc(t(S.ui.readHistory)) + " " + ICON.arrow + "</a>" +
        "</div></div>", "section--paper");
    html += divider();

    var hl = h.highlights;
    html += section(
      heading(hl.heading, true) +
      '<div class="highlights">' +
        '<article class="hcard hcard--aarti" data-reveal>' +
          '<span class="hcard__label">' + esc(t(hl.aartiCard.label)) + "</span>" +
          "<h3>" + esc(t(hl.aartiCard.name)) + "</h3>" +
          '<p class="hcard__time">' + ICON.clock + " " + esc(t(hl.aartiCard.time)) + "</p>" +
          "<p>" + esc(t(hl.aartiCard.text)) + "</p>" +
          '<a class="link-arrow" href="timings.html">' + esc(t(S.ui.viewTimings)) + " " + ICON.arrow + "</a>" +
        "</article>" +
        '<article class="hcard hcard--event" data-reveal>' +
          '<span class="hcard__label">' + esc(t(hl.eventCard.label)) + "</span>" +
          "<h3>" + esc(t(hl.eventCard.name)) + "</h3>" +
          '<p class="hcard__time">' + esc(t(hl.eventCard.date)) + "</p>" +
          "<p>" + esc(t(hl.eventCard.text)) + "</p>" +
          '<a class="link-arrow" href="programs.html">' + esc(t(S.ui.knowMore)) + " " + ICON.arrow + "</a>" +
        "</article>" +
        '<article class="hcard hcard--donate" data-reveal>' +
          '<span class="hcard__label">' + esc(t(hl.donateCard.label)) + "</span>" +
          "<h3>" + esc(t(hl.donateCard.name)) + "</h3>" +
          "<p>" + esc(t(hl.donateCard.text)) + "</p>" +
          '<a class="btn btn--primary" href="donation.html">' + esc(t(S.ui.donateNow)) + "</a>" +
        "</article>" +
      "</div>", "section--cream");

    return html;
  };

  /* --------------------------------------------------------------- HISTORY */
  PAGES.history = function () {
    var h = S.pages.history;
    var html = "";

    html += '<section class="pagehead"><div class="container">' +
      '<h1 data-reveal>' + esc(t(h.title)) + "</h1>" +
      '<p class="pagehead__text" data-reveal>' + esc(t(h.intro)) + "</p></div></section>";

    html += section(
      heading(h.origin.heading) +
      '<p class="lead" data-reveal>' + esc(t(h.origin.text)) + "</p>" +
      '<ol class="timeline">' + h.origin.timeline.map(function (e) {
        return '<li class="timeline__item" data-reveal>' +
          '<span class="timeline__year">' + esc(t(e.year)) + "</span>" +
          '<div class="timeline__body"><h3>' + esc(t(e.title)) + "</h3><p>" + esc(t(e.text)) + "</p></div></li>";
      }).join("") + "</ol>", "section--cream");
    html += divider();

    var m = h.maharaj;
    html += section(
      '<div class="split split--maharaj">' +
        '<div class="split__media split__media--portrait" data-reveal>' +
          '<img src="' + m.image + '" alt="' + esc(t(m.name)) + ' (sample portrait)" loading="lazy"></div>' +
        '<div class="split__body" data-reveal>' +
          heading(m.heading) +
          '<h3 class="maharaj__name">' + esc(t(m.name)) + "</h3>" +
          '<p class="maharaj__role">' + esc(t(m.role)) + "</p>" +
          m.bio.map(function (p) { return "<p>" + esc(t(p)) + "</p>"; }).join("") +
          '<blockquote class="quote">' + esc(t(m.quote)) + "</blockquote>" +
        "</div></div>" +
      '<div class="seva-block" data-reveal><h3>' + esc(t(m.sevaHeading)) + "</h3>" +
      '<ul class="ticks">' + m.seva.map(function (s) { return "<li>" + esc(t(s)) + "</li>"; }).join("") + "</ul></div>",
      "section--paper");
    html += divider();

    html += section(
      heading(h.gallery.heading, true) +
      '<div class="grid grid--3">' + h.gallery.items.map(function (it) {
        return '<figure class="tile" data-reveal><img src="' + it.image + '" alt="' + esc(t(it.caption)) + '" loading="lazy">' +
          "<figcaption>" + esc(t(it.caption)) + "</figcaption></figure>";
      }).join("") + "</div>", "section--cream");

    return html;
  };

  /* -------------------------------------------------------------- PROGRAMS */
  PAGES.programs = function () {
    var p = S.pages.programs;
    var html = "";

    html += '<section class="pagehead"><div class="container">' +
      '<h1 data-reveal>' + esc(t(p.title)) + "</h1>" +
      '<p class="pagehead__text" data-reveal>' + esc(t(p.intro)) + "</p></div></section>";

    var up = p.upcoming;
    html += '<section class="event-banner"><div class="container event-banner__inner">' +
      '<div class="event-banner__media" data-reveal><img src="' + up.image + '" alt="' + esc(t(up.name)) + '" loading="lazy"></div>' +
      '<div class="event-banner__body" data-reveal>' +
        '<span class="chip chip--gold">' + esc(t(up.heading)) + "</span>" +
        "<h2>" + esc(t(up.name)) + "</h2>" +
        '<p class="event-banner__date">' + ICON.clock + " " + esc(t(up.date)) + "</p>" +
        "<p>" + esc(t(up.text)) + "</p>" +
        '<div class="countdown" id="countdown">' +
          ["days", "hours", "minutes", "seconds"].map(function (k) {
            return '<div class="cd"><span class="cd__num" data-cd="' + k + '">00</span>' +
              '<span class="cd__lab">' + esc(t(up.countdown[k])) + "</span></div>";
          }).join("") +
        "</div>" +
      "</div></div></section>";

    html += section(
      heading(p.festivalsHeading, true) +
      '<div class="grid grid--3">' + p.festivals.map(function (f) {
        return card(f.image, f.name, f.date, f.text);
      }).join("") + "</div>", "section--cream");
    html += divider();

    html += section(
      heading(p.calendar.heading) +
      '<p class="sec-sub" data-reveal>' + esc(t(p.calendar.note)) + "</p>" +
      '<div class="table-wrap" data-reveal><table class="table"><thead><tr>' +
        "<th>" + esc(t({ en: "Month", hi: "माह" })) + "</th><th>" + esc(t({ en: "Festival / Program", hi: "उत्सव / कार्यक्रम" })) + "</th>" +
      "</tr></thead><tbody>" + p.calendar.rows.map(function (r) {
        return "<tr><td>" + esc(t(r.month)) + "</td><td>" + esc(t(r.event)) + "</td></tr>";
      }).join("") + "</tbody></table></div>", "section--paper");
    html += divider();

    html += section(
      heading(p.gallery.heading, true) +
      '<div class="grid grid--3">' + p.gallery.items.map(function (it) {
        return '<figure class="tile" data-reveal><img src="' + it.image + '" alt="' + esc(t(it.caption)) + '" loading="lazy">' +
          "<figcaption>" + esc(t(it.caption)) + "</figcaption></figure>";
      }).join("") + "</div>", "section--cream");

    return html;
  };

  /* --------------------------------------------------------------- TIMINGS */
  PAGES.timings = function () {
    var p = S.pages.timings;
    var html = "";

    html += '<section class="pagehead"><div class="container">' +
      '<h1 data-reveal>' + esc(t(p.title)) + "</h1>" +
      '<p class="pagehead__text" data-reveal>' + esc(t(p.intro)) + "</p>" +
      '<div class="badge-wrap" data-reveal><div id="open-badge" class="badge"></div>' +
      '<p class="badge-note">' + esc(t(p.badgeNote)) + "</p></div></div></section>";

    html += section(
      heading(p.dailyHeading, true) +
      '<div class="timing-grid">' + p.daily.map(function (d) {
        return '<article class="timing" data-reveal>' +
          '<div class="timing__time">' + esc(fmt12(d.time)) + '<span>– ' + esc(fmt12(d.end)) + "</span></div>" +
          '<div class="timing__body"><h3>' + esc(t(d.name)) + "</h3><p>" + esc(t(d.note)) + "</p></div></article>";
      }).join("") + "</div>", "section--cream");
    html += divider();

    html += section(
      heading(p.specialHeading) +
      '<p class="sec-sub" data-reveal>' + esc(t(p.specialNote)) + "</p>" +
      '<div class="table-wrap" data-reveal><table class="table table--timings"><thead><tr>' +
        "<th>" + esc(t({ en: "Occasion", hi: "अवसर" })) + "</th>" +
        "<th>" + esc(t({ en: "Timing", hi: "समय" })) + "</th>" +
        "<th>" + esc(t({ en: "Details", hi: "विवरण" })) + "</th></tr></thead><tbody>" +
        p.special.map(function (s) {
          return "<tr><td><strong>" + esc(t(s.name)) + "</strong></td><td>" + esc(t(s.time)) + "</td><td>" + esc(t(s.note)) + "</td></tr>";
        }).join("") + "</tbody></table></div>", "section--paper");
    html += divider();

    html += section(
      '<div class="live" data-reveal>' +
        '<div class="live__body"><h2>' + esc(t(p.live.heading)) + "</h2><p>" + esc(t(p.live.text)) + "</p></div>" +
        '<a class="btn btn--primary btn--lg" href="' + p.live.url + '" target="_blank" rel="noopener">' + ICON.play + " " + esc(t(p.live.heading)) + "</a>" +
      "</div>", "section--cream");

    return html;
  };

  /* -------------------------------------------------------------- DONATION */
  PAGES.donation = function () {
    var p = S.pages.donation;
    var html = "";

    html += '<section class="pagehead"><div class="container">' +
      '<h1 data-reveal>' + esc(t(p.title)) + "</h1>" +
      '<p class="pagehead__text" data-reveal>' + esc(t(p.intro)) + "</p></div></section>";

    html += section(
      heading(p.causesHeading, true) +
      '<div class="grid grid--3">' + p.causes.map(function (c) {
        return '<article class="card card--cause" data-reveal>' +
          '<div class="card__media"><img src="' + c.image + '" alt="' + esc(t(c.title)) + '" loading="lazy"></div>' +
          '<div class="card__body"><h3>' + esc(t(c.title)) + "</h3><p>" + esc(t(c.text)) + "</p>" +
          '<p class="impact">' + esc(t(c.impact)) + "</p></div></article>";
      }).join("") + "</div>", "section--cream");
    html += divider();

    html += section(
      heading(p.countersHeading, true) +
      '<div class="counters">' + p.counters.map(function (c) {
        return '<div class="counter" data-reveal><span class="counter__num"><span data-count="' + c.value + '">0</span>' + c.suffix + "</span>" +
          '<span class="counter__lab">' + esc(t(c.label)) + "</span></div>";
      }).join("") + "</div>", "section--paper");
    html += divider();

    // Charts + banking
    html += section(
      heading(p.howHeading, true) +
      '<div class="donate">' +
        '<div class="donate__qr panel" data-reveal>' +
          "<h3>" + esc(t(p.upi.heading)) + "</h3>" +
          '<div class="qr-frame"><img src="' + p.upi.qr + '" alt="UPI QR code for ' + esc(p.upi.id) + '" width="260" height="260"></div>' +
          '<div class="copyline"><code>' + esc(p.upi.id) + "</code>" +
            '<button type="button" class="btn btn--outline btn--sm" data-copy="' + esc(p.upi.id) + '">' + ICON.copy + esc(t(S.ui.copy)) + "</button></div>" +
          '<a class="btn btn--primary btn--block mobile-only" href="' + p.upi.link + '">' + esc(t(p.upi.payInApp)) + "</a>" +
          '<p class="muted">' + esc(t(p.upi.note)) + "</p>" +
        "</div>" +
        '<div class="donate__side">' +
          '<div class="panel" data-reveal>' +
            "<h3>" + esc(t(p.amounts.heading)) + "</h3>" +
            '<p class="muted">' + esc(t(p.amounts.note)) + "</p>" +
            '<div class="chips">' + p.amounts.options.map(function (a) {
              return '<button type="button" class="chip chip--pick" data-amount="' + a + '">' + esc(t(p.amounts.currency)) + " " + a + "</button>";
            }).join("") +
            '<button type="button" class="chip chip--pick" data-amount="custom">' + esc(t(p.amounts.custom)) + "</button></div>" +
          "</div>" +
          '<div class="panel" data-reveal>' +
            "<h3>" + esc(t(p.bank.heading)) + "</h3>" +
            '<ul class="bank">' + p.bank.rows.map(function (r) {
              return '<li><span class="bank__lab">' + esc(t(r.label)) + "</span>" +
                '<span class="bank__val"><code>' + esc(r.value) + "</code>" +
                '<button type="button" class="iconbtn" aria-label="' + esc(t(S.ui.copy)) + '" data-copy="' + esc(r.value) + '">' + ICON.copy + "</button></span></li>";
            }).join("") + "</ul>" +
            '<button type="button" class="btn btn--primary btn--block" data-toast="' + esc(t(p.bank.onlineNote)) + '">' + esc(t(p.bank.online)) + "</button>" +
            '<p class="muted">' + esc(t(p.bank.onlineNote)) + "</p>" +
          "</div>" +
        "</div>" +
      "</div>", "section--cream");
    html += divider();

    html += section(
      '<div class="split split--form">' +
        '<div class="split__body" data-reveal>' +
          heading(p.tax.heading) + "<p class=\"lead\">" + esc(t(p.tax.text)) + "</p>" +
          '<div class="panel panel--trust"><h3>' + esc(t(p.trust.heading)) + "</h3><p>" + esc(t(p.trust.text)) + "</p></div>" +
        "</div>" +
        '<div class="split__form panel" data-reveal>' +
          "<h3>" + esc(t(p.form.heading)) + "</h3>" +
          '<p class="muted">' + esc(t(p.form.note)) + "</p>" +
          '<form class="form" data-form>' +
            field("don-name", p.form.fields.name, "text") +
            field("don-phone", p.form.fields.phone, "tel") +
            field("don-email", p.form.fields.email, "email") +
            field("don-amount", p.form.fields.amount, "number", "amt") +
            field("don-pan", p.form.fields.pan, "text") +
            field("don-msg", p.form.fields.message, "text", "msg") +
            '<button type="submit" class="btn btn--primary btn--block">' + esc(t(p.form.submit)) + "</button>" +
            '<p class="form__ok" hidden>' + esc(t(p.form.success)) + "</p>" +
          "</form>" +
        "</div></div>", "section--paper");

    return html;
  };

  /* --------------------------------------------------------------- CONTACT */
  PAGES.contact = function () {
    var p = S.pages.contact, C = S.contact;
    var html = "";

    html += '<section class="pagehead"><div class="container">' +
      '<h1 data-reveal>' + esc(t(p.title)) + "</h1>" +
      '<p class="pagehead__text" data-reveal>' + esc(t(p.intro)) + "</p></div></section>";

    var rows = [
      { ico: ICON.pin, label: { en: "Address", hi: "पता" }, value: t(C.address), href: C.mapLink, target: true },
      { ico: ICON.phone, label: { en: "Phone", hi: "फ़ोन" }, value: C.phoneDisplay, href: "tel:" + C.phone, copy: C.phoneDisplay, msg: t(S.ui.phoneCopied) },
      { ico: ICON.mail, label: { en: "Email", hi: "ईमेल" }, value: C.email, href: "mailto:" + C.email, copy: C.email, msg: t(S.ui.emailCopied) }
    ];
    var mob = isMobile();

    html += section(
      '<div class="contact-grid">' +
        '<div class="contact-info" data-reveal>' +
          "<h2>" + esc(t(p.detailsHeading)) + "</h2>" +
          '<ul class="contact-list">' + rows.map(function (r) {
            var a;
            if (r.copy && !mob) {
              a = '<a href="#" data-copy="' + esc(r.copy) + '" data-copy-msg="' + esc(r.msg) + '">' + esc(r.value) + "</a>";
            } else {
              a = '<a href="' + r.href + '"' + (r.target ? ' target="_blank" rel="noopener"' : "") + ">" + esc(r.value) + "</a>";
            }
            return '<li><span class="contact-list__ico">' + r.ico + "</span><div>" +
              '<span class="contact-list__lab">' + esc(t(r.label)) + "</span>" + a + "</div></li>";
          }).join("") +
          '<li><span class="contact-list__ico">' + ICON.clock + "</span><div>" +
            '<span class="contact-list__lab">' + esc(t({ en: "Darshan Hours", hi: "दर्शन समय" })) + "</span>" +
            '<a href="timings.html">' + esc(t(p.timingsLink)) + " " + ICON.arrow + "</a></div></li>" +
          "</ul>" +
          '<a class="btn btn--outline" href="' + C.mapLink + '" target="_blank" rel="noopener">' + ICON.pin + " " + esc(t(S.ui.getDirections)) + "</a>" +
        "</div>" +
        '<div class="contact-form panel" data-reveal>' +
          "<h2>" + esc(t(p.form.heading)) + "</h2>" +
          '<p class="muted">' + esc(t(p.form.note)) + "</p>" +
          '<form class="form" data-form>' +
            field("ct-name", p.form.fields.name, "text") +
            field("ct-phone", p.form.fields.phone, "tel") +
            field("ct-msg", p.form.fields.message, "text", "msg") +
            '<button type="submit" class="btn btn--primary btn--block">' + esc(t(p.form.submit)) + "</button>" +
            '<p class="form__ok" hidden>' + esc(t(p.form.success)) + "</p>" +
          "</form>" +
        "</div>" +
      "</div>", "section--cream");
    html += divider();

    html += section(
      heading(p.reachHeading, true) +
      '<div class="grid grid--4">' + p.reach.map(function (r) {
        return '<article class="reach" data-reveal><span class="reach__mode">' + esc(t(r.mode)) + "</span>" +
          "<h3>" + esc(t(r.name)) + "</h3><p>" + esc(t(r.note)) + "</p></article>";
      }).join("") + "</div>", "section--paper");

    html += '<section class="map-band"><div class="container" data-reveal>' +
      '<iframe title="' + esc(t(S.brand.name)) + ' location map" src="' + C.mapEmbed + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>' +
      "</div></section>";

    return html;
  };

  function field(id, label, type, kind) {
    var input = kind === "msg"
      ? '<textarea id="' + id + '" name="' + id + '" rows="4"></textarea>'
      : '<input id="' + id + '" name="' + id + '" type="' + type + '"' + (type === "number" ? ' min="1"' : "") + ">";
    return '<div class="form__row' + (kind === "msg" ? " form__row--full" : "") + '">' +
      '<label for="' + id + '">' + esc(t(label)) + "</label>" + input + "</div>";
  }

  /* ------------------------------------------------------------------ SHELL */
  function shellHTML(page) {
    var body = (PAGES[page] || PAGES.home)();
    return '' +
      '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="header" id="site-header">' + headerHTML(page) + "</header>" +
      '<main id="main">' + body + "</main>" +
      '<footer class="footer" id="site-footer">' + footerHTML() + "</footer>" +
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>' +
      '<a class="whatsapp" href="https://wa.me/' + S.contact.whatsapp + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + ICON.whatsapp + "</a>";
  }

  /* ------------------------------------------------------------------ RENDER */
  function render() {
    var page = document.body.getAttribute("data-page") || "home";
    var app = document.getElementById("app");
    app.innerHTML = shellHTML(page);
    document.title = pageTitle(page);
    wire();
    observeReveals();
    renderBadge();
    renderCountdown();
    animateCounters();
  }

  function pageTitle(page) {
    var base = t(S.brand.name);
    var map = { home: t(S.brand.tagline), history: t(S.pages.history.title),
      programs: t(S.pages.programs.title), timings: t(S.pages.timings.title),
      donation: t(S.pages.donation.title), contact: t(S.pages.contact.title) };
    return (map[page] ? t(map[page]) + " | " : "") + base;
  }

  /* -------------------------------------------------------------- INTERACT */
  function wire() {
    var app = document.getElementById("app");

    // --- language toggle
    app.querySelectorAll(".lang__btn").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });

    // --- mobile hamburger
    var burger = document.getElementById("burger");
    var header = document.getElementById("site-header");
    if (burger && header) {
      burger.addEventListener("click", function () {
        var open = header.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      app.querySelectorAll(".nav__link").forEach(function (a) {
        a.addEventListener("click", function () {
          header.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }

    // --- copy-to-clipboard buttons and links
    app.querySelectorAll("[data-copy]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        copyText(el.getAttribute("data-copy"), el.getAttribute("data-copy-msg") || null);
      });
    });
    // --- placeholder toasts (payment gateway)
    app.querySelectorAll("[data-toast]").forEach(function (el) {
      el.addEventListener("click", function () { toast(el.getAttribute("data-toast")); });
    });

    // --- suggested amount chips -> fill receipt form
    app.querySelectorAll(".chip--pick").forEach(function (c) {
      c.addEventListener("click", function () {
        app.querySelectorAll(".chip--pick").forEach(function (x) { x.classList.remove("is-on"); });
        c.classList.add("is-on");
        var amt = c.getAttribute("data-amount");
        var input = document.getElementById("don-amount");
        if (input && amt !== "custom") input.value = amt;
        if (input && amt === "custom") { input.value = ""; input.focus(); }
      });
    });

    // --- demo forms
    app.querySelectorAll("form[data-form]").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var ok = f.querySelector(".form__ok");
        if (ok) ok.hidden = false;
        f.reset();
        toast(t({ en: "Submitted (demo)", hi: "जमा हुआ (डेमो)" }));
      });
    });
    // --- gallery cards -> open photo album lightbox
    app.querySelectorAll("[data-album]").forEach(function (card) {
      var open = function () {
        var it = S.pages.home.gallery.items[+card.getAttribute("data-album")];
        if (it && it.album) lbOpen(it.album, 0);
      };
      card.addEventListener("click", open);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });
    // --- smooth in-page anchors
    app.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1) {
          var el = document.querySelector(id);
          if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
        }
      });
    });
  }

  /* --------------------------------------------------------------- BOOT */
  function boot() {
    injectLightboxCSS();
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    document.documentElement.setAttribute("data-lang", lang);
    render();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
