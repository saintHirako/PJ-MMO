// Nullspace landing — minimal interactions

// ============ Metric counter animation ============
const animateCount = (el) => {
  const target = parseFloat(el.dataset.count);
  if (Number.isNaN(target)) return;

  const isDecimal = target % 1 !== 0;
  const duration = 1400;
  const start = performance.now();

  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    // easeOutExpo
    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    const value = target * eased;
    el.textContent = isDecimal ? value.toFixed(2) : Math.round(value).toLocaleString();
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));

// ============ Nav shadow on scroll ============
const nav = document.querySelector(".nav");
let lastY = 0;
window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    if (y > 8) nav.style.boxShadow = "0 1px 0 0 rgba(255,255,255,0.04), 0 20px 40px -20px rgba(0,0,0,0.5)";
    else nav.style.boxShadow = "none";
    lastY = y;
  },
  { passive: true }
);

// ============ Subtle parallax on bg-glow ============
const glow = document.querySelector(".bg-glow");
if (glow && window.matchMedia("(min-width: 900px)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    glow.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
  });
}

// ============ Smooth-scroll for hash links ============
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target && link.getAttribute("href").length > 1) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
