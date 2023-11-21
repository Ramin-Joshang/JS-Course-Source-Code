// * DOM => Document Object Model

// const demo = document.getElementById("demo");

// demo.innerHTML = "JS"
// demo.href = "https://google.com";
// console.log(demo.attributes.href);

// demo.style.color = "blue";
// demo.style.fontSize = "10px";
// demo.style.backgroundColor = "pink"

// demo.setAttribute("class", "test");

// const link = document.getElementById("link");
// console.log(link);

// link.setAttribute("href", "https://google.com")

// console.log(demo);


const colors = ["blue", "red", "green", "purple", "pink", "gray", "brown", "orange", "aqua"];
const demo = document.getElementById("demo");
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    demo.style.color = colors[randomNumber];
}, 100)