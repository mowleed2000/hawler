/* Hawler Restaurant — shared chrome, motion, menu render */
(function () {
  const pathParts = location.pathname.replace(/\/+$/, '').split('/');
  const file = pathParts[pathParts.length - 1] || 'index.html';
  const inBlog = pathParts.includes('blog');
  const inArticle = inBlog && file !== 'blog' && !file.endsWith('blog') && pathParts.indexOf('blog') < pathParts.length - 1;

  let pageKey = 'home';
  if (file.includes('menu')) pageKey = 'menu';
  else if (file.includes('about')) pageKey = 'about';
  else if (file.includes('catering')) pageKey = 'catering';
  else if (file.includes('visit')) pageKey = 'visit';
  else if (file.includes('order')) pageKey = 'order';
  else if (inBlog) pageKey = 'blog';

  // Depth relative to site root
  let base = '';
  if (inArticle) base = '../../';
  else if (inBlog) base = '../';

  const navItems = [
    { href: 'index.html', key: 'home', label: 'Home' },
    { href: 'menu.html', key: 'menu', label: 'Menu' },
    { href: 'about.html', key: 'about', label: 'Our story' },
    { href: 'catering.html', key: 'catering', label: 'Catering' },
    { href: 'blog/index.html', key: 'blog', label: 'Blog' },
    { href: 'visit.html', key: 'visit', label: 'Visit' }
  ];

  function logoSvgDeliveroo() {
    return `<svg viewBox="0 0 148 32" role="img" aria-label="Deliveroo" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="16" r="12" fill="#00ccbc"/>
      <path d="M10 12h4.2c2.2 0 3.6 1.2 3.6 3.1 0 1.9-1.4 3.1-3.6 3.1H12.2V22H10V12zm2.2 4.6h1.8c.9 0 1.5-.5 1.5-1.3s-.6-1.3-1.5-1.3h-1.8v2.6z" fill="#06201e"/>
      <text x="34" y="21" font-family="Outfit, Helvetica, Arial, sans-serif" font-size="16" font-weight="700" fill="#00ccbc">deliveroo</text>
    </svg>`;
  }
  function logoSvgUberEats() {
    return `<svg viewBox="0 0 148 32" role="img" aria-label="Uber Eats" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="24" height="24" rx="6" fill="#06c167"/>
      <text x="7" y="21" font-family="Outfit, Helvetica, Arial, sans-serif" font-size="12" font-weight="800" fill="#04140c">Uber</text>
      <text x="34" y="21" font-family="Outfit, Helvetica, Arial, sans-serif" font-size="16" font-weight="700" fill="#f7f2ea">Uber Eats</text>
    </svg>`;
  }
  function logoSvgJustEat() {
    return `<svg viewBox="0 0 148 32" role="img" aria-label="Just Eat" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="24" height="24" rx="12" fill="#ff8000"/>
      <path d="M10 11h12v2.2H10V11zm0 4.4h9v2.2h-9v-2.2zm0 4.4h12v2.2H10v-2.2z" fill="#1a0d00"/>
      <text x="34" y="21" font-family="Outfit, Helvetica, Arial, sans-serif" font-size="16" font-weight="700" fill="#ff8000">Just Eat</text>
    </svg>`;
  }

  function injectChrome() {
    const headerMount = document.getElementById('site-header');
    const footerMount = document.getElementById('site-footer');
    const modalMount = document.getElementById('modals');

    if (headerMount) {
      headerMount.outerHTML = `
<header class="site-header ${pageKey === 'home' ? '' : 'is-solid'}" id="header">
  <div class="wrap-wide nav-inner">
    <a href="${base}index.html" class="logo" aria-label="Hawler Restaurant home">
      <span class="brand-mark">Hawler</span>
      <small>Edgware Road · London</small>
    </a>
    <nav class="nav-links" aria-label="Primary">
      ${navItems.map((n) => `<a href="${base}${n.href}" class="${n.key === pageKey ? 'is-active' : ''}">${n.label}</a>`).join('')}
    </nav>
    <div class="nav-actions">
      <a class="nav-phone" href="tel:+442077245757">020 7724 5757</a>
      <a href="${base}order.html" class="btn btn-gold" style="padding:0.68rem 1.1rem;font-size:0.78rem;">Order</a>
      <button type="button" class="btn btn-ghost open-reserve" style="padding:0.68rem 1.1rem;font-size:0.78rem;">Reserve</button>
    </div>
    <button type="button" class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile">
  ${navItems.map((n) => `<a href="${base}${n.href}">${n.label}</a>`).join('')}
  <a href="${base}order.html">Order online</a>
  <a class="btn btn-gold" href="tel:+442077245757">Call 020 7724 5757</a>
  <button type="button" class="btn btn-ghost open-reserve">Reserve a table</button>
</nav>`;
    }

    if (footerMount) {
      footerMount.outerHTML = `
<footer class="site-footer">
  <div class="wrap footer-top">
    <div class="footer-brand">
      <p class="brand-mark">Hawler</p>
      <p>Kurdish &amp; Iraqi charcoal grill on Edgware Road. Charcoal. Culture. Hospitality. 100% Halal. Rated 4.4 on Uber Eats from 700+ reviews.</p>
    </div>
    <div class="footer-cols">
      <div>
        <h4>Explore</h4>
        <a href="${base}menu.html">Menu</a>
        <a href="${base}about.html">Our story</a>
        <a href="${base}catering.html">Catering</a>
        <a href="${base}blog/index.html">Blog</a>
        <a href="${base}visit.html">Visit</a>
        <a href="${base}order.html">Order</a>
      </div>
      <div>
        <h4>Visit</h4>
        <p>355 Edgware Road</p>
        <p>London W2 1BS</p>
        <a href="tel:+442077245757">020 7724 5757</a>
        <p>Daily 12:00 – 23:00</p>
      </div>
      <div>
        <h4>Follow</h4>
        <a href="https://www.instagram.com/hhawler.restaurant/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d27377930-Reviews-Hawler-London_England.html" target="_blank" rel="noopener noreferrer">TripAdvisor</a>
        <a href="https://www.ubereats.com/gb/store/hawler-restaurant-edgware-rd/9QQ8yPUgXTmL4_CyM6-3gA" target="_blank" rel="noopener noreferrer">Uber Eats</a>
      </div>
    </div>
  </div>
  <div class="wrap footer-bottom">
    <p>© <span data-year></span> Hawler Restaurant London</p>
    <a href="#top">Back to top</a>
  </div>
</footer>`;
    }

    if (modalMount) {
      modalMount.innerHTML = `
<div class="modal" id="reserveModal" role="dialog" aria-modal="true" aria-labelledby="reserveTitle" hidden>
  <div class="modal-panel">
    <button type="button" class="modal-close" id="closeReserve" aria-label="Close">&times;</button>
    <h2 id="reserveTitle">Reserve a table</h2>
    <p>Tables are confirmed by phone — the fastest way to secure your evening on Edgware Road.</p>
    <div class="modal-actions">
      <a class="primary" href="tel:+442077245757">Call 020 7724 5757</a>
      <a href="https://maps.google.com/?q=Hawler+Restaurant+355+Edgware+Road+London+W2+1BS" target="_blank" rel="noopener noreferrer">Get directions</a>
      <a href="${base}order.html">Order delivery instead</a>
    </div>
    <p class="reserve-note">For larger groups, call ahead. Open daily 12:00 – 23:00.</p>
  </div>
</div>`;
    }

    window.HAWLER_LOGOS = {
      deliveroo: logoSvgDeliveroo(),
      uber: logoSvgUberEats(),
      justeat: logoSvgJustEat()
    };
    window.HAWLER_BASE = base;
  }

  function bindInteractions() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const reserveModal = document.getElementById('reserveModal');

    document.querySelectorAll('[data-year]').forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });

    const onScroll = () => {
      if (!header || pageKey !== 'home') return;
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const setMenuOpen = (open) => {
      if (!mobileNav || !menuToggle) return;
      mobileNav.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    };

    menuToggle?.addEventListener('click', () => setMenuOpen(!mobileNav.classList.contains('is-open')));
    mobileNav?.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('click', () => setMenuOpen(false));
    });

    const openModal = (modal) => {
      if (!modal) return;
      modal.hidden = false;
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    const closeModal = (modal) => {
      if (!modal) return;
      modal.classList.remove('is-open');
      modal.hidden = true;
      if (!mobileNav?.classList.contains('is-open')) document.body.style.overflow = '';
    };

    document.querySelectorAll('.open-reserve').forEach((btn) => {
      btn.addEventListener('click', () => openModal(reserveModal));
    });
    document.getElementById('closeReserve')?.addEventListener('click', () => closeModal(reserveModal));
    reserveModal?.addEventListener('click', (e) => {
      if (e.target === reserveModal) closeModal(reserveModal);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(reserveModal);
        setMenuOpen(false);
      }
    });

    const reveals = document.querySelectorAll('.reveal');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      reveals.forEach((el) => el.classList.add('is-visible'));
    } else if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('is-visible'));
    }
  }

  function renderMenuPage() {
    const root = document.getElementById('menuRoot');
    if (!root || !window.HAWLER_MENU) return;
    const { categories, meta } = window.HAWLER_MENU;

    const nav = document.createElement('nav');
    nav.className = 'menu-nav';
    nav.setAttribute('aria-label', 'Menu sections');
    nav.innerHTML = categories.map((c) => `<a href="#${c.id}">${c.name}</a>`).join('');

    const content = document.createElement('div');
    content.className = 'menu-content';

    categories.forEach((cat) => {
      const section = document.createElement('section');
      section.className = 'menu-section';
      section.id = cat.id;
      const withImages = cat.items.filter((i) => i.image);
      const withoutImages = cat.items.filter((i) => !i.image);
      let html = `<div class="menu-section-head"><p class="eyebrow">${cat.name}</p><h2>${cat.name}</h2><p>${cat.intro || ''}</p></div>`;
      if (withImages.length) {
        html += '<div class="menu-photo-grid">';
        withImages.forEach((item) => {
          html += `<article class="dish-card">
            <div class="dish-card-media"><img src="${item.image}" alt="${item.name}" loading="lazy" width="480" height="360" /></div>
            <div class="dish-card-body">
              <div class="dish-card-top"><h3>${item.name}</h3><span class="price">${item.price}</span></div>
              <p>${item.desc}</p>
              ${item.badge ? `<span class="dish-badge">${item.badge}</span>` : ''}
            </div>
          </article>`;
        });
        html += '</div>';
      }
      if (withoutImages.length) {
        html += `<div class="menu-list ${withoutImages.length > 3 ? 'cols-2' : ''}">`;
        withoutImages.forEach((item) => {
          html += `<article class="menu-item">
            <h3>${item.name}</h3><span class="price">${item.price}</span>
            <p>${item.desc}</p>
            ${item.badge ? `<span class="dish-badge">${item.badge}</span>` : ''}
          </article>`;
        });
        html += '</div>';
      }
      section.innerHTML = html;
      content.appendChild(section);
    });

    content.insertAdjacentHTML('beforeend', `<p class="menu-note">${meta.note} Order on
      <a href="https://www.ubereats.com/gb/store/hawler-restaurant-edgware-rd/9QQ8yPUgXTmL4_CyM6-3gA" target="_blank" rel="noopener noreferrer">Uber Eats</a>,
      <a href="https://deliveroo.co.uk/menu/london/paddington/hawler-restaurant-355-edgware-road" target="_blank" rel="noopener noreferrer">Deliveroo</a>
      or <a href="order.html">see all options</a>.</p>`);

    root.innerHTML = '';
    root.appendChild(nav);
    root.appendChild(content);

    const links = nav.querySelectorAll('a');
    const sections = content.querySelectorAll('.menu-section');
    const setActive = () => {
      let current = categories[0]?.id;
      sections.forEach((sec) => {
        if (sec.getBoundingClientRect().top <= 140) current = sec.id;
      });
      links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`));
    };
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }

  function renderOrderLogos() {
    document.querySelectorAll('[data-logo]').forEach((el) => {
      const key = el.getAttribute('data-logo');
      if (window.HAWLER_LOGOS?.[key]) el.innerHTML = window.HAWLER_LOGOS[key];
    });
  }

  function bindCateringForm() {
    const form = document.getElementById('cateringForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const date = (data.get('date') || '').toString().trim();
      const type = (data.get('type') || '').toString().trim();
      const guests = (data.get('guests') || '').toString().trim();
      const location = (data.get('location') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      const body = [
        'Catering enquiry from hawler website',
        '',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Event date: ${date}`,
        `Event type: ${type}`,
        `Estimated guests: ${guests}`,
        `Location: ${location}`,
        '',
        'Message:',
        message
      ].join('\n');

      const mailto = `mailto:hello@hawler.invalid?subject=${encodeURIComponent('Hawler catering enquiry — ' + name)}&body=${encodeURIComponent(body)}`;
      // Prefer phone confirmation — open mail client as structured draft; also show call CTA
      window.location.href = `tel:+442077245757`;
      const note = document.getElementById('formStatus');
      if (note) {
        note.hidden = false;
        note.innerHTML = `Thank you. Please call <a href="tel:+442077245757">020 7724 5757</a> to discuss your catering enquiry, or email the restaurant with these details:<br><pre style="white-space:pre-wrap;margin-top:0.75rem;font-size:0.85rem;opacity:0.85">${body.replace(/</g, '&lt;')}</pre>`;
      }
      // Also attempt mailto as secondary for those with email clients
      setTimeout(() => {
        const a = document.createElement('a');
        a.href = mailto.replace('hello@hawler.invalid', '');
        // Use blank mailto with subject only if no email on file — better: use phone
      }, 100);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectChrome();
    bindInteractions();
    renderMenuPage();
    renderOrderLogos();
    bindCateringForm();
  });
})();
