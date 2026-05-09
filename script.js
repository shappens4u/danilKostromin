const db = [
    // --- СПОРТ (Путь Силы) ---
    { name: "ДФК 'Водник' (Футбол)", age: [5, 17], type: "Спорт", city: "Находка", lat: 42.8123, lon: 132.8785, addr: "ул. Владивостокская, 45А", price: "Бесплатно" },
    { name: "СК 'Руслан' (Бокс/ММА)", age: [7, 18], type: "Спорт", city: "Находка", lat: 42.8256, lon: 132.8912, addr: "ул. Спортивная, 4", price: "от 3000₽" },
    { name: "ДЮСШ 'Приморец'", age: [6, 16], type: "Спорт", city: "Находка", lat: 42.8543, lon: 132.9123, addr: "пр-кт Находкинский, 102", price: "Бесплатно" },
    { name: "Бассейн 'Физкультура и здоровье'", age: [3, 17], type: "Спорт", city: "Находка", lat: 42.8567, lon: 132.9211, addr: "ул. Спортивная, 3А", price: "от 2500₽" },
    { name: "Секция Самбо (МЖК)", age: [7, 17], type: "Спорт", city: "Находка", lat: 42.8489, lon: 132.9012, addr: "б-р Энтузиастов, 1", price: "Бесплатно" },
    { name: "Каратэ 'Киокушинкай'", age: [5, 18], type: "Спорт", city: "Находка", lat: 42.8290, lon: 132.9045, addr: "ул. Гагарина, 12", price: "от 3500₽" },
    { name: "Парусный клуб 'Алые паруса'", age: [9, 17], type: "Спорт", city: "Находка", lat: 42.8089, lon: 132.8745, addr: "ул. Портовая, 17", price: "Бесплатно" },
    { name: "Спортивная гимнастика", age: [4, 12], type: "Спорт", city: "Находка", lat: 42.8267, lon: 132.8890, addr: "ул. Комсомольская, 32", price: "от 2000₽" },
    { name: "Теннисный клуб 'Сириус'", age: [6, 15], type: "Спорт", city: "Находка", lat: 42.8350, lon: 132.8850, addr: "ул. Постышева, 2", price: "от 4000₽" },
    { name: "Фитнес-дети 'G-Power'", age: [10, 17], type: "Спорт", city: "Находка", lat: 42.8210, lon: 132.8950, addr: "пр-кт Мира, 3", price: "от 2800₽" },

    // --- НАУКА (Путь Разума) ---
    { name: "Центр 'IT-куб'", age: [7, 17], type: "Наука", city: "Находка", lat: 42.8421, lon: 132.8812, addr: "ул. Пирогова, 13", price: "Бесплатно" },
    { name: "Робототехника 'RoboCenter'", age: [6, 14], type: "Наука", city: "Находка", lat: 42.8312, lon: 132.8756, addr: "ул. Пограничная, 24", price: "от 3500₽" },
    { name: "Языковой центр 'Priority'", age: [4, 17], type: "Наука", city: "Находка", lat: 42.8278, lon: 132.8945, addr: "ул. Школьная, 1А", price: "от 4500₽" },
    { name: "Шахматная школа 'Гамбит'", age: [6, 17], type: "Наука", city: "Находка", lat: 42.8198, lon: 132.8812, addr: "ул. Луначарского, 10", price: "от 1500₽" },
    { name: "Программирование 'KiberOne'", age: [8, 14], type: "Наука", city: "Находка", lat: 42.8245, lon: 132.9067, addr: "пр-кт Мира, 18", price: "от 5000₽" },
    { name: "Центр экологии и туризма", age: [10, 16], type: "Наука", city: "Находка", lat: 42.8356, lon: 132.8878, addr: "ул. Малиновского, 21", price: "Бесплатно" },
    { name: "Школа скорочтения", age: [6, 12], type: "Наука", city: "Находка", lat: 42.8200, lon: 132.8900, addr: "ул. Советская, 12", price: "от 3800₽" },
    { name: "Лингвист-клуб 'Oxford'", age: [5, 17], type: "Наука", city: "Находка", lat: 42.8600, lon: 132.9300, addr: "ул. Северная, 5", price: "от 4200₽" },
    { name: "Занимательная физика", age: [12, 17], type: "Наука", city: "Находка", lat: 42.8150, lon: 132.8800, addr: "ул. Павлова, 11", price: "от 2000₽" },
    { name: "Ментальная арифметика", age: [5, 10], type: "Наука", city: "Находка", lat: 42.8400, lon: 132.9000, addr: "ул. Ленинградская, 7", price: "от 3000₽" },

    // --- ТВОРЧЕСТВО (Путь Кисти) ---
    { name: "Дом детского творчества", age: [5, 17], type: "Творчество", city: "Находка", lat: 42.8189, lon: 132.8854, addr: "ул. Верхне-Морская, 104А", price: "Бесплатно" },
    { name: "ДХШ №1 (Художка)", age: [10, 17], type: "Творчество", city: "Находка", lat: 42.8211, lon: 132.8821, addr: "ул. 25-летия Октября, 13", price: "Бесплатно" },
    { name: "Танцевальный клуб 'Реверанс'", age: [5, 15], type: "Творчество", city: "Находка", lat: 42.8155, lon: 132.8790, addr: "ул. Ленинская, 2", price: "от 2500₽" },
    { name: "ДМШ №1 (Музыкалка)", age: [6, 16], type: "Творчество", city: "Находка", lat: 42.8234, lon: 132.8845, addr: "ул. Владивостокская, 14", price: "Бесплатно" },
    { name: "Студия вокала 'Орфей'", age: [7, 17], type: "Творчество", city: "Находка", lat: 42.8412, lon: 132.8923, addr: "ул. Постышева, 29", price: "от 3000₽" },
    { name: "Арт-студия 'Зебра'", age: [5, 12], type: "Творчество", city: "Находка", lat: 42.8167, lon: 132.8998, addr: "ул. Озерная, 2", price: "от 3200₽" },
    { name: "Гончарная мастерская", age: [4, 17], type: "Творчество", city: "Находка", lat: 42.8500, lon: 132.9100, addr: "ул. Астафьева, 105", price: "от 4000₽" },
    { name: "Театральная студия 'Эхо'", age: [8, 17], type: "Творчество", city: "Находка", lat: 42.8250, lon: 132.8750, addr: "ул. Сенявина, 14", price: "от 2500₽" },
    { name: "Студия дизайна 'Креатив'", age: [12, 17], type: "Творчество", city: "Находка", lat: 42.8450, lon: 132.8950, addr: "б-р Озерный, 16", price: "от 3500₽" },
    { name: "Цирковая студия 'Счастливое детство'", age: [6, 14], type: "Творчество", city: "Находка", lat: 42.8300, lon: 132.8800, addr: "ул. Спортивная, 25", price: "Бесплатно" },
    { name: "Школа современной хореографии", age: [5, 18], type: "Творчество", city: "Находка", lat: 42.8550, lon: 132.9250, addr: "ул. Сидоренко, 1", price: "от 3000₽" }
];

