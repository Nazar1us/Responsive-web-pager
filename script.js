const closeBotton = document.querySelector(".close-nav");
const openBotton = document.querySelector(".open-nav")
const nav = document.querySelector(".nav");

closeBotton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
});

openBotton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
});


function contentReady() {
    const element = document.querySelector("footer");
    const items = document.querySelectorAll(".footer-col li a");

    console.log(element);
    console.log(items);
}