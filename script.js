// ============================================================
// CatHacks Landing Page — Interactive Scripts
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 60;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // initial check

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  const toggleNav = () => {
    const isOpen = navLinks.classList.toggle('open');
    navOverlay.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  navToggle.addEventListener('click', toggleNav);
  navOverlay.addEventListener('click', toggleNav);

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        toggleNav();
      }
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  // --- Binary cyber background (column-staggered, circular clip) ---
  const canvas = document.getElementById('binaryBg');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const size = 700; // match hero-ring-2
    canvas.width = size;
    canvas.height = size;

    const fontSize = 14;
    const colGap = 20;
    const rowGap = 22;
    const staggerOffset = rowGap / 2; // half-row shift for odd columns
    const cols = Math.ceil(size / colGap);
    const rows = Math.ceil(size / rowGap) + 1; // +1 for stagger overflow

    // Init grid + flip timers
    const grid = [];
    const flipTimers = [];
    for (let i = 0; i < cols * rows; i++) {
      grid[i] = Math.random() < 0.5 ? '0' : '1';
      flipTimers[i] = Math.random() * 8000 + 2000;
    }

    let lastTime = 0;
    const frameInterval = 150; // ~6-7 fps, very calm

    function drawBinary(timestamp) {
      const delta = timestamp - lastTime;
      if (delta >= frameInterval) {
        lastTime = timestamp;

        ctx.clearRect(0, 0, size, size);
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = '#00D2FF';

        for (let col = 0; col < cols; col++) {
          const yOffset = col % 2 === 1 ? staggerOffset : 0;
          for (let row = 0; row < rows; row++) {
            const idx = col * rows + row;
            flipTimers[idx] -= delta;
            if (flipTimers[idx] <= 0) {
              grid[idx] = grid[idx] === '0' ? '1' : '0';
              flipTimers[idx] = Math.random() * 6000 + 3000;
            }
            ctx.fillText(grid[idx], col * colGap, row * rowGap + yOffset + fontSize);
          }
        }
      }
      requestAnimationFrame(drawBinary);
    }

    requestAnimationFrame(drawBinary);
  }
  const canvas2 = document.getElementById('binaryBg2');
  if (canvas2) {
    const ctx = canvas2.getContext('2d');
    const size = 700; // match hero-ring-2
    canvas2.width = size;
    canvas2.height = size;

    const fontSize = 14;
    const colGap = 20;
    const rowGap = 22;
    const staggerOffset = rowGap / 2; // half-row shift for odd columns
    const cols = Math.ceil(size / colGap);
    const rows = Math.ceil(size / rowGap) + 1; // +1 for stagger overflow

    // Init grid + flip timers
    const grid = [];
    const flipTimers = [];
    for (let i = 0; i < cols * rows; i++) {
      grid[i] = Math.random() < 0.5 ? '0' : '1';
      flipTimers[i] = Math.random() * 8000 + 2000;
    }

    let lastTime = 0;
    const frameInterval = 150; // ~6-7 fps, very calm

    function drawBinary(timestamp) {
      const delta = timestamp - lastTime;
      if (delta >= frameInterval) {
        lastTime = timestamp;

        ctx.clearRect(0, 0, size, size);
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = '#00D2FF';

        for (let col = 0; col < cols; col++) {
          const yOffset = col % 2 === 1 ? staggerOffset : 0;
          for (let row = 0; row < rows; row++) {
            const idx = col * rows + row;
            flipTimers[idx] -= delta;
            if (flipTimers[idx] <= 0) {
              grid[idx] = grid[idx] === '0' ? '1' : '0';
              flipTimers[idx] = Math.random() * 6000 + 3000;
            }
            ctx.fillText(grid[idx], col * colGap, row * rowGap + yOffset + fontSize);
          }
        }
      }
      requestAnimationFrame(drawBinary);
    }

    requestAnimationFrame(drawBinary);
  }

});
