window.addEventListener("DOMContentLoaded", function() {
    const lab_7 = document.querySelector(".lab-7");

    fetch("http://lab.vntu.org/api-server/lab7.php")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            lab_7.innerHTML += `<tr>
                <td>${item.name}</td>
                <td>${item.affiliation}</td>
                <td>${item.rank}</td>
                <td>${item.location}</td>
            </tr>`
        })
    })
    .catch(e => console.error(e));
})