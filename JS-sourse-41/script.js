// * DOM => Document Object Model

// * Class List

// const demo = document.getElementById("result");
// const addBtn = document.getElementById("add-btn");
// const removeBtn = document.getElementById("remove-btn");
// const toggle = document.getElementById("toggle-btn");
// console.log(toggle);

// addBtn.addEventListener("click", () => {
//     demo.classList.add("title");
//     demo.classList.add("item");
// })

// removeBtn.addEventListener("click", () => {
//     demo.classList.remove("title");
//     demo.classList.remove("item");
// })

// toggle.addEventListener("click", () => {
//     demo.classList.toggle("title");
//     demo.classList.toggle("item");
// })


// console.log(demo);

const header = document.getElementById("dropdown-header");
const menu = document.getElementById("dropdown-menu");

header.addEventListener("click", () => {
    menu.classList.toggle("active");
})