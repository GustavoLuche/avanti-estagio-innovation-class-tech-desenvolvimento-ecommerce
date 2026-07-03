const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchResult = document.querySelector('#search-result');

if (searchForm && searchInput && searchResult) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
      searchResult.textContent = 'Digite um termo para buscar.';
      return;
    }

    searchResult.textContent = `Voce buscou por: '${query}'`;
  });
}

function moveCarousel(trackId, direction) {
  const track = document.querySelector(`#${trackId}`);
  if (!track) return;

  const card = track.querySelector('.carousel-item');
  const baseStep = card ? card.getBoundingClientRect().width + 12 : 220;
  track.scrollBy({ left: direction * baseStep, behavior: 'smooth' });
}

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
