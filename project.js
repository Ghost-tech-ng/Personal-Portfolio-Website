import { cases } from './cases.js';
import { visuals } from './visuals.js';
import { initReveals, initScrollProgress } from './motion.js';
const params = new URLSearchParams(location.search);
const slug = params.get('project');
const currentIndex = cases.findIndex(item => item.slug === slug);
const project = cases[currentIndex];

if (!project) {
  document.title = 'Project not found — Eghosa Ephraim';
  document.querySelector('#case-title').textContent = 'Project not found';
  document.querySelector('#case-deck').textContent = 'That project is not in this preview. Return to the work index to choose another.';
  document.querySelector('.case-layout').hidden = true;
  document.querySelector('.next-case').hidden = true;
} else {
  document.title = `${project.title} — Eghosa Ephraim`;
  const set = (selector, value) => { document.querySelector(selector).textContent = value; };
  set('#case-number', `PROJECT ${project.number} / ${cases.length}`);
  set('#case-category', project.category);
  set('#case-kicker', project.kicker);
  set('#case-title', project.title);
  set('#case-deck', project.deck);
  set('#case-status', project.status);
  set('#case-role', project.role);
  set('#situation-title', project.situationTitle);
  set('#situation-copy', project.situation);
  set('#situation-fact', project.fact);
  set('#contribution-title', project.contributionTitle);
  set('#contribution-copy', project.contribution);
  set('#see-title', project.seeTitle);
  set('#see-copy', project.seeCopy);
  set('#case-limit', project.limit);
  const visual = document.querySelector('#case-hero-visual');
  const visualData = visuals[slug];
  visual.classList.add(`visual-${slug}`, 'has-cover');
  visual.setAttribute('role', 'img');
  visual.setAttribute('aria-label', visualData.alt);
  visual.querySelector('span').textContent = visualData.label;
  if (slug === 'giftyview') {
    visual.insertAdjacentHTML('beforeend', '<img class="hero-gifty-logo-fixed" src="assets/evidence/giftyview-logo.png" alt="" /><div class="hero-device"><img src="assets/evidence/giftyview-home-screen.webp" alt="" /></div>');
  } else if (slug === 'iron-discipline') {
    visual.insertAdjacentHTML('beforeend', '<div class="hero-device"><img src="assets/evidence/iron-discipline-home.jpg" alt="" /></div><strong class="hero-gym-wordmark" aria-hidden="true">IRON<br>DISCIPLINE</strong>');
  } else {
    visual.insertAdjacentHTML('afterbegin', `<img class="case-cover" src="${visualData.src}" alt="" decoding="async" />`);
  }

  const actionBox = document.querySelector('#case-actions');
  const explore = document.createElement('a');
  explore.href = '#see-work';
  explore.textContent = slug === 'giftyview' ? 'Try the local preview ↓' : slug === 'lincoln' ? 'Inspect the real plots ↓' : 'See the work ↓';
  actionBox.append(explore);
  if (project.links.length > 0) {
    project.links.forEach(([label, href]) => {
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `${label} ↗`;
      actionBox.append(link);
    });
  }

  const decisions = document.querySelector('#decision-list');
  project.decisions.forEach(([title, copy], index) => {
    const row = document.createElement('div');
    row.className = 'decision';
    const number = document.createElement('span'); number.textContent = `0${index + 1}`;
    const body = document.createElement('div');
    const heading = document.createElement('h3'); heading.textContent = title;
    const paragraph = document.createElement('p'); paragraph.textContent = copy;
    body.append(heading, paragraph); row.append(number, body); decisions.append(row);
  });

  const proofList = document.querySelector('#proof-list');
  project.proofs.forEach(([type, title, copy, href]) => {
    const row = document.createElement('div'); row.className = 'proof';
    const typeEl = document.createElement('span'); typeEl.className = 'proof-type'; typeEl.textContent = type;
    const body = document.createElement('div');
    const heading = document.createElement('strong'); heading.textContent = title;
    const paragraph = document.createElement('p'); paragraph.textContent = copy;
    body.append(heading, paragraph); row.append(typeEl, body);
    if (href) {
      const link = document.createElement('a'); link.href = href; link.textContent = '↗';
      link.setAttribute('aria-label', `Open ${title}`);
      if (href.startsWith('https://')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
      row.append(link);
    }
    proofList.append(row);
  });

  const next = cases[(currentIndex + 1) % cases.length];
  document.querySelector('#next-link').href = `project.html?project=${next.slug}`;
  set('#next-title', next.title);
  renderMedia(project.media);
  setupChapters();
  initReveals('.case-chapter, .decision, .proof, .next-case');
  initScrollProgress();
}

function renderMedia(type) {
  const target = document.querySelector('#media-content');
  if (type === 'giftyview') {
    target.innerHTML = `
      <div class="media-notice">WORKING LOCAL DESIGN BUILD · Sample person, balances and transactions. This is an interface preview, not the live payment service.</div>
      <div class="story-gallery">
        <div class="story-gallery-head"><span>THREE SCREENS / ONE JOURNEY</span><small>Captured from the local UI build</small></div>
        <div class="screen-tabs" role="group" aria-label="Choose GiftyView screen">
          <button type="button" data-screen="home" aria-selected="true">01 · Wallet home</button>
          <button type="button" data-screen="gifts" aria-selected="false">02 · Gift cards</button>
          <button type="button" data-screen="bills" aria-selected="false">03 · Bills</button>
        </div>
        <div class="gallery-stage"><div class="gallery-phone"><img id="gallery-image" src="assets/evidence/giftyview-home-screen.webp" alt="GiftyView wallet home from a local UI build with sample financial data" /></div></div>
        <p class="gallery-caption" id="gallery-caption">The wallet home uses demonstration balances and transactions. It shows the mobile interface I built, not live customer information.</p>
      </div>
      <div class="media-pair">
        <div class="preview-frame"><iframe src="previews/giftyview-ui/index.html" title="Interactive GiftyView design prototype with sample data" loading="lazy"></iframe></div>
        <div class="preview-description"><img src="assets/evidence/giftyview-logo.png" alt="GiftyView logo from the local app assets" /><p>Explore the local design build. I made the Flutter app, admin portal and web experience; backend implementation was collaborative.</p><a href="previews/giftyview-ui/index.html" target="_blank" rel="noopener noreferrer">Open the preview in its own tab ↗</a></div>
      </div>`;
    const screens = {
      home: ['giftyview-home-screen.webp', 'GiftyView wallet home from a local UI build with sample financial data', 'The wallet home uses demonstration balances and transactions. It shows the mobile interface I built, not live customer information.'],
      gifts: ['giftyview-gifts-screen.webp', 'GiftyView gift card screen from a local UI build', 'The gift card journey is captured from the local interface build. Product and account values are examples.'],
      bills: ['giftyview-bills-screen.webp', 'GiftyView bill payment screen from a local UI build', 'The bill payment screen shows interface layout and navigation; it is not evidence of a completed payment.']
    };
    target.querySelectorAll('[data-screen]').forEach(button => button.addEventListener('click', () => {
      const [file, alt, caption] = screens[button.dataset.screen];
      const image = target.querySelector('#gallery-image');
      image.src = `assets/evidence/${file}`;
      image.alt = alt;
      target.querySelector('#gallery-caption').textContent = caption;
      target.querySelectorAll('[data-screen]').forEach(tab => tab.setAttribute('aria-selected', String(tab === button)));
    }));
  } else if (type === 'lincoln') {
    target.innerHTML = `
      <div class="plot-controls" role="group" aria-label="Choose Lincoln BSI output"><button type="button" class="active" data-plot="k">Cluster selection</button><button type="button" data-plot="population">Score and population</button></div>
      <figure class="evidence-image"><img id="plot-image" src="assets/evidence/lincoln-k-selection.png" alt="Real K-Means elbow and silhouette diagnostics from Lincoln BSI pipeline" /><figcaption id="plot-caption">Actual pipeline output: elbow and silhouette diagnostics for candidate cluster counts. The plot is evidence of the evaluation process, not proof of business outcomes.</figcaption></figure>`;
    const image = target.querySelector('#plot-image');
    const caption = target.querySelector('#plot-caption');
    target.querySelectorAll('[data-plot]').forEach(button => button.addEventListener('click', () => {
      const population = button.dataset.plot === 'population';
      image.src = population ? 'assets/evidence/lincoln-bsi-population.png' : 'assets/evidence/lincoln-k-selection.png';
      image.alt = population ? 'Real BSI score versus population density scatter plots from the local pipeline' : 'Real K-Means elbow and silhouette diagnostics from Lincoln BSI pipeline';
      caption.textContent = population ? 'Actual pipeline output: BSI scores plotted against population density for three categories. These associations do not establish predictive validity.' : 'Actual pipeline output: elbow and silhouette diagnostics for candidate cluster counts. The plot is evidence of the evaluation process, not proof of business outcomes.';
      target.querySelectorAll('[data-plot]').forEach(b => b.classList.toggle('active', b === button));
    }));
  } else if (type === 'aedion') {
    const stages = [
      ['Capture', 'The person supplies a skin or eye image. The capture flow needs clear guidance before the request is sent.'],
      ['Quality check', 'Input-quality logic checks whether the image is usable and can return a typed reason to retake it.'],
      ['Scan API', 'Backend routes carry the accepted input into the scan flow and structure the response.'],
      ['Feedback', 'The response needs to tell the person what happened. This diagram is not a medical diagnostic claim.']
    ];
    target.innerHTML = `<div class="media-notice">CODE-DERIVED FLOW · Reconstructed from local source; not clinical validation.</div><div class="flow-stage">${stages.map((s,i)=>`<button type="button" data-stage="${i}" class="${i===0?'active':''}"><span>0${i+1}</span>${s[0]}</button>`).join('')}</div><p class="flow-explain" id="flow-explain">${stages[0][1]}</p><figure class="artifact-figure narrow"><img src="assets/evidence/aedion-eye-test.webp" loading="lazy" alt="Development eye-input test harness showing a rejected image with no eye detected" /><figcaption>Real local development capture: an unsuitable eye input is rejected. This is a test harness, not the released product screen or a medical result.</figcaption></figure>`;
    target.querySelectorAll('[data-stage]').forEach(button => button.addEventListener('click', () => {
      target.querySelector('#flow-explain').textContent = stages[Number(button.dataset.stage)][1];
      target.querySelectorAll('[data-stage]').forEach(b => b.classList.toggle('active', b === button));
    }));
  } else if (type === 'miauditops') {
    let balance = 72;
    const movements = [['Opening balance', 72]];
    target.innerHTML = `<div class="media-notice">SYNTHETIC PORTFOLIO DEMO · No client inventory or production account is used.</div><div class="demo-panel"><p>INVENTORY EXPLAINER / SAMPLE VALUES</p><h3>Current balance: <span id="ledger-balance">72</span></h3><div class="demo-controls"><button type="button" data-move="12">Receive 12</button><button type="button" data-move="-5" class="secondary">Issue 5</button><button type="button" data-reset class="secondary">Reset example</button></div><table class="ledger-table"><thead><tr><th>Movement</th><th>Balance</th></tr></thead><tbody id="ledger-rows"></tbody></table></div>`;
    const rows = target.querySelector('#ledger-rows');
    const update = () => {
      target.querySelector('#ledger-balance').textContent = String(balance);
      rows.replaceChildren();
      movements.forEach(([label, value]) => {
        const tr = document.createElement('tr');
        const a = document.createElement('td'); a.textContent = label;
        const b = document.createElement('td'); b.textContent = String(value);
        tr.append(a, b); rows.append(tr);
      });
    };
    target.querySelectorAll('[data-move]').forEach(button => button.addEventListener('click', () => {
      const amount = Number(button.dataset.move);
      if (balance + amount < 0) return;
      balance += amount; movements.push([amount > 0 ? `Received +${amount}` : `Issued ${amount}`, balance]); update();
    }));
    target.querySelector('[data-reset]').addEventListener('click', () => { balance = 72; movements.splice(1); update(); });
    update();
  } else if (type === 'pipeup') {
    const sample = [
      ['I',0.0],['think',0.2],['we',0.6],['can',0.8],['um',1.1],['make',1.5],['this',1.9],['clearer',2.3],['for',3.1],['everyone.',3.5]
    ];
    target.innerHTML = `<div class="media-notice">SYNTHETIC TRANSCRIPT · This interaction explains the interface idea; it is not a real user recording or measured output.</div><div class="demo-panel"><p>WORD-LEVEL EXPLAINER / SAMPLE AUDIO TEXT</p><h3>Click a word to inspect its time.</h3><div class="sample-transcript">${sample.map(([word,time],i)=>`<button type="button" data-word="${i}" class="${word==='um'?'filler':''}">${word}</button>`).join('')}</div><p class="sample-legend">The orange underline marks a filler in this sample.</p><div class="demo-output" id="word-output">Select a word above.</div></div>`;
    target.querySelectorAll('[data-word]').forEach(button => button.addEventListener('click', () => {
      const [word, time] = sample[Number(button.dataset.word)];
      target.querySelector('#word-output').textContent = `“${word}” starts at ${time.toFixed(1)} seconds in this sample transcript.${word === 'um' ? ' It is marked as a filler.' : ''}`;
      target.querySelectorAll('[data-word]').forEach(b => b.classList.toggle('active', b === button));
    }));
  } else if (type === 'harvestlink') {
    let online = false;
    let pending = 0;
    target.innerHTML = `<div class="media-notice">SYNTHETIC SYNC EXPLAINER · No pilot farmer record or server connection is used.</div><div class="demo-panel"><p>FIELD RECORD / SAMPLE SESSION</p><h3 id="sync-state">Offline · 0 records waiting</h3><div class="demo-controls"><button type="button" data-add>Add sample record</button><button type="button" data-connect class="secondary">Reconnect</button><button type="button" data-offline class="secondary">Go offline</button></div><div class="demo-output" id="sync-output">The device is offline. A new record can wait in the local outbox.</div></div><figure class="artifact-figure wide"><img src="assets/evidence/harvestlink-desk-login.webp" loading="lazy" alt="HarvestLink local web desk login screen" /><figcaption>Actual local web desk build at its login screen. The offline mobile registry and sync behavior are explained above from source; this image does not demonstrate them.</figcaption></figure>`;
    const update = () => { target.querySelector('#sync-state').textContent = `${online?'Online':'Offline'} · ${pending} ${pending===1?'record':'records'} waiting`; };
    target.querySelector('[data-add]').addEventListener('click', () => { pending += 1; target.querySelector('#sync-output').textContent = 'A synthetic record was added to the local queue.'; update(); });
    target.querySelector('[data-connect]').addEventListener('click', () => { online = true; const sent = pending; pending = 0; target.querySelector('#sync-output').textContent = sent ? `${sent} synthetic ${sent===1?'record':'records'} moved from waiting to sent in this explainer.` : 'Connected. There is nothing waiting to send.'; update(); });
    target.querySelector('[data-offline]').addEventListener('click', () => { online = false; target.querySelector('#sync-output').textContent = 'Offline again. New changes will wait locally.'; update(); });
  } else if (type === 'iron-discipline') {
    target.innerHTML = `
      <div class="media-notice">FIVE ACTUAL APP SCREENS · Local browser build with demo state; no personal workout history is shown.</div>
      <div class="story-gallery gym-gallery">
        <div class="story-gallery-head"><span>FROM FORGE TO THE DAILY RECORD</span><small>Select a screen to look closer</small></div>
        <div class="screen-tabs" role="group" aria-label="Choose Iron Discipline screen">
          <button type="button" data-gym-screen="home" aria-selected="true">01 · Forge home</button>
          <button type="button" data-gym-screen="training" aria-selected="false">02 · Training</button>
          <button type="button" data-gym-screen="fuel" aria-selected="false">03 · Fuel</button>
          <button type="button" data-gym-screen="progress" aria-selected="false">04 · Progress</button>
          <button type="button" data-gym-screen="habits" aria-selected="false">05 · Habits</button>
        </div>
        <div class="gallery-stage"><div class="gallery-phone"><img id="gym-gallery-image" src="assets/evidence/iron-discipline-home.jpg" alt="Iron Discipline Forge home screen in demo state" /></div><div class="gym-gallery-aside"><span id="gym-gallery-number">01 / 05</span><h3 id="gym-gallery-title">Forge home</h3><p id="gym-gallery-caption">The daily overview brings the current routine, training prompt and habit score into one place.</p><a id="gym-gallery-full" href="assets/evidence/iron-discipline-home.jpg" target="_blank" rel="noopener noreferrer">Open full screen ↗</a></div></div>
      </div>`;
    const screens = {
      home: ['home', 'Forge home', 'Iron Discipline Forge home screen in demo state', 'The daily overview brings the current routine, training prompt and habit score into one place.'],
      training: ['training', 'Training', 'Iron Discipline weekly training screen in demo state', 'The weekly split shows today’s session and the exercises behind each training day.'],
      fuel: ['fuel', 'Fuel', 'Iron Discipline nutrition screen in demo state', 'The nutrition view brings meal timing, food logging and water tracking together. Its targets come from the app’s default state.'],
      progress: ['progress', 'Progress', 'Iron Discipline progress screen in demo state', 'Charts and check-ins show empty states until someone logs records. The displayed goals come from the app’s defaults.'],
      habits: ['habits', 'Habits', 'Iron Discipline habits screen in demo state', 'The daily checklist puts small repeatable actions next to a simple completion indicator.']
    };
    target.querySelectorAll('[data-gym-screen]').forEach(button => button.addEventListener('click', () => {
      const [file, title, alt, caption] = screens[button.dataset.gymScreen];
      const src = `assets/evidence/iron-discipline-${file}.jpg`;
      const image = target.querySelector('#gym-gallery-image');
      image.src = src;
      image.alt = alt;
      target.querySelector('#gym-gallery-number').textContent = `${String(Object.keys(screens).indexOf(button.dataset.gymScreen) + 1).padStart(2, '0')} / 05`;
      target.querySelector('#gym-gallery-title').textContent = title;
      target.querySelector('#gym-gallery-caption').textContent = caption;
      target.querySelector('#gym-gallery-full').href = src;
      target.querySelectorAll('[data-gym-screen]').forEach(tab => tab.setAttribute('aria-selected', String(tab === button)));
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && image.animate) image.animate([{opacity:.35,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:300,easing:'ease-out'});
    }));
  } else {
    const flows = {
      elixir: [['Existing HMS','The original hospital system was already in use.'],['My extensions','Maternity, interface, wallet and patient mobile work.'],['Clinical workflow','New pieces need to fit how staff and patients use the system.']],
      edusmart: [['Original system','PHP/CodeIgniter, MySQL and web interface code.'],['School onboarding','Two schools are currently being onboarded.'],['Evidence shown','Local brochure capture with demonstration values.']],
      afrorave: [['Creator side','Dashboard, settings and event-selection work.'],['Vendor side','Signup, profile, dashboard and slot flows.'],['Team source','Authored commits support specific feature attribution.']]
    };
    target.innerHTML = `<div class="media-notice">SCOPE NOTES · The short summary below explains my role; any product capture that follows is labelled separately.</div><div class="static-flow">${flows[type].map(([title,copy])=>`<div><b>${title.toUpperCase()}</b><p>${copy}</p></div>`).join('')}</div>`;
    if (type === 'elixir') {
      target.insertAdjacentHTML('beforeend', '<figure class="artifact-figure wide"><img src="assets/evidence/elixir-clinical-dashboard.png" loading="lazy" alt="Elixir clinical dashboard module navigation from the local HMS source" /><figcaption>Actual clinical dashboard from the existing Elixir HMS. It contains no patient records. I extended this product; I did not build the original platform or every dashboard module.</figcaption></figure>');
    } else if (type === 'edusmart') {
      target.insertAdjacentHTML('beforeend', '<figure class="artifact-figure wide"><img src="assets/evidence/edusmart-admin.webp" loading="lazy" alt="EduSmart360 admin dashboard from local brochure materials" /><figcaption>Local brochure capture of the EduSmart admin dashboard. The counts and financial values visible in this demo screen are not live school adoption metrics.</figcaption></figure>');
    } else if (type === 'afrorave') {
      target.insertAdjacentHTML('beforeend', '<figure class="artifact-figure wide"><img src="assets/evidence/afrorave-vendor-signup-complete.jpg" loading="lazy" alt="Complete empty AfroRave vendor sign-up form in the local team frontend" /><figcaption>Complete form captured from the local team frontend. Vendor signup is one of the features I contributed; this screenshot does not imply ownership of the whole product.</figcaption></figure>');
    }
  }
}

function setupChapters() {
  const links = [...document.querySelectorAll('.case-chapters a')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => link.classList.toggle('chapter-active', link.hash === `#${visible.target.id}`));
  }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, .2, .5] });
  document.querySelectorAll('.case-chapter').forEach(section => observer.observe(section));
}
