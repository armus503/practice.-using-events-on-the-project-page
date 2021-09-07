/* Задания на урок:

1) Реализовать функционал: после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => { //для того, чтобы скрипт загрузился только после того как загрузится DOM-дерево используется "DOMContentLoaded"

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const avd = document.querySelectorAll('.promo__adv img'), //вызов списка с рекламой
        poster = document.querySelector('.promo__bg'), //получаем элемент для блока с фоном
        genre = poster.querySelector('.promo__genre'), //извлекаем элемент из блока с фоном
        movieList = document.querySelector('.promo__interactive-list'), //извлекаем элемент(родителя у списка) 
        addForm = document.querySelector('form.add'), //получаем элемент отправки формы
        addInput = addForm.querySelector('.adding__input'), //получаем на ввод название фильма
        checkbox = addForm.querySelector('[type="checkbox"]'); //получаем чекбокс "Сделать его любимым?"
    //buttonFormUser = formForUser.querySelector('button'), //получаем кнопку отправки формы

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); //отмена стандартной перезагрузки страницы при нажатии кнопки "отправить"

        let newFilm = addInput.value; //создаем новую переменную - фильм, введенный пользователем
        const favorite = checkbox.checked; //новая переменная для получения значения при нажатии/не нажатии на чекбокс (checked -свойство для получения булинового значения)

        movieDB.movies.push(newFilm); //добавляем новый фильм, введенный пользователем в массив с фильмами
        sortArr(movieDB.movies); //сортируем фильмы из массива по алфавиту
    });

    const deleteAdv = (arr) => { //создаем функцию для удаления рекламы, в качестве аргумента передаем некий массив, который опеределятся по месту
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => { //действия по изменениям так же помещаем в функцию
        genre.textContent = 'ДРАМА'; //заменяем текст в документе
        poster.style.backgroundImage = 'url("/img/bg.jpg")'; //заменяем фоновую картинку
    };

    const sortArr = (arr) => { //функция для сортировки некоего массива
        arr.sort();
    };

    function createMovieList(films, parent) { //Функция для получения и добавления фильмов в список
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
        });
    }

    deleteAdv(avd); //вызываем функцию, аргумент - массив(список), который нужно удалить
    makeChanges(); //вызов функции для внесения изменений
    sortArr(movieDB.movies); //сортировка фильмов по алфавиту
    createMovieList(movieDB.movies, movieList); //вызываем нашу функцию
});