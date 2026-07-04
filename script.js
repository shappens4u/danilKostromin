// центр Находки
const CONFIG = {
    CENTER: [42.821903, 132.880862], 
    ZOOM: 12
};

// кружки
const CLUBS_DATA = [
    // --- НАУКА И IT (robot) ---
    { id: 1, name: "Центр развития робототехники #1", type: "robot", address: "ул. Малиновского, д. 23", price: "смотри на сайте", coords: [42.837283017800544, 132.89916031255476] },
    { id: 2, name: "Исток #2", type: "robot", address: "ул. Рыбацкая, д. 19а", price: "смотри на сайте", coords: [42.77689164652212, 132.87032919720932] },
    { id: 3, name: "Другая школа #3", type: "robot", address: "ул. Северный пр-т, д. 6", price: "смотри на сайте", coords: [42.83948377573225, 132.87985555303268] },
    { id: 4, name: "Лига Роботов #4", type: "robot", address: "ул. Ленинская, д. 6", price: "смотри на сайте", coords: [42.808500, 132.882100] },
    { id: 5, name: "Роботрек #5", type: "robot", address: "ул. Мичурина, д. 6а", price: "смотри на сайте", coords: [42.825100, 132.891000] },

    // --- СПОРТ И ПЛАВАНИЕ (sport) ---
    { id: 6, name: "Дерево #6", type: "sport", address: "ул. Пирогова, д. 6", price: "смотри на сайте", coords: [42.77790846890845, 132.85990471070198] },
    { id: 7, name: "Руслан #7", type: "sport", address: "Безымянный переулок, 1 ст11", price: "смотри на сайте", coords: [42.838466081980066, 132.89616455303275] },
    { id: 8, name: "Физкульт #8", type: "sport", address: "ул. Спортивная, д. 3а", price: "смотри на сайте", coords: [42.77767081996542, 132.8504590972094] },
    { id: 9, name: "Мастер #9", type: "sport", address: "ул. Спортивная, д. 2-2а", price: "смотри на сайте", coords: [42.77964334046988, 132.85436173768724] },
    { id: 10, name: "Океан #10", type: "sport", address: "Находкинский проспект, д. 108 ст2", price: "смотри на сайте", coords: [42.78317600705674, 132.85293272789593] },

    // --- ТВОРЧЕСТВО И РИСОВАНИЕ (art) ---
    { id: 11, name: "Дерево #11", type: "art", address: "ул. Пирогова, д. 6", price: "смотри на сайте", coords: [42.77790846890845, 132.85990471070198] },
    { id: 12, name: "Другая школа #12", type: "art", address: "ул. Северный пр-т, д. 6", price: "смотри на сайте", coords: [42.83948377573225, 132.87985555303268] },
    { id: 13, name: "Росток #13", type: "art", address: "ул. Спортивная, д. 41", price: "смотри на сайте", coords: [42.7719042789245, 132.85465151440286] },
    { id: 14, name: "Талант of Находка #14", type: "art", address: "ул. Куйбышева, д. 4а", price: "смотри на сайте", coords: [42.84016924305933, 132.8977022438496] },
    { id: 15, name: "IQ007 #15", type: "art", address: "ул. Пирогова, д. 13 ст1", price: "смотри на сайте", coords: [42.77842277309188, 132.8632816178349] },
];

let myMap;

// Инициализация карты
ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: CONFIG.CENTER,
        zoom: CONFIG.ZOOM,
        controls: ['zoomControl']
    });

    renderApp(CLUBS_DATA);

  
}

// Отрисовка приложения
function renderApp(data) {
    // Обновляем твой заголовок с id="resultsCount"
    const counterEl = document.getElementById('resultsCount');
    if (counterEl) counterEl.innerText = `Доступные секции (${data.length})`;
    
    myMap.geoObjects.removeAll();
    
    const listContainer = document.getElementById('circlesGrid');
    if (!listContainer) return;
    listContainer.innerHTML = ''; 

    data.forEach(club => {
        // 1. создание маркера на карте
        const placemark = new ymaps.Placemark(club.coords, {
            balloonContentHeader: `<b style="color:#4A90E2; font-size:16px;">${club.name}</b>`,
            balloonContentBody: `<div style="font-size:14px; margin-top:5px;">📍 ${club.address}<br>💰 <b>${club.price}</b></div>`,
            hintContent: club.name
        }, {
            preset: 'islands#blueEducationIcon'
        });

        myMap.geoObjects.add(placemark);

        // название для бейджика
        let badgeText = 'Кружок';
        if (club.type === 'robot') badgeText = 'Наука';
        if (club.type === 'sport') badgeText = 'Спорт';
        if (club.type === 'art') badgeText = 'Творчество';

        // 2. Создание карточки
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-content">
                <span class="card-badge">${badgeText}</span>
                <h3>${club.name}</h3>
                <p class="addr">📍 ${club.address}</p>
                <div class="card-footer">
                    <span>Стоимость:</span>
                    <span class="price">${club.price}</span>
                </div>
            </div>
        `;

        // 3. настройка центрирования карты при клике
        card.addEventListener('click', () => {
            myMap.setCenter(club.coords, 15, {
                checkZoomRange: true,
                duration: 400
            });
            placemark.balloon.open();
        });

        listContainer.appendChild(card);
    });
}
