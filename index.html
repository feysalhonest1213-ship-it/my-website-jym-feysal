// ===== Scroll progress bar =====
const progressBar = document.getElementById('progressBar');
function updateProgressBar(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgressBar);
updateProgressBar();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  mainNav.style.display = mainNav.classList.contains('open') ? 'flex' : 'none';
});

// close mobile nav after clicking a link
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    if (window.innerWidth <= 900) mainNav.style.display = 'none';
  });
});

// ===== Loading bar animation in hero (signature element) =====
const loadFill = document.getElementById('loadFill');
const loadLabel = document.getElementById('loadLabel');
const TARGET_KG = 140;

function animateLoadMeter(){
  let current = 0;
  const duration = 1400;
  const start = performance.now();

  function tick(now){
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out
    const eased = 1 - Math.pow(1 - progress, 3);
    current = Math.round(eased * TARGET_KG);
    loadFill.style.width = (eased * 100) + '%';
    loadLabel.textContent = `LOADING BAR: ${current} kg`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
window.addEventListener('load', animateLoadMeter);

// ===== Animated stat counters (trigger on scroll into view) =====
const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => statObserver.observe(el));

function animateCount(el){
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const start = performance.now();

  function tick(now){
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ===== Smooth-scroll CTA buttons to contact section =====
const heroCta = document.getElementById('heroCta');
const joinBtn = document.getElementById('joinBtn');
function scrollToContact(){
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
heroCta.addEventListener('click', scrollToContact);
joinBtn.addEventListener('click', scrollToContact);

// ===== Pricing plan buttons pre-fill the contact form =====
document.querySelectorAll('.plan-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const planName = btn.closest('.price-card').querySelector('h3').textContent;
    const goalField = document.querySelector('textarea[name="goal"]');
    goalField.value = `I'm interested in the ${planName} plan.`;
    scrollToContact();
    document.querySelector('input[name="name"]').focus();
  });
});

// ===== Contact form submission (front-end only demo) =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  if (!name){
    formStatus.textContent = 'Please add your name so we know who to expect.';
    return;
  }
  formStatus.textContent = `Thanks, ${name.split(' ')[0]} — we'll text you to lock in your free session.`;
  contactForm.reset();
});
