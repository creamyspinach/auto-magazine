const header = document.querySelector('.header');
const headerLogo = header.querySelector('.logo');
const headerNav = header.querySelector('.header__nav');
const burger = header.querySelector('.burger');
const burgerTopLine = burger.querySelector('.burger__line_top');
const burgerMiddleLine = burger.querySelector('.burger__line_middle');
const burgerBottomLine = burger.querySelector('.burger__line_bottom');
const gallery = document.querySelector('.gallery');
const gallerySlider = gallery.querySelector('.gallery__slider');
const gallerySlideCounter = gallery.querySelectorAll('img');
const galleryBtnLeft = gallery.querySelector('.gallery__control_left');
const galleryBtnRight = gallery.querySelector('.gallery__control_right');
const press = document.querySelector('.press');
const pressParagraph = press.querySelector('.press__paragraph');
const pressParagraphSpan = press.querySelector('.press__span');
const pressLink = press.querySelector('.press__link');
const pressFirstRadio = press.querySelector('#press__pseudo-radio-1');
const pressSecondRadio = press.querySelector('#press__pseudo-radio-2');
const subscribe = document.querySelector('.subscribe');
const subscribeSubmitBtn = subscribe.querySelector('.subscribe__button');

// анимация бургер-меню
function headerBurgerChanges () {
    burgerTopLine.classList.toggle('burger__line_top_active');
    burgerMiddleLine.classList.toggle('burger__line_middle_active');
    burgerBottomLine.classList.toggle('burger__line_bottom_active');
    headerLogo.classList.toggle('logo_disabled');
    headerNav.classList.toggle('header__nav_active');
}

burger.addEventListener('click', headerBurgerChanges);

// анимация слайдера
let slideIdx = 0;
const changeSlide = (direction) => {
    switch (direction) {
        case 'right': {
            slideIdx++;
            if (slideIdx >= gallerySlideCounter.length) slideIdx = 0;
            gallerySlider.style.transform = `translateX(-${slideIdx * 100}%)`;
            break;
        }
        case 'left': {
            slideIdx--;
            if (slideIdx < 0) slideIdx = gallerySlideCounter.length - 1;
            gallerySlider.style.transform = `translateX(-${slideIdx * 100}%)`;
            break;
        }
    }
}

//изменение информации в секции пресса
const changePressInfo = (radio) => {
    switch (radio) {
        case 'first': {
            pressParagraphSpan.textContent = `Top Gear:`
            pressParagraph.textContent = `The VW e-BULLI Concept is an incredible retro EV van`;
            pressLink.href = 'https://www.topgear.com/car-news/electric/vw-e-bulli-concept-incredible-retro-ev-van';
            break;
        }
        case 'second': {
            pressParagraphSpan.textContent = `NAPLETON NEWS:`;
            pressParagraph.textContent = `A HIGH-TECH CLASSIC VOLKSWAGEN`;
            pressLink.href = 'https://www.napleton.news/volkswagen/the-volkswagen-e-bulli-concept/';
            break;
        }
    }
}



galleryBtnRight.addEventListener('click', () => changeSlide('right'));
galleryBtnLeft.addEventListener('click', () => changeSlide('left'));

pressFirstRadio.addEventListener('click', () => changePressInfo('first'));
pressSecondRadio.addEventListener('click', () => changePressInfo('second'));

//изменение value в кнопке в форме подписки
subscribe.addEventListener('submit', function(evt){
    evt.preventDefault();
    subscribeSubmitBtn.value = 'ГОТОВО!';
});
