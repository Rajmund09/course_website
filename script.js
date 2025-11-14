
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
 (function(){
    const wrap = document.querySelector('.logo-wrap');
    const sweep = wrap.querySelector('.sweep');

    // to ensure a consistent 3s cycle, use setInterval
    const CYCLE = 3000;
    function pulse() {
      // restart CSS animation by toggling class (force reflow)
      sweep.style.transition = 'none';
      sweep.style.transform = 'translateX(-120%)';
      // small timeout to allow browser to apply initial state
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          sweep.style.transition = 'transform 1.05s linear';
          sweep.style.transform = 'translateX(120%)';
        });
      });

      // tiny pop for particles & spark: toggle a data-attr (used by CSS animations already)
      wrap.classList.remove('active');
      void wrap.offsetWidth;
      wrap.classList.add('active');
    }

    // run immediately and then every CYCLE
    pulse();
    setInterval(pulse, CYCLE);

    // optional: better hover interactions (pause animation on hover)
    wrap.addEventListener('mouseenter', ()=> {
      wrap.querySelector('.glow-circle').style.animationPlayState = 'paused';
      wrap.querySelector('.e-path').style.animationPlayState = 'paused';
    });
    wrap.addEventListener('mouseleave', ()=> {
      wrap.querySelector('.glow-circle').style.animationPlayState = '';
      wrap.querySelector('.e-path').style.animationPlayState = '';
    });
  })();
