const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

const input = document.querySelector('.url__input');
const button = document.querySelector('.bookmark__button');
const list = document.querySelector('.bookmark__list');

function createBookmark() {
    list.innerHTML = '';
    bookmarks.forEach((bookmark) => {
        list.innerHTML += `<li class="bookmark__item">
        <a href="${bookmark}" target="_blank" class="bookmark__url">${bookmark}</a><button class="delete__button">видалити</button>
        </li>`;
    });
}

button.addEventListener('click', addBoomkark);

function addBoomkark() {
    const bookmarkUrl = input.value;
    if (bookmarkUrl) {
        bookmarks.push(bookmarkUrl);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        createBookmark();
        input.value = ''; 
    }
}

createBookmark();

// const deleteButton = document.querySelector('.delete__button');

// deleteButton.addEventListener('click', deleteBookmark);





function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const links = document.querySelectorAll('.bookmark__url');

links.forEach(link => {
    link.style.backgroundColor = getRandomLightColor();
});


// ВСЕ ЩО ВНИЗУ, Я НЕ САМ ПИСАВ, ТО ШАБЛОН ПРОСТО ДЛЯ КРАСИ ЩОБ НЕ ВИЛIЗАЛИ ТЕМНI КОЛЬОРИ


function getLuminance(r, g, b) {
    const a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getRandomLightColor() {
    let r, g, b, luminance;
    do {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        luminance = getLuminance(r, g, b);
    } while (luminance < 0.5);
    return `rgb(${r}, ${g}, ${b})`;
}