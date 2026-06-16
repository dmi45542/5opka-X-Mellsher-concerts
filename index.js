// Таймер
const timer = document.getElementById('timer');
const date = new Date('2026-07-23');

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
            timer.style.fontSize = '20px';
            if (timer.innerHTML === '0дн 0ч 0мин 0сек') {
                timer.innerHTML = `
                    концерт начался
                `;
            }

            // чем меньше время, тем краснее

            if (days < 42) {
                timer.style.color = '#FFA07A';
            }
            if (days < 21) {
                timer.style.color = '#FF6347';
            }
            if (days < 7) {
                timer.style.color = '#FF4500';
            }
            if (days < 1) {
                timer.style.color = '#FF0000';
            }
    }, 1000);

// открытие и закрытие меню с исполнителями

