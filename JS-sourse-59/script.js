// * API => Application Programming Interface

// * Fetch
// * AJAX => Asynchronous Javascript And XML

const btn = document.getElementById("btn");
const box = document.getElementById("box");

// * XMl - JSON

const url = "https://jsonplaceholder.typicode.com/users";

btn.addEventListener("click", async () => {
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         data.map(user => {
    //             box.innerHTML += user.name + "<br/>" +
    //                 user.username + "<br/>" +
    //                 user.email + "<hr/>"
    //         })
    //     })
    //     .catch(error => {
    //         console.log("ERROR : ", error.message);
    //     })

    const response = await fetch(url);
    const data = await response.json();
    data.map(user => {
        box.innerHTML += user.name + "<br/>" +
            user.username + "<br/>" +
            user.email + "<hr/>"
    })
})

