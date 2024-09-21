window.addEventListener("DOMContentLoaded", function() {
    if(!localStorage.getItem("_SESSION")){
        window.location.href = "/login";
    }

    const user = JSON.parse(localStorage.getItem("_SESSION"));
    const wrapper = document.querySelector(".wrapper");
    const form = document.querySelector(".form");
    const messageInput = document.querySelector("#message");

    const getReviews = () => {
        fetch("/reviews-api")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json();
        })
        .then(({ reviews }) => {
            wrapper.innerHTML = "";
            
            reviews.forEach(review => {
                wrapper.innerHTML += `<div>
                    ${review.author}: ${review.message}
                </div>`
            })
        })
        .catch(e => console.log(e))
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        fetch("/reviews-api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author: user.name,
                message: messageInput.value
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            console.log("Response from server:", data);
        })
        .catch(e => console.error(e))
        .finally(() => {
            console.log("f");
            getReviews();
        });
    });

    getReviews();
})