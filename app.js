/**
 * MIRELLE LUCIEN — PREMIUM GRANT CONSULTING WEBSITE
 * Interactive Engine & Revolution Slider Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initRevolutionSlider();
  initAnimatedCounters();
  initFaqAccordion();
  initTestimonialsSlider();
  initContactForm();
  initScrollReveals();
  initUrlParamHandling();
});

/* ==========================================================================
   1. STICKY HEADER & SCROLL DETECTION
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. POLISHED RESPONSIVE MOBILE NAVIGATION
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !overlay) return;

  const openMenu = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   3. REVOLUTION-SLIDER-STYLE HERO ANIMATION ENGINE
   ========================================================================== */
function initRevolutionSlider() {
  const sliderSection = document.querySelector('.hero-slider-section');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-nav-prev');
  const nextBtn = document.querySelector('.slider-nav-next');
  const progressFill = document.querySelector('.slide-progress-fill');
  const counterCurrent = document.querySelector('.counter-current');

  if (!sliderSection || slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  const slideDuration = 6500; // 6.5 seconds per slide
  let slideTimer = null;
  let progressInterval = null;
  let progressStart = 0;
  let isPaused = false;
  let remainingTime = slideDuration;

  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentSlide = index;

    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
        // Reset animation trigger
        const content = slide.querySelector('.slide-content');
        if (content) {
          content.style.animation = 'none';
          content.offsetHeight; // trigger reflow
          content.style.animation = '';
        }
      } else {
        slide.classList.remove('active');
      }
    });

    // Update Dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
      dot.setAttribute('aria-current', i === currentSlide ? 'true' : 'false');
    });

    // Update Slide Counter
    if (counterCurrent) {
      counterCurrent.textContent = `0${currentSlide + 1}`;
    }

    startProgressBar();
  }

  function startProgressBar() {
    clearInterval(progressInterval);
    if (progressFill) {
      progressFill.style.width = '0%';
    }
    progressStart = Date.now();
    remainingTime = slideDuration;

    progressInterval = setInterval(() => {
      if (isPaused) return;

      const elapsed = Date.now() - progressStart;
      const progressPercent = Math.min((elapsed / slideDuration) * 100, 100);

      if (progressFill) {
        progressFill.style.width = `${progressPercent}%`;
      }

      if (elapsed >= slideDuration) {
        clearInterval(progressInterval);
        nextSlide();
      }
    }, 50);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Prev / Next Listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
    });
  }

  // Dots Listeners
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(targetIndex)) {
        showSlide(targetIndex);
      }
    });
  });

  // Pause on Hover
  sliderSection.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  sliderSection.addEventListener('mouseleave', () => {
    isPaused = false;
    // Adjust start time to resume progress smoothly
    const currentPercent = progressFill ? parseFloat(progressFill.style.width) || 0 : 0;
    progressStart = Date.now() - (currentPercent / 100) * slideDuration;
  });

  // Keyboard navigation
  sliderSection.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  // Touch Swipe Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  sliderSection.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  sliderSection.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  }, { passive: true });

  function handleGesture() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
      nextSlide();
    }
    if (touchEndX > touchStartX + threshold) {
      prevSlide();
    }
  }

  // Initialize first slide
  showSlide(0);
}

/* ==========================================================================
   4. ANIMATED STATISTICS COUNTER
   ========================================================================== */
function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.25
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  statNumbers.forEach(num => observer.observe(num));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = easeOutExpo(frame / totalFrames);
      const currentVal = Math.round(target * progress);

      el.textContent = currentVal;

      if (frame >= totalFrames) {
        el.textContent = target;
        clearInterval(counter);
      }
    }, frameDuration);
  }

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }
}

/* ==========================================================================
   5. INTERACTIVE FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems.length === 0) return;

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close sibling items for clean accordion UX
      accordionItems.forEach(sib => {
        sib.classList.remove('active');
        const sibHeader = sib.querySelector('.accordion-header');
        if (sibHeader) sibHeader.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   6. TESTIMONIALS SLIDER
   ========================================================================== */
function initTestimonialsSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.t-btn-prev');
  const nextBtn = document.querySelector('.t-btn-next');

  if (slides.length === 0) return;

  let current = 0;
  const total = slides.length;

  function showTestimonial(idx) {
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    current = idx;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showTestimonial(current + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showTestimonial(current - 1);
    });
  }
}

/* ==========================================================================
   7. CONTACT ENQUIRY FORM & MODAL CONFIRMATION
   ========================================================================== */
function initContactForm() {
  const form = document.querySelector('#grantEnquiryForm');
  const modal = document.querySelector('#successModal');
  const modalClose = document.querySelector('#modalCloseBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic Validation
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const service = form.querySelector('#service');
    const message = form.querySelector('#message');

    let isValid = true;

    if (!name || !name.value.trim()) {
      showFieldError(name, 'Please enter your full name');
      isValid = false;
    } else {
      clearFieldError(name);
    }

    if (!email || !isValidEmail(email.value.trim())) {
      showFieldError(email, 'Please enter a valid email address');
      isValid = false;
    } else {
      clearFieldError(email);
    }

    if (!service || !service.value) {
      showFieldError(service, 'Please select a service needed');
      isValid = false;
    } else {
      clearFieldError(service);
    }

    if (!message || !message.value.trim()) {
      showFieldError(message, 'Please provide brief details about your funding needs');
      isValid = false;
    } else {
      clearFieldError(message);
    }

    if (!isValid) return;

    // Simulate successful submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending Enquiry...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      // Show Confirmation Modal
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }, 800);
  });

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  function showFieldError(input, msg) {
    input.style.borderColor = '#EF4444';
    let err = input.parentElement.querySelector('.form-error-msg');
    if (!err) {
      err = document.createElement('span');
      err.className = 'form-error-msg';
      err.style.color = '#EF4444';
      err.style.fontSize = '0.82rem';
      err.style.marginTop = '0.35rem';
      input.parentElement.appendChild(err);
    }
    err.textContent = msg;
  }

  function clearFieldError(input) {
    input.style.borderColor = '';
    const err = input.parentElement.querySelector('.form-error-msg');
    if (err) err.remove();
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

/* ==========================================================================
   8. SCROLL REVEALS VIA INTERSECTION OBSERVER
   ========================================================================== */
function initScrollReveals() {
  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   9. URL PARAMETERS (Pre-fill Form Selection from other pages)
   ========================================================================== */
function initUrlParamHandling() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  const serviceDropdown = document.querySelector('#service');

  if (serviceParam && serviceDropdown) {
    const options = Array.from(serviceDropdown.options);
    const match = options.find(opt => opt.value.toLowerCase().includes(serviceParam.toLowerCase()));
    if (match) {
      serviceDropdown.value = match.value;
    }
  }
}
