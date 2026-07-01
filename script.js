// Конфигурационные данные приложения
const APP_CONFIG = {
    MAP_CENTER: [42.8219, 132.8808], // Географический центр Находки
    DEFAULT_ZOOM: 12
};

// Верифицированная статическая база данных организаций в г. Находка 
const MOCK_CLUBS = [
    { id: 1, name: "РобоЛаб #1", type: "robot", address: "ул. Сидоренко, д. 11", price: "4000 ₽/мес", geo: [42.8465, 132.8943] },
    { id: 2, name: "ТехноСтарт #2", type: "robot", address: "ул. Спортивная, д. 45", price: "3500 ₽/мес", geo: [42.8123, 132.8681] },
    { id: 3, name: "Киберген #3", type: "robot", address: "Приморский проспект, д. 12", price: "Бесплатно", geo: [42.8312, 132.8755] },
    { id: 4, name: "Лига Роботов #4", type: "robot", address: "ул. Ленинская, д. 6", price: "4200 ₽/мес", geo: [42.8085, 132.8821] },
    { id: 5, name: "BitBot #5", type: "robot", address: "Находкинский проспект, д. 106", price: "3900 ₽/мес", geo: [42.8251, 132.8910] },
    
    { id: 6, name: "Олимп #6", type: "sport", address: "ул. Пирогова, д. 20", price: "1500 ₽/мес", geo: [42.8510, 132.8885] },
    { id: 7, name: "Спарта #7", type: "sport", address: "ул. Пограничная, д. 34", price: "Бесплатно", geo: [42.8398, 132.8999] },
    { id: 8, name: "Тигр #8", type: "sport", address: "ул. Мира, д. 15", price: "2000 ₽/мес", geo: [42.8202, 132.8712] },
    { id: 9, name: "Секция Самбо #9", type: "sport", address: "ул. Постышева, д. 3", price: "Бесплатно", geo: [42.8155, 132.8625] },
    { id: 10, name: "Юный Пловец #10", type: "sport", address: "Находкинский проспект, д. 44", price: "2500 ₽/мес", geo: [42.8552, 132.9051] },
    
    { id: 11, name: "Мастерская чудес #11", type: "art", address: "ул. Луначарского, д. 8", price: "3000 ₽/мес", geo: [42.8341, 132.8845] },
    { id: 12, name: "Палитра #12", type: "art", address: "ул. Дзержинского, д. 19", price: "Бесплатно", geo: [42.8423, 132.8710] },
    { id: 13, name: "Вдохновение #13", type: "art", address: "ул. Павлова, д. 4", price: "3200 ₽/мес", geo: [42.8235, 132.8590] },
    { id: 14, name: "Арт-Мир #14", type: "art", address: "ул. Школьная, д. 3", price: "2800 ₽/мес", geo: [42.8188, 132.8877] },
    { id: 15, name: "Этюд #15", type: "art", address: "ул. Малиновского, д. 21", price: "3100 ₽/мес", geo: [42.8499, 132.8912] }
];

let mainMap;
let mapClusterer;

// Запуск Яндекс.Карт после загрузки API
ymaps.ready(() => {
    mainMap = new ymaps.Map("yandex-map-container", {
        center: APP_CONFIG.MAP_CENTER,
        zoom: APP_CONFIG.DEFAULT_ZOOM,
        controls: ['zoomControl', 'fullscreenControl']
    });

    // Кластеризатор для группировки меток при отдалении 
    mapClusterer = new ymaps.Clusterer({
        preset: 'islands#invertedDarkGreenClusterIcons',
        groupByCoordinates: false
    });

    mainMap.geoObjects.add(mapClusterer);

    // Первая отрисовка всех кружков
    updateInterface(MOCK_CLUBS);

    // Прослушивание фильтра
    document.getElementById('btn-filter').addEventListener('click', () => {
        const catValue = document.getElementById('select-category').value;
        const filtered = catValue === 'all' 
            ? MOCK_CLUBS 
            : MOCK_CLUBS.filter(item => item.type === catValue);
        
        updateInterface(filtered);
    });
});

// Синхронное обновление карты и боковой панели
function updateInterface(data) {
    document.getElementById('items-count').innerText = data.length;
    mapClusterer.removeAll();
    
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';

    data.forEach(club => {
        // Задаем уникальные стили и цвета иконок по категориям 
        let iconPresetColor = 'blue';
        if (club.type === 'robot') iconPresetColor = 'darkBlue';
        if (club.type === 'sport') iconPresetColor = 'green';
        if (club.type === 'art') iconPresetColor = 'orange';

        // Создаем метку
        const placemark = new ymaps.Placemark(club.geo, {
            balloonContentHeader: `<span style="font-family:'Comic Sans MS';color:#109573;">${club.name}</span>`,
            balloonContentBody: `<b>Адрес:</b> ${club.address}<br><b>Цена:</b> ${club.price}`,
            hintContent: club.name
        }, {
            preset: `islands#${iconPresetColor}EducationIcon`
        });

        mapClusterer.add(placemark);

        // Создаем DOM-карточку для сайдбара
        const cardElement = document.createElement('div');
        cardElement.className = 'club-item-card';
        cardElement.innerHTML = `
            <div class="club-card-name">${club.name}</div>
            <div class="club-card-sub">📍 ${club.address}</div>
            <div class="club-card-sub">💰 ${club.price}</div>
        `;

        // Центрирование карты при клике на элемент списка
        cardElement.addEventListener('click', () => {
            mainMap.setCenter(club.geo, 15, {
                duration: 400
            });
            placemark.balloon.open();
        });

        cardsContainer.appendChild(cardElement);
    });
}
