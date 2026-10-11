// Interactive JavaScript for Hawler Restaurant website

document.addEventListener('DOMContentLoaded', () => {
  // Navigation Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('py-3', 'shadow-2xl', 'border-b', 'border-amber-500/20');
      navbar.classList.remove('py-5');
    } else {
      navbar.classList.add('py-5');
      navbar.classList.remove('py-3', 'shadow-2xl', 'border-b', 'border-amber-500/20');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Menu Category Filtering
  const filterBtns = document.querySelectorAll('.menu-filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      // Update active button state
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-stone-950', 'font-bold');
        b.classList.add('bg-stone-900', 'text-amber-400', 'border-amber-500/30');
      });
      btn.classList.remove('bg-stone-900', 'text-amber-400', 'border-amber-500/30');
      btn.classList.add('bg-amber-500', 'text-stone-950', 'font-bold');

      // Filter items with smooth fade animation
      menuItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Reservation Modal Logic
  const reserveModal = document.getElementById('reserveModal');
  const openReserveBtns = document.querySelectorAll('.open-reserve-btn');
  const closeReserveBtn = document.getElementById('closeReserveBtn');
  const reserveForm = document.getElementById('reserveForm');

  openReserveBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      reserveModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeReserveBtn) {
    closeReserveBtn.addEventListener('click', () => {
      reserveModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
  }

  if (reserveForm) {
    reserveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Table Reservation Request Sent! We will confirm via SMS/Call shortly.');
      reserveModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      reserveForm.reset();
    });
  }

  // Order Delivery Modal
  const orderModal = document.getElementById('orderModal');
  const openOrderBtns = document.querySelectorAll('.open-order-btn');
  const closeOrderBtn = document.getElementById('closeOrderBtn');

  openOrderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      orderModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeOrderBtn) {
    closeOrderBtn.addEventListener('click', () => {
      orderModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
  }

  // Close modals when clicking outside content
  window.addEventListener('click', (e) => {
    if (e.target === reserveModal) {
      reserveModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
    if (e.target === orderModal) {
      orderModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });

  // Helper function: Toast Notification
  function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-amber-500 text-stone-950 font-bold px-6 py-4 rounded-xl shadow-2xl z-50 transform transition-all duration-300 translate-y-10 opacity-0 flex items-center gap-3 border border-amber-300';
    toast.innerHTML = `<svg class="w-6 h-6 text-stone-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-10', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('translate-y-10', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
});
