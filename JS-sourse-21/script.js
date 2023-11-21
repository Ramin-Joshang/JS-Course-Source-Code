// function sayHello() {
//     console.log("Hello user");
// }
// console.log("JavaScript");
// sayHello();
// sayHello();

// function sayHello() {
//     console.log("hello");
// }

// sayHello();

// function sayHi() {
//     return "hi";
// }

// console.log(sayHi());

// const result = sayHi();

// console.log(result);


function getName() {
    const fullName = prompt("What's your fullName : ");
    const name = fullName.split(" ");
    return name[0];
}
const result = getName();
console.log("Hello " + result);