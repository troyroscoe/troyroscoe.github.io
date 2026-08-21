document.addEventListener('DOMContentLoaded', function () {
    var footer = document.querySelector('footer.site-footer');
    if (footer && !footer.querySelector('.footer-socials')) {
        var socials = document.createElement('div');
        socials.className = 'footer-socials';
        socials.innerHTML =
            '<a href="https://www.instagram.com/troyroscoe" target="_blank" rel="noopener" aria-label="Instagram">IG</a>' +
            '<a href="https://www.tiktok.com/@troyroscoe_" target="_blank" rel="noopener" aria-label="TikTok">TT</a>' +
            '<a href="https://www.youtube.com/c/TroyRoscoe" target="_blank" rel="noopener" aria-label="YouTube">YT</a>';
        footer.appendChild(socials);
    }

    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('nav.primary-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
          nav.classList.toggle('open');
          document.body.classList.toggle('nav-open', nav.classList.contains('open'));
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(function (a) {
          a.addEventListener('click', function () {
                  nav.classList.remove('open');
                  document.body.classList.remove('nav-open');
                  toggle.textContent = '☰';
          });
    });
});

/* ---------- Gallery lightbox ---------- */
document.addEventListener('DOMContentLoaded', function () {
    var galleryImgs = document.querySelectorAll('.showcase-gallery .showcase-img img');
    if (!galleryImgs.length) return;

    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close">&times;</button><img class="lightbox-img" src="" alt="">';
    document.body.appendChild(overlay);

    var overlayImg = overlay.querySelector('.lightbox-img');
    var closeBtn = overlay.querySelector('.lightbox-close');

    function openLightbox(src, alt) {
        overlayImg.src = src;
        overlayImg.alt = alt || '';
        overlay.classList.add('active');
        document.body.classList.add('lightbox-open');
    }

    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.classList.remove('lightbox-open');
        overlayImg.src = '';
    }

    galleryImgs.forEach(function (img) {
        img.addEventListener('click', function () {
            openLightbox(img.currentSrc || img.src, img.alt);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) closeLightbox();
    });
});
