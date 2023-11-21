
// function sum(x = 1, y = 2) {
//     return x + y;
// }

// const result = sum();
// console.log(result);

// const number1 = Number(prompt("Enter Number 1 : "));
// const number2 = Number(prompt("Enter Number 2 : "));

// function power(x, y) {
//     let result = 1;
//     for (let i = 1; i <= y; i++) {
//         result *= x;
//     }
//     return result;
// }

// const result = power(number1, number2);
// console.log(result);
// const result2 = power(2, 10);
// console.log(result2 * 5);


// * Arrow Function

function sayHello(name) {
    console.log("Hello " + name);
}

const sayHello1 = (name, family) => console.log("Hello " + name + " " + family);

sayHello("Ramin");
sayHello1("Ali", "Asadi");