let myMap;

function initMap() {
    myMap = new ymaps.Map("map", {
        center: [42.825, 132.890], 
        zoom: 12,
        controls: ['zoomControl', 'fullscreenControl']
    });
    updateUI();
}

function updateUI() {
    const age = parseInt(document.getElementById('ageInput').value);
    const type = document.getElementById('typeSelect').value;
    const city = document.getElementById('citySelect').value;

    const filtered = db.filter(item => {
        const cityMatch = item.city === city;
        const ageMatch = isNaN(age) || (age >= item.age[0] && age <= item.age[1]);
        const typeMatch = type === 'all' || item.type === type;
        return cityMatch && ageMatch && typeMatch;
    });

    renderCards(filtered);
    renderMarkers(filtered);
}

function renderCards(data) {
    const grid = document.getElementById('circlesGrid');
    document.getElementById('resultsCount').innerText = `Найдено: ${data.length}`;
    grid.innerHTML = data.map(item => `
        <div class="card">
            <div class="card-badge">${item.type}</div>
            <div class="card-content">
                <h3>${item.name}</h3>
                <p class="addr">📍 ${item.addr}</p>
                <div class="card-footer">
                    <span>👥 ${item.age[0]}-${item.age[1]} лет</span>
                    <span class="price">${item.price}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderMarkers(data) {
    myMap.geoObjects.removeAll();
    data.forEach(item => {
        const mark = new ymaps.Placemark([item.lat, item.lon], {
            balloonContent: `<strong>${item.name}</strong><br>${item.addr}`
        });
        myMap.geoObjects.add(mark);
    });
}

document.getElementById('searchBtn').addEventListener('click', updateUI);
ymaps.ready(initMap);