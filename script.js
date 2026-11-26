// ==========================================================
// PORTOFOLIO FIZAH - INTERACTIVE SCRIPT
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // Header Scroll Effect & Active Link Highlight
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header shadow on scroll
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Active Section Link Highlight
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Sparkle / Semangat Counter Interaction
  const sparkleBtn = document.getElementById('sparkle-btn');
  const sparkleCounter = document.getElementById('sparkle-counter');

  // Load saved counter or default to 12
  let count = parseInt(localStorage.getItem('fizah_semangat_count') || '12', 10);
  if (sparkleCounter) {
    sparkleCounter.textContent = `💖 ${count} Semangat terkirim untuk Fizah`;
  }

  if (sparkleBtn) {
    sparkleBtn.addEventListener('click', (e) => {
      count++;
      localStorage.setItem('fizah_semangat_count', count);
      if (sparkleCounter) {
        sparkleCounter.textContent = `💖 ${count} Semangat terkirim untuk Fizah`;
      }

      // Spawn cute floating hearts / sparkles
      createFloatingParticles(e.clientX, e.clientY);
    });
  }

  function createFloatingParticles(x, y) {
    const symbols = ['🌸', '💖', '✨', '🎀', '🌷', '💕'];
    const particleCount = 6;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('span');
      particle.className = 'heart-particle';
      particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      
      const offsetX = (Math.random() - 0.5) * 60;
      const offsetY = (Math.random() - 0.5) * 40;
      
      particle.style.left = `${x + offsetX}px`;
      particle.style.top = `${y + offsetY}px`;
      
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1200);
    }
  }

  // Smooth Back to Top
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
