// ===== VIDEO MODAL =====
const videoModal        = document.getElementById('videoModal');
const previewClickTarget = document.getElementById('previewClickTarget');
const videoModalOverlay = document.getElementById('videoModalOverlay');
const videoModalClose   = document.getElementById('videoModalClose');
const demoVideo         = document.getElementById('demoVideo');

function openVideoModal() {
  if (demoVideo) { demoVideo.currentTime = 0; demoVideo.play(); }
  videoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  videoModal.classList.remove('open');
  if (demoVideo) { demoVideo.pause(); }
  document.body.style.overflow = '';
}

if (previewClickTarget) { previewClickTarget.addEventListener('click', openVideoModal); }
if (videoModalOverlay)  { videoModalOverlay.addEventListener('click', closeVideoModal); }
if (videoModalClose)    { videoModalClose.addEventListener('click', closeVideoModal); }

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal.classList.contains('open')) closeVideoModal();
});

// ===== NAV: Add shadow on scroll =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== FADE-IN on scroll =====
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// ===== SMOOTH active nav link highlight =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#1A1917' : '';
  });
});
