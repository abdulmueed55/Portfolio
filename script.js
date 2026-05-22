const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const cursorDot = document.querySelector('.cursor-dot');
const year = document.querySelector('#year');
const revealItems = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-count]');
const contactForm = document.querySelector('#contactForm');
const formNote = document.querySelector('#formNote');
const scrollProgress = document.querySelector('.scroll-progress');

if (year) year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.classList.toggle('no-scroll', isOpen);
});

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  });
});

window.addEventListener('mousemove', (event) => {
  if (!cursorDot || window.innerWidth < 900) return;
  cursorDot.style.left = `${event.clientX}px`;
  cursorDot.style.top = `${event.clientY}px`;
});

document.querySelectorAll('a, button, input, textarea, .tilt-card').forEach((item) => {
  item.addEventListener('mouseenter', () => cursorDot?.classList.add('active'));
  item.addEventListener('mouseleave', () => cursorDot?.classList.remove('active'));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealItems.forEach((item) => revealObserver.observe(item));

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const duration = 1400;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(animate);
      else element.textContent = target;
    };

    requestAnimationFrame(animate);
    counterObserver.unobserve(element);
  });
}, { threshold: 0.65 });

counters.forEach((counter) => counterObserver.observe(counter));

const sections = [...document.querySelectorAll('main section[id]')];
const setActiveLink = () => {
  const scrollPosition = window.scrollY + 170;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const matchingLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      navItems.forEach((link) => link.classList.remove('active'));
      matchingLink?.classList.add('active');
    }
  });
};

const updateScrollProgress = () => {
  if (!scrollProgress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = max > 0 ? (window.scrollY / max) * 100 : 0;
  scrollProgress.style.width = `${percentage}%`;
};

window.addEventListener('scroll', () => {
  setActiveLink();
  updateScrollProgress();
});
setActiveLink();
updateScrollProgress();

function createSlider(root) {
  const track = root.querySelector('[data-track]');
  const dotsWrap = root.querySelector('[data-dots]');
  const prev = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  const slides = Array.from(track.children);
  let index = 0;
  let timer;

  const slidesPerView = () => {
    if (root.dataset.slider === 'testimonials') {
      if (window.innerWidth <= 760) return 1;
      if (window.innerWidth <= 1050) return 2;
      return 3;
    }
    return 1;
  };

  const maxIndex = () => Math.max(0, slides.length - slidesPerView());

  const buildDots = () => {
    dotsWrap.innerHTML = '';
    for (let i = 0; i <= maxIndex(); i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        index = i;
        update();
        restart();
      });
      dotsWrap.appendChild(dot);
    }
  };

  const update = () => {
    index = Math.max(0, Math.min(index, maxIndex()));
    const firstSlide = slides[0];
    const gap = root.dataset.slider === 'testimonials' ? 18 : 0;
    const offset = index * (firstSlide.getBoundingClientRect().width + gap);
    track.style.transform = `translateX(-${offset}px)`;
    dotsWrap.querySelectorAll('button').forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
  };

  const goNext = () => {
    index = index >= maxIndex() ? 0 : index + 1;
    update();
  };

  const goPrev = () => {
    index = index <= 0 ? maxIndex() : index - 1;
    update();
  };

  const restart = () => {
    clearInterval(timer);
    timer = setInterval(goNext, root.dataset.slider === 'projects' ? 4400 : 5000);
  };

  prev?.addEventListener('click', () => { goPrev(); restart(); });
  next?.addEventListener('click', () => { goNext(); restart(); });
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', restart);
  window.addEventListener('resize', () => { buildDots(); update(); });

  buildDots();
  update();
  restart();
}

document.querySelectorAll('[data-slider]').forEach(createSlider);

const tabButtons = document.querySelectorAll('.tab-btn');
const tabCards = document.querySelectorAll('.tab-project-card');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    tabCards.forEach((card, index) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('filtered-out', !shouldShow);
      card.classList.remove('filter-in');
      if (shouldShow) {
        card.style.animationDelay = `${Math.min(index * 0.04, 0.18)}s`;
        requestAnimationFrame(() => card.classList.add('filter-in'));
      }
    });
  });
});

const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    if (window.innerWidth < 900) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 7;
    const rotateX = -((y / rect.height) - 0.5) * 7;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Magnetic button effect
