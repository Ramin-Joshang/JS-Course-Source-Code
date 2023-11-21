// * BOM => Browser Object Model

// * Section 1 : Window
// * Section 2 : Location
// * Section 3 : Navigator
// * Section 4 : Screen
// * Section 5 : History

// * Window

// let animal = "Cat";
// const sayHello = () => console.log("Hello World!");

// console.log(window.animal);
// window.sayHello();

// * open(url,windowName,features) method

// const url = "https://google.com";

// window.open(url, "W3s");


// const url = "http://127.0.0.1:5502/target.html";
// const options = "width=600,height=500";
// let myWindow = window.open(url, "W3s", options);

// setTimeout(() => {
//     // myWindow.resizeTo(1000, 800);
//     // window.open("https://google.com", "google");
//     // myWindow.resizeBy(-200, -200);
//     // myWindow.moveTo(500, 500)
//     // myWindow.moveBy(-100, 200)
//     myWindow.close();
// }, 3000)

// const openBtn = document.getElementById('open')
// const closeBtn = document.getElementById('close')
// const options = "width=600,height=500";
// let myWindow;
// openBtn.addEventListener("click", () => {
//     myWindow = window.open("https://w3schools.com", "W3s", options)
// })
// closeBtn.addEventListener("click", () => {
//     myWindow.close();
// })

// window.alert("hello");
// window.confirm("hello")
// window.prompt("hello")

// window.setInterval(() => {
//     console.log("Hello");
// }, 100);

// window.setTimeout(() => {
//     console.log("Hello");
// }, 3000);