// * DOM => Document Object Model

// const h1 = document.getElementById("test");
// setTimeout(() => {
// h1.innerHTML = "Hello World!";
// }, 5000)

// h1.innerHTML = "Hello <br> World";

// h1.innerHTML = "Welcome to <a href='https://google.com'>Java Script</a> course"

// console.log(h1);

// * Find HTML Elements

// const h1=document.getElementById("test");
// const elements = document.getElementsByClassName("test");

// elements[0].innerHTML = "Hello";
// elements[1].innerHTML = 'CSS';
// elements[2].innerHTML = "Bootstrap";

// console.log(elements)

const elements = document.getElementsByTagName("li");

// elements[4].innerHTML = "Angular";
let i = 1;
for (const element of elements) {
    let elementContent = element.innerHTML;
    element.innerHTML = i + ". " + elementContent;
    i++;
}

// console.log(elements);
