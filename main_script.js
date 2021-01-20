let porfolioVerticalLine = document.querySelector("#vertical-line");
let projectsGallery = document.querySelector("#projects-gallery");
let porfolioH1 = document.querySelector("#porfolio-h1");
let dotsCollecion = document.querySelectorAll(".dot");
let tableSkill = document.querySelector("table");

let articleImagesToMove = document.querySelectorAll(".to-move");

let projectsNameCollection = document.querySelectorAll(".project-name");
let articleCollection = document.querySelectorAll("article");

let fontBigger = "font-bigger";
let fontSmaller = "font-smaller";

countHeightOfVerticalLineAndDots();
changeToMobileFontSize();
changeImgPosition();

window.addEventListener('resize', countHeightOfVerticalLineAndDots);
window.addEventListener('resize', changeToMobileFontSize);
window.addEventListener('resize', changeImgPosition);

function changeImgPosition() {
    if (window.innerWidth < 992) {
        for (let image of articleImagesToMove) {
            if (image.previousSibling) {
                let parent = image.parentNode;
                parent.removeChild(image);
                parent.prepend(image);
            }
        }
    } else {
        for (let image of articleImagesToMove) {
            if (!image.previousSibling) {
                let parent = image.parentNode;
                parent.removeChild(image);
                parent.append(image);
            }
        }
    }
}

function countHeightOfVerticalLineAndDots() {
    porfolioVerticalLine.style.height = projectsGallery.offsetHeight - porfolioH1.offsetHeight + "px";
    for (let dot of dotsCollecion) {
        dot.style.left = (document.body.clientWidth - dot.clientWidth) / 2 + "px";
    }
}

function changeToMobileFontSize() {
    if (window.innerWidth <= 350) {
        if (tableSkill.classList.contains("fs-4")) {
            tableSkill.classList.replace("fs-4", "fs-6");
        }
    } else {
        if (tableSkill.classList.contains("fs-6")) {
            tableSkill.classList.replace("fs-6", "fs-4");
        }
    }
}

AOS.init({
    delay: 300,
    duration: 1200
});