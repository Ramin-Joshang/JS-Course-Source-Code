// * API => Application Programming Interface

// * Fetch
// * AJAX => Asynchronous Javascript And XML

const btn = document.getElementById("btn");
const title = document.getElementById("title");
const body = document.getElementById("body");
const box = document.getElementById("box");



// * XMl - JSON


btn.addEventListener("click", () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: 1,
        })
    }
    fetch(url, option).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log("ERROR", error.message))
})

