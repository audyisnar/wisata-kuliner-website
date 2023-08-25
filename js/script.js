const header = document.querySelector("header");
let imgNew = document.getElementById("logo");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    if(window.scrollY > 0) {
        imgNew.src = 'img/logo-black.png';
    } else {
        imgNew.src = 'img/logo.png';
    }
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}