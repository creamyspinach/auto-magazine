const header = document.querySelector('.header');
const headerLogo = header.querySelector('.logo');
const headerNav = header.querySelector('.header__nav');
const burger = header.querySelector('.burger');
const burgerTopLine = burger.querySelector('.burger__line_top');
const burgerMiddleLine = burger.querySelector('.burger__line_middle');
const burgerBottomLine = burger.querySelector('.burger__line_bottom');

function headerBurgerChanges () {
    burgerTopLine.classList.toggle('burger__line_top_active');
    burgerMiddleLine.classList.toggle('burger__line_middle_active');
    burgerBottomLine.classList.toggle('burger__line_bottom_active');
    headerLogo.classList.toggle('logo_disabled');
    headerNav.classList.toggle('header__nav_active');
}

burger.addEventListener('click', headerBurgerChanges);