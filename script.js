let menuBtn = document.getElementById("menu-button");
menuBtn.addEventListener("click", mobileMenu);

let line1 = document.getElementsByClassName("line-1");
let line2 = document.getElementsByClassName("line-2");
let line3 = document.getElementsByClassName("line-3");

let menuList = document.getElementById("menu-list");

function mobileMenu() {
    line1[0].classList.toggle("line-1-active");
    line2[0].classList.toggle("line-2-active");
    line3[0].classList.toggle("line-3-active");
    menuList.classList.toggle("nav-ul-menu-show");
}