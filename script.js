document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.before-fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('before-fade-in');
      }
    });
  }, {
    threshold: 0.2
  });

  animatedElements.forEach(el => observer.observe(el));
});