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
