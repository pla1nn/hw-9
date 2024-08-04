const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

const input = document.querySelector('.url__input');
const button = document.querySelector('.bookmark__button');
const list = document.querySelector('.bookmark__list');

function createBookmark() {
    list.innerHTML = '';
    bookmarks.forEach((bookmark, index) => {
        list.innerHTML += `<li class="bookmark__item">
            <a href="${bookmark}" target="_blank" class="bookmark__url">${bookmark}</a>
            <button data-index="${index}" class="delete__button">видалити</button>
        </li>`;
    });

    document.querySelectorAll('.delete__button').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteBookmark(index);
        });
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

function deleteBookmark(i) {
    bookmarks.splice(i, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    createBookmark();
}

createBookmark();