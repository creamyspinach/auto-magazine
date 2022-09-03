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
// анимация бургер-меню
function headerBurgerChanges () {
    burgerTopLine.classList.toggle('burger__line_top_active');
    burgerMiddleLine.classList.toggle('burger__line_middle_active');
    burgerBottomLine.classList.toggle('burger__line_bottom_active');
    headerLogo.classList.toggle('logo_disabled');
    headerNav.classList.toggle('header__nav_active');
}

burger.addEventListener('click', headerBurgerChanges);
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

galleryBtnRight.addEventListener('click', () => changeSlide('right'));
galleryBtnLeft.addEventListener('click', () => changeSlide('left'));