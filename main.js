document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once revealed, no need to observe again
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed nav height
          behavior: 'smooth'
        });
      }
    });
  });

  // Dynamic navbar background adjustment
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.padding = '0.8rem 0';
      nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
      nav.style.padding = '1.5rem 0';
      nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
  });
});
