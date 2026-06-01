
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(0, 0, 0, 0.92)';
    nav.style.padding = '14px 60px';
  } else {
    nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)';
    nav.style.padding = '20px 60px';
  }
});