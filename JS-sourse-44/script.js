// * DOM => Document Object Model

// * Event Object

// const btn = document.getElementById("btn");

// btn.addEventListener("click", (e) => {
//     e.target.remove();
// })

// const text = document.getElementById("text");

// text.addEventListener("keydown", e => {
//     console.log(e);
// })


const form = document.getElementById("login");

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("the from Submitted");
})