document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.querySelector(".navButton");
    const nav = document.querySelector("nav");

    navButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

document.getElementById("emailButton").addEventListener("click", function() {
    window.location.href = "mailto:max.berglund2004@gmail.com";
});