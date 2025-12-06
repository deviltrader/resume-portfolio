document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;

  // highlight active nav link
  const links = document.querySelectorAll('.main-nav .nav-link');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // small fade-in (jQuery if available)
  if (window.jQuery) {
    $(function(){
      $('h1, h2, .card').hide().fadeIn(400);
    });
  }
});
