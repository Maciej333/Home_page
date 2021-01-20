let largeMenu = document.querySelector("#large-menu");
let burgerMenuIcon = document.querySelector("#burger-menu-icon");
let burgerMenu = document.querySelector("#burger-menu");
let xBurgerMenu = document.querySelector("#x-burger-menu");

let sectionAbout = document.querySelector("#about");
let sectionProjectsGallery = document.querySelector("#projects-gallery");

let blackMenuIconClass = "black-menu-icon";
let whiteMenuIconClass = "white-menu-icon";

checkSreenSize();

window.addEventListener('resize', checkSreenSize);
window.addEventListener('scroll', changeBurgerIconColor);
burgerMenuIcon.addEventListener('click', showBurgerMenu);
xBurgerMenu.addEventListener('click', closeBurgerMenu);

let nav = burgerMenu.children[0];

for (let child of nav.children) {
    if (child.tagName === "A") {
        child.addEventListener("click", closeBurgerMenu)
    }
}

function checkSreenSize() {
    if (window.innerWidth <= 576) {
        largeMenu.hidden = true;
    } else if (largeMenu.hidden) {
        largeMenu.hidden = false;
    }
}

function changeBurgerIconColor() {
    let blackColorHeight = sectionAbout.offsetTop - burgerMenuIcon.offsetHeight;
    let whiteColorHeight = sectionProjectsGallery.offsetTop - burgerMenuIcon.offsetHeight;
    let position = window.pageYOffset + 25 + burgerMenuIcon.offsetHeight;

    if (position >= blackColorHeight && position < whiteColorHeight) {
        if (burgerMenuIcon.classList.contains(whiteMenuIconClass)) {
            burgerMenuIcon.classList.replace(whiteMenuIconClass, blackMenuIconClass);
        }
    } else {
        if (burgerMenuIcon.classList.contains(blackMenuIconClass)) {
            burgerMenuIcon.classList.replace(blackMenuIconClass, whiteMenuIconClass);
        }
    }
}

function showBurgerMenu() {
    burgerMenu.hidden = false;
}

function closeBurgerMenu() {
    burgerMenu.hidden = true;
}