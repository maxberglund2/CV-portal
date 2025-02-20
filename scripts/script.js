document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.querySelector(".navButton");
    const nav = document.querySelector("nav");

    navButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});