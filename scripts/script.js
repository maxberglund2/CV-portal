document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.querySelector(".navButton");
    const nav = document.querySelector("nav");

    navButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Easter egg script
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <p>Yes, my name is Max and now what?</p>
            <span class="close">&times;</span>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = modal.querySelector(".close");
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    let inputSequence = "";
    const secretCode = "max";

    document.addEventListener("keydown", function (event) {
        inputSequence += event.key;
        if (inputSequence.length > secretCode.length) {
            inputSequence = inputSequence.slice(-secretCode.length);
        }
        if (inputSequence === secretCode) {
            modal.style.display = "flex";
        }
    });

    const easterEggButton = document.querySelector('.easterEggButton');
    if (easterEggButton) {
        easterEggButton.addEventListener('click', () => {
            document.querySelector('main').classList.toggle('invert-colors');
        });
    }
});