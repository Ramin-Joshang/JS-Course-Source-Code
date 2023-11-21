// * DOM => Document Object Model

// * Attribute Method

// const fullName = document.getElementById("name");
// const link = document.getElementById("link");
// console.log(fullName);

// fullName.setAttribute("class", "name");
// console.log(fullName.getAttribute("class"));
// const result = fullName.hasAttribute("class");
// link.href = "https://google.com";
// fullName.removeAttribute('placeholder');


// console.log(link);

// * Replace and Remove Element

// const list = document.getElementById("list");

// const li = document.createElement("li");
// li.innerHTML = "Home Page";

// list.replaceChild(li, list.firstElementChild)

// list.removeChild(list.lastElementChild)

// list.removeChild(list.children[1])
// list.removeChild(list.children[2])

// console.log(list);

// const title = document.getElementById("title");
// const btn = document.getElementById("btn");

// console.log(title, btn);

// btn.addEventListener("click", () => {
//     title.remove();
// })

// const list = document.getElementById("list").children;

// for (const item of list) {
//     item.addEventListener("click", () => {
//         item.remove();
//     })
// }

// console.log(list);


const list = document.getElementById("list").children;
const btn = document.getElementById("btn");
console.log(list, btn);

btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * list.length);
    if (list.length > 0) {
        console.log(list);
        list[randomNumber].remove();
    } else {
        alert("هیچ آیتم دیگری وجود ندارد");
    }
})