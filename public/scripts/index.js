window.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button");
    const img = document.querySelector(".img");

    button.addEventListener("click", () => {
        img.classList.toggle("animate")
    })
});