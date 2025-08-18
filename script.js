document.addEventListener('DOMContentLoaded', function() {

  const hamburgerButton = document.getElementById('hamburger-button');
  const mainMenu = document.getElementById('main-menu');

  if (hamburgerButton && mainMenu) {
    hamburgerButton.addEventListener('click', () => {
      mainMenu.classList.toggle('active');
    });
  }

  const skillBars = document.querySelectorAll('#habilidades .bar span');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const percent = element.getAttribute('data-percent') || '0';
        element.style.width = percent + '%';
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  skillBars.forEach(bar => {
    observer.observe(bar);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        if (window.innerWidth < 680 && mainMenu.classList.contains('active')) {
          mainMenu.classList.remove('active');
        }
      }
    });
  });

});
