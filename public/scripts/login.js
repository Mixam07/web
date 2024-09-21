window.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("_SESSION")){
        window.location.href = "/reviews";
    }

    const form = document.querySelector(".form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = {
            name: nameInput.value,
            email: emailInput.value
        }

        localStorage.setItem("_SESSION", JSON.stringify(data));
        window.location.href = "/reviews";
    })
});