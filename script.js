// Hawler Restaurant — interactions

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Header solidity on scroll
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav
  const setMenuOpen = (open) => {
    if (!mobileNav || !menuToggle) return;
    mobileNav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      setMenuOpen(!mobileNav.classList.contains('is-open'));
    });
  }

  if (mobileNav) {
    mobileNav.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('click', () => setMenuOpen(false));
    });
  }

  // Menu filters
  const tabs = document.querySelectorAll('.menu-tab');
  const items = document.querySelectorAll('.menu-item');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');

      tabs.forEach((t) => {
        t.classList.toggle('is-active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });

      items.forEach((item) => {
        const match = category === 'all' || item.getAttribute('data-category') === category;
        item.classList.toggle('is-hidden', !match);
      });
    });
  });

  // Modals
  const reserveModal = document.getElementById('reserveModal');
  const orderModal = document.getElementById('orderModal');

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
    if (!mobileNav?.classList.contains('is-open')) {
      document.body.style.overflow = '';
    }
  };

  document.querySelectorAll('.open-reserve').forEach((btn) => {
    btn.addEventListener('click', () => openModal(reserveModal));
  });

  document.querySelectorAll('.open-order').forEach((btn) => {
    btn.addEventListener('click', () => openModal(orderModal));
  });

  document.getElementById('closeReserve')?.addEventListener('click', () => closeModal(reserveModal));
  document.getElementById('closeOrder')?.addEventListener('click', () => closeModal(orderModal));

  [reserveModal, orderModal].forEach((modal) => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(reserveModal);
      closeModal(orderModal);
      setMenuOpen(false);
    }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }
});
