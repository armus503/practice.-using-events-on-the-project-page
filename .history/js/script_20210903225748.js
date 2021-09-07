/* Задания на урок:



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
    promoInteractiveList = document.querySelector('.promo__interactive-list'); //извлекаем элемент(родителя у списка) 

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