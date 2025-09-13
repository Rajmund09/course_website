
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const cursor = document.querySelector('.custom-cursor');

  window.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});
  function toggleMenu() {
            var el = document.querySelector('.hamburger');
            if (el) el.classList.toggle('open');
        }