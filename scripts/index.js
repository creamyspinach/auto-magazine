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
const pressParagraph = press.querySelector('.paragraph');
const pressParagraphSpan = press.querySelector('.paragraph__span');
const pressLink = press.querySelector('.press__link');
const pressFirstRadio = press.querySelector('#press__pseudo-radio-1');
const pressSecondRadio = press.querySelector('#press__pseudo-radio-2');

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

const changePressInfo = (radio) => {
    switch (radio) {
        case 'first': {
            pressParagraphSpan.textContent = `Engadget:`
            pressParagraph.textContent = `VW’s e-BULLI concept shows how your classic van can become an EV.`;
            pressLink.href = 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html';
            break;
        }
        case 'second': {
            pressParagraphSpan.textContent = `Drive.ru:`;
            pressParagraph.textContent = `Вэн Volkswagen e-Bulli скрестил классику с современной техникой.`;
            pressLink.href = 'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html';
            break;
        }
    }
}

galleryBtnRight.addEventListener('click', () => changeSlide('right'));
galleryBtnLeft.addEventListener('click', () => changeSlide('left'));

pressFirstRadio.addEventListener('click', () => changePressInfo('first'));
pressSecondRadio.addEventListener('click', () => changePressInfo('second'));