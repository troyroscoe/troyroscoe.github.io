document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('nav.primary-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
          nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';   
    });
    nav.querySelectorAll('a').forEach(function (a) {
          a.addEventListener('click', function () {
                  nav.classList.remove('open');
                  toggle.textContent = '☰';
          });
    });
});
