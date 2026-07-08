const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchResult = document.querySelector('#search-result');

if (searchForm && searchInput && searchResult) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
      searchResult.textContent = '';
      return;
    }

    searchResult.textContent = `Você buscou por: '${query}'`;
  });
}

function cloneCard(card) {
  const clone = card.cloneNode(true);
  clone.classList.add('clone');
  return clone;
}

function setupLoopingCarousel(track) {
  const cards = Array.from(track.querySelectorAll('.product-card')).filter((card) => !card.classList.contains('clone'));
  if (cards.length === 0) return;

  const visibleCount = 5;
  const cloneCount = Math.min(visibleCount, cards.length);
  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = Number(window.getComputedStyle(track).columnGap.replace('px', '')) || 16;
  const step = cardWidth + gap;

  const clonesBefore = cards.slice(-cloneCount).map(cloneCard);
  const clonesAfter = cards.slice(0, cloneCount).map(cloneCard);

    clonesBefore.forEach((c) => track.prepend(c));
    clonesAfter.forEach((c) => track.append(c));

  track.dataset.cloneCount = cloneCount;
  track.dataset.step = step;
  track.dataset.realCount = cards.length;
  track.scrollLeft = cloneCount * step;
}

function adjustLoop(track) {
  const cloneCount = Number(track.dataset.cloneCount);
  const step = Number(track.dataset.step);
  const realCount = Number(track.dataset.realCount);
  if (!cloneCount || !step || !realCount) return;

  const realWidth = realCount * step;
  const minPosition = cloneCount * step;
  const maxPosition = minPosition + realWidth;

  if (track.scrollLeft < minPosition) {
    track.scrollLeft += realWidth;
  }
  if (track.scrollLeft >= maxPosition) {
    track.scrollLeft -= realWidth;
  }
}

function moveCarousel(trackId, direction) {
  const track = document.querySelector(`#${trackId}`);
  if (!track) return;

  const pageWidth = track.clientWidth;
  track.scrollTo({ left: track.scrollLeft + direction * pageWidth, behavior: 'smooth' });

  setTimeout(() => adjustLoop(track), 250);
}

function bindFallbackNavigation() {
  document.querySelectorAll('.carousel-prev').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      if (target) moveCarousel(target, -1);
    });
  });

  document.querySelectorAll('.carousel-next').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      if (target) moveCarousel(target, 1);
    });
  });
}

window.addEventListener('load', () => {
  // If Swiper is available, initialize continuous loop carousels via Swiper
  if (typeof Swiper !== 'undefined') {
    document.querySelectorAll('.products-carousel').forEach((track) => {
      // Avoid double-init
      if (track.dataset.swiperInit) return;

      const realSlideCount = track.children.length;
      const slidesPerView = Math.min(5, realSlideCount);

      // Move existing children into a swiper-wrapper and mark slides
      const wrapper = document.createElement('div');
      wrapper.className = 'swiper-wrapper';
      while (track.firstChild) {
        const child = track.firstChild;
        if (child.nodeType === Node.ELEMENT_NODE) child.classList.add('swiper-slide');
        wrapper.appendChild(child);
      }
      track.appendChild(wrapper);
      track.classList.add('swiper');

      const shell = track.parentElement;
      const nextBtn = shell.querySelector('.carousel-next');
      const prevBtn = shell.querySelector('.carousel-prev');
      if (nextBtn) {
        nextBtn.textContent = '';
        nextBtn.classList.add('swiper-button-next');
      }
      if (prevBtn) {
        prevBtn.textContent = '';
        prevBtn.classList.add('swiper-button-prev');
      }

      const dotsEl = shell.parentElement.querySelector('.carousel-dots');
      if (dotsEl) dotsEl.textContent = '';

      // Initialize Swiper with loop enabled (continuous loop).
      // Loop needs more real slides than slidesPerView, otherwise Swiper
      // can't build enough duplicates and the navigation breaks.
      new Swiper(track, {
        slidesPerView,
        slidesPerGroup: slidesPerView,
        spaceBetween: 16,
        loop: realSlideCount > slidesPerView,
        rewind: false,
        navigation: {
          nextEl: nextBtn || '.swiper-button-next',
          prevEl: prevBtn || '.swiper-button-prev',
        },
        pagination: dotsEl
          ? {
              el: dotsEl,
              clickable: true,
            }
          : false,
      });

      track.dataset.swiperInit = 'true';
    });
  } else {
    // Fallback: existing clone-based infinite loop implementation
    bindFallbackNavigation();
    document.querySelectorAll('.products-carousel').forEach(setupLoopingCarousel);
  }
});