const magneticItems = document.querySelectorAll('.magnetic');
magneticItems.forEach((item) => {
  item.addEventListener('mousemove', (event) => {
    if (window.innerWidth < 900) return;
    const rect = item.getBoundingClientRect();
    const moveX = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const moveY = (event.clientY - rect.top - rect.height / 2) * 0.18;
    item.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});

// Smooth anchor scroll with header offset
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    const offset = 105;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !message) {
    formNote.textContent = 'Please fill all fields.';
    return;
  }

  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  formNote.textContent = 'Opening your email app...';
  window.location.href = `mailto:abdulmueed5666@gmail.com?subject=${subject}&body=${body}`;
});


// ==============================
// PRO V5 MOTION UPGRADE
// ==============================
const markLoaded = () => document.body.classList.add('loaded');
window.addEventListener('load', () => setTimeout(markLoaded, 450));
setTimeout(markLoaded, 1800);

// Split headings into animated word spans
const splitTargets = document.querySelectorAll('[data-split]');
splitTargets.forEach((target) => {
  const words = target.textContent.trim().split(/\s+/);
  target.setAttribute('aria-label', target.textContent.trim());
  target.innerHTML = words.map((word, index) => `<span class="split-word" style="--word-index:${index}">${word}</span>`).join(' ');
});

// Make grid cards enter with a stagger as they appear
const gridCards = document.querySelectorAll('.tab-project-card');
gridCards.forEach((card, index) => card.style.setProperty('--card-index', index));
const gridObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('grid-visible');
      gridObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
gridCards.forEach((card) => gridObserver.observe(card));

// Parallax decorative elements in hero
const parallaxItems = document.querySelectorAll('[data-parallax]');
let pointerX = 0;
let pointerY = 0;
window.addEventListener('mousemove', (event) => {
  pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
  pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
});
function renderParallax() {
  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallax || 0.05);
    const x = pointerX * speed * 120;
    const y = pointerY * speed * 120;
    item.style.translate = `${x}px ${y}px`;
  });
  requestAnimationFrame(renderParallax);
}
renderParallax();

// Add scan lines inside dummy video reels
const dummyVideos = document.querySelectorAll('.dummy-video');
dummyVideos.forEach((video) => {
  if (!video.querySelector('.video-scanline')) {
    const scan = document.createElement('span');
    scan.className = 'video-scanline';
    video.appendChild(scan);
  }
});

// Improve slider active state visuals
function refreshActiveSlides() {
  document.querySelectorAll('[data-slider]').forEach((root) => {
    const track = root.querySelector('[data-track]');
    const slides = [...(track?.children || [])];
    const rootRect = root.getBoundingClientRect();
    const center = rootRect.left + rootRect.width / 2;
    let closest = null;
    let closestDistance = Infinity;
    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const distance = Math.abs(center - slideCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = slide;
      }
    });
    slides.forEach((slide) => slide.classList.toggle('is-active', slide === closest));
  });
  requestAnimationFrame(refreshActiveSlides);
}
refreshActiveSlides();

// Stronger magnetic cards for non-mobile devices
const motionCards = document.querySelectorAll('.premium-card, .tab-project-card, .reel-phone');
motionCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    if (window.innerWidth < 900) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const moveX = (x / rect.width - 0.5) * 12;
    const moveY = (y / rect.height - 0.5) * 12;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
    if (!card.classList.contains('tilt-card')) {
      card.style.transform = `translate(${moveX * .25}px, ${moveY * .25}px)`;
    }
  });
  card.addEventListener('mouseleave', () => {
    if (!card.classList.contains('tilt-card')) card.style.transform = '';
  });
});

// Cursor drag feeling on sliders/buttons
const interactiveDragItems = document.querySelectorAll('.slider-shell, .reel-slider, .btn, .tab-btn');
interactiveDragItems.forEach((item) => {
  item.addEventListener('mouseenter', () => cursorDot?.classList.add('dragging'));
  item.addEventListener('mouseleave', () => cursorDot?.classList.remove('dragging'));
});

// Re-run visible split animation when headings enter viewport
const splitObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.closest('.reveal')?.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
splitTargets.forEach((target) => splitObserver.observe(target));
