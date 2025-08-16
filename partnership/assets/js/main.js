window.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".wba-promo-container");
    const cards = Array.from(container.querySelectorAll(".wba-promo-card"));
    // Shuffle the cards
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Re-append in new order
    cards.forEach(card => container.appendChild(card));
  });

  document.querySelectorAll('.online-count').forEach(el => {
    const count = Math.floor(Math.random() * 501) + 500; // 500–1000
    el.textContent = `${count} `;
  });
  