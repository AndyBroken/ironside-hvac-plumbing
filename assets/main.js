// Shared header / footer so every page stays in sync
const LOGO = `<svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#ff6a1a"/><path d="M20 7 9 13v8c0 6.5 4.6 10.6 11 12.5 6.4-1.9 11-6 11-12.5v-8z" fill="#0b1f3a"/><path d="M20 13c2.6 3.2 4.4 5.3 4.4 8a4.4 4.4 0 0 1-8.8 0c0-1.4.6-2.6 1.6-3.8.2 1.4 1 2.2 1.9 2.4-.6-2.3.1-4.4.9-6.6z" fill="#ff6a1a"/></svg>`;
const page = document.body.dataset.page;
const NAV = [['index.html', 'Home', 'home'], ['services.html', 'Services', 'services'], ['about.html', 'About', 'about'], ['areas.html', 'Service Areas', 'areas'], ['reviews.html', 'Reviews & FAQ', 'reviews'], ['contact.html', 'Contact', 'contact']];

document.getElementById('header').outerHTML = `
<div class="emergency"><div class="container">
  <span class="pulse"></span><b>24/7 Emergency Service</b><span class="hide-sm">· No heat, no AC or burst pipe? A real person answers, day or night.</span>
  <a href="${TEL}">${icon('phone', 16)} Call ${PHONE}</a>
</div></div>
<header class="site-header">
  <div class="container nav">
    <a href="index.html" class="logo">${LOGO}<span>Ironside<small>Heating · Cooling · Plumbing</small></span></a>
    <nav><ul class="nav-links" id="navLinks">
      ${NAV.map(([h, t, k]) => `<li><a href="${h}" class="${k === page ? 'active' : ''}">${t}</a></li>`).join('')}
      <li class="nav-mobile-cta"><a href="contact.html" class="btn btn-primary">Book Service Online</a></li>
    </ul></nav>
    <div class="nav-cta">
      <a href="${TEL}" class="nav-phone">${icon('phone', 18)}<span><small>Call 24/7</small>${PHONE}</span></a>
      <a href="contact.html" class="btn btn-primary">Book Service</a>
      <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
    </div>
  </div>
</header>`;

document.getElementById('footer').outerHTML = `
<section class="cta-band">
  <div class="container cta-inner">
    <div><h2>Need it fixed today?</h2><p>Same-day appointments available. Upfront pricing, no overtime surprises.</p></div>
    <div class="cta-actions"><a href="contact.html" class="btn btn-primary btn-lg">Book Service Online</a><a href="${TEL}" class="btn btn-white btn-lg">${icon('phone', 18)} ${PHONE}</a></div>
  </div>
</section>
<footer class="site-footer">
  <div class="container">
    <div class="foot-grid">
      <div>
        <a href="index.html" class="logo light">${LOGO}<span>Ironside<small>Heating · Cooling · Plumbing</small></span></a>
        <p>Family-owned home comfort experts serving Central Ohio since 2009. Licensed, insured and on call 24/7.</p>
        <div class="foot-badges"><span>${icon('shield', 16)} Licensed &amp; Insured</span><span>${icon('star', 16)} 4.9 · 2,100+ reviews</span></div>
      </div>
      <div><h5>Services</h5><ul>${SERVICES.slice(0, 6).map(s => `<li><a href="service.html?id=${s.id}">${s.name}</a></li>`).join('')}</ul></div>
      <div><h5>Company</h5><ul><li><a href="about.html">About Us</a></li><li><a href="about.html#team">Our Team</a></li><li><a href="areas.html">Service Areas</a></li><li><a href="reviews.html">Reviews</a></li><li><a href="reviews.html#faq">FAQ</a></li></ul></div>
      <div><h5>Contact</h5><ul><li><a href="${TEL}">${PHONE}</a></li><li><a href="mailto:${EMAIL}">${EMAIL}</a></li><li>4120 Indianola Ave<br>Columbus, OH 43214</li><li>Office: Mon–Fri 7am–6pm<br>Emergency: 24/7</li></ul></div>
    </div>
    <div class="foot-bottom"><span>© ${new Date().getFullYear()} Ironside Heating, Cooling &amp; Plumbing</span><span>Concept website · Demo project</span></div>
  </div>
</footer>
<a href="${TEL}" class="fab-call" aria-label="Call now">${icon('phone', 22)}</a>
<div class="toast" id="toast"></div>`;

// mobile nav
const burger = document.getElementById('burger'), links = document.getElementById('navLinks');
burger.addEventListener('click', () => { const o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
const hdr = document.querySelector('.site-header');
addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 10), { passive: true });

// helpers
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const money = n => '$' + n.toLocaleString('en-US');
const stars = n => '★★★★★'.slice(0, n) + '<span class="off">' + '★★★★★'.slice(n) + '</span>';
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 3200); }
function serviceCard(s) {
  return `<a class="svc-card reveal" href="service.html?id=${s.id}">
    <div class="svc-img"><img src="${IMG(s.img, 700)}" alt="${s.name}" loading="lazy"><span class="svc-ic">${icon(s.icon, 22)}</span></div>
    <div class="svc-body"><span class="kicker">${CATS.find(c => c.id === s.cat).name}</span><h3>${s.name}</h3><p>${s.short}</p>
    <div class="svc-foot"><span>from <b>${money(s.price)}</b> <small>${s.unit}</small></span><span class="arrow">→</span></div></div></a>`;
}
const AV = ['#ff6a1a', '#1d4ed8', '#0f766e', '#7c3aed', '#be123c', '#0b1f3a'];
function reviewCard(r, i = 0) {
  return `<article class="review reveal" data-cat="${r.cat}"><div class="rv-top"><span class="stars">${stars(r.s)}</span><small>${r.d}</small></div>
    <p>“${r.t}”</p><div class="rv-who"><span class="avatar" style="background:${AV[i % AV.length]}">${r.n.split(' ').map(w => w[0]).join('')}</span><div><b>${r.n}</b><small>${r.city}, OH · ${CATS.find(c => c.id === r.cat).name}</small></div><span class="verified">${icon('check', 14)} Verified</span></div></article>`;
}
function faqList(items) { return items.map(([q, a], i) => `<details class="faq-item reveal"${i === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join(''); }
function validate(form) {
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    const v = f.value.trim();
    const bad = !v || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(v)) || (f.type === 'tel' && v.replace(/\D/g, '').length < 10) || (f.dataset.zip !== undefined && !/^\d{5}$/.test(v));
    f.classList.toggle('invalid', bad); if (bad) ok = false;
  });
  const first = form.querySelector('.invalid'); if (first) first.focus();
  return ok;
}
document.addEventListener('input', e => e.target.classList && e.target.classList.remove('invalid'));
const inArea = z => /^43[0-2]\d\d$/.test(z);
function bindZip(form, out) {
  form.addEventListener('submit', e => {
    e.preventDefault(); const z = form.querySelector('input').value.trim();
    if (!/^\d{5}$/.test(z)) { out.className = 'zip-out warn'; out.textContent = 'Please enter a valid 5-digit ZIP code.'; return; }
    out.className = 'zip-out ' + (inArea(z) ? 'ok' : 'warn');
    out.innerHTML = inArea(z) ? `${icon('check', 16)} Yes! We service ${z}. Same-day appointments available — <a href="contact.html?zip=${z}">book now</a>.` : `We don’t regularly service ${z}, but call ${PHONE} — we may still be able to help.`;
  });
}

// reveal on scroll (call again after rendering dynamic content)
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
function observeReveals() { $$('.reveal:not(.in)').forEach(el => io.observe(el)); }
observeReveals();
