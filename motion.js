const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

export function initReveals(selectors) {
  if (reduceMotion.matches || !('IntersectionObserver' in window)) return;
  const elements = [...document.querySelectorAll(selectors)];
  elements.forEach((element, index) => {
    element.dataset.reveal = '';
    element.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 90}ms`);
  });
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -45px 0px', threshold: 0.06 });
  elements.forEach((element) => observer.observe(element));
}

export function initScrollProgress() {
  if (reduceMotion.matches) return;
  const bar = document.createElement('div');
  bar.className = 'read-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.append(bar);
  let scheduled = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

export function initCardMotion() {
  if (reduceMotion.matches || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('.story-card').forEach((card) => {
    const visual = card.querySelector('.story-card-visual');
    card.addEventListener('pointermove', (event) => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      visual.style.setProperty('--pointer-x', `${(x * 8).toFixed(2)}px`);
      visual.style.setProperty('--pointer-y', `${(y * 8).toFixed(2)}px`);
    });
    card.addEventListener('pointerleave', () => {
      visual.style.setProperty('--pointer-x', '0px');
      visual.style.setProperty('--pointer-y', '0px');
    });
  });
}
