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

        document.addEventListener('DOMContentLoaded', () => { // добавляем обработчик события DOMContentLoaded (взаимодействие с html)
            const btn = document.querySelector('.dropdown-toggle'); // находим кнопку "Исполнители"
            const menu = document.querySelector('.dropdown-menu'); // находим меню

            btn.onclick = (e) => { // добавляем обработчик события клика на кнопку
                e.preventDefault(); // отменяем стандартное поведение ссылки
                menu.classList.toggle('active'); // добавляем или удаляем класс active - то есть показываем или скрываем меню
            }

            menu.onclick = (e) => { // добавляем обработчик события клика на меню
                const link = e.target.closest('a'); // находим ссылку внутри меню - е - это событие клика, target - это элемент, на котором произошло событие, closest - ищет ближайшего родителя, у которого есть класс "link"
                if (!link) {
                    return;
                }

                btn.textContent = link.textContent + ' ▼';  // меняем текст кнопки на текст ссылки
                menu.classList.remove('active'); 
            }

            document.onclick = (e) => { // добавляем обработчик события клика на документ
                if (!btn.contains(e.target) && !menu.contains(e.target)) { // если клик не по кнопке и не по меню
                    menu.classList.remove('active'); // скрываем меню
                }
            }
        });