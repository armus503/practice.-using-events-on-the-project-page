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

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const avdImg = document.querySelectorAll('.promo__adv img'), //вызов списка с рекламой
    promoBg = document.querySelector('.promo__bg'), //получаем элемент для блока с фоном
    promoGenre = promoBg.querySelector('.promo__genre'), //извлекаем элемент из блока с фоном
    promoInteractiveList = document.querySelector('.promo__interactive-list'), //извлекаем элемент(родителя у списка) 
    formForUser = document.querySelector('.add'), //получаем элемент отправки формы
    buttonFormUser = formForUser.querySelector('button'), //получаем кнопку отправки формы
    inputFilmName = formForUser.querySelector('.adding__input'); //получаем на ввод название фильма


avdImg.forEach(item => { //перебор элементов списка и удаление по одному
    item.remove(); //вместо стрелочной Ф можно использовать безимянную
});
promoGenre.textContent = 'ДРАМА'; //заменяем текст в документе
promoBg.style.backgroundImage = 'url("/img/bg.jpg")'; //заменяем фоновую картинку
promoInteractiveList.innerHTML = ""; //в элемент записываем пустой массив(удаляем предыдущий список)
movieDB.movies.sort(); //сортируем список по алфавиту

movieDB.movies.forEach((film, i) => { //список берем из базы данных movieDB и при помощи св-ва innerHtml добавляем динамически элементы друг за другом
    promoInteractiveList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `; //элементы формируется динамически i- номер элемента по порядку, film - фильм из списка 
}); // перечисление элементов идет при помощи св-ва forEach

buttonFormUser.addEventListener('click', () => {
    alert(formForUser.textContent = inputFilmName.value);
});