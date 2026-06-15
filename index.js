// Таймер
const timer = document.getElementById('timer');
const date = new Date('2026-08-23');

    setInterval(() => {
        const now = new Date();
        const diff = date - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            timer.innerHTML = `
                ${days}дн ${hours}ч ${minutes}мин ${seconds}сек
            `;
            timer.style.fontSize = '30px';
    }, 1000);