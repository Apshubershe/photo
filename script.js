const cards = document.querySelectorAll('.photo-card');
const song = document.getElementById('loveSong');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Закрываем все открытые фото
    cards.forEach(c => {
      if(c !== card) c.classList.remove('open');
    });
    // Переключаем текущее фото
    card.classList.toggle('open');
  });
});

// Автовоспроизведение музыки (если браузер разрешает)
song.volume = 0.5;
song.play().catch(() => {
  console.log("Автовоспроизведение заблокировано браузером, нужно кликнуть для воспроизведения.");
});
