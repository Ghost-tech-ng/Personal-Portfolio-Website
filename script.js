import { cases } from './cases.js';
import { visuals } from './visuals.js';
import { initReveals, initScrollProgress, initCardMotion } from './motion.js';

const gallery = document.querySelector('#project-gallery');
const featureIndices = new Set([0, 1, 5, 6]);

gallery.innerHTML = cases.map((project, index) => {
  const visual = visuals[project.slug];
  const image = visual.kind === 'device'
    ? `<div class="card-device"><div class="device-camera"></div><img src="${visual.src}" alt="${visual.alt}" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async" /></div>${project.slug === 'giftyview' ? '<img class="card-product-logo" src="assets/evidence/giftyview-logo.png" alt="" loading="lazy" />' : '<span class="card-device-wordmark" aria-hidden="true">IRON<br>DISCIPLINE</span>'}`
    : `<img class="card-cover" src="${visual.src}" alt="${visual.alt}" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async" />`;
  return `<article class="story-card ${featureIndices.has(index) ? 'story-card-feature' : ''} kind-${visual.kind}" data-roles="${visual.roles}" data-reveal>
    <a class="story-card-link" href="project.html?project=${project.slug}" aria-label="Explore ${project.title} project story">
      <div class="story-card-visual visual-${project.slug}">${image}<div class="story-card-top"><span>PROJECT ${project.number} / ${cases.length}</span><span>${project.category}</span></div><span class="story-card-proof">${visual.label}</span><span class="story-card-arrow" aria-hidden="true">↗</span></div>
      <div class="story-card-info"><div class="story-card-meta"><span>${project.role}</span><strong>${project.status}</strong></div><h3>${project.title}</h3><p>${project.deck}</p><div class="story-card-scope"><b>MY PART</b><span>${visual.scope}</span></div></div>
    </a>
  </article>`;
}).join('');

const filters = [...document.querySelectorAll('.filter-button')];
const cards = [...document.querySelectorAll('.story-card')];
const count = document.querySelector('.filter-count');
filters.forEach((filter) => filter.addEventListener('click', () => {
  const role = filter.dataset.filter;
  filters.forEach((button) => {
    const active = button === filter;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const shown = cards.reduce((total, card) => {
    const matches = role === 'all' || card.dataset.roles.split(' ').includes(role);
    card.hidden = !matches;
    return total + Number(matches);
  }, 0);
  count.textContent = `Showing ${shown} ${shown === 1 ? 'project' : 'projects'}`;
}));

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuButton.addEventListener('click', () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

initReveals('.section-heading, .story-card, .approach-card, .about-image-wrap, .about-copy, .cv-heading, .contact-layout');
initScrollProgress();
initCardMotion();
