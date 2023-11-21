// console.log("JavaScript");
// console.log(5 + 10);

// let x = 20;
// let y = 20;

// if (x > y) {
//     console.log("x is larger than y");

// }
// if (x < y) {
//     console.log("x is smaller than y");
// }
// if (x == y) {
//     console.log("x is equal to y");
// }

// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");


// let name = prompt("What's your name ? ");

// if (name == "Ramin") {
//     console.log("Welcome " + name);
// } else {
//     console.log("hello " + name);
// }

// let number = Number(prompt("Enter a number :"));
// let newNumber = Number(number);
// number = Number(number);

// if (number % 2 == 0) {
//     console.log("your number is even");
// } else {
//     console.log("your number is odd");
// }

let year = Number(prompt("Enter year of your birth : "));

let age = 1402 - year;

if (age <= 0) {
    console.log("Your age is invalid");
} else {
    if (age <= 12) {
        console.log('You are kid.');
    } else if (age <= 19) {
        console.log("You are teen.");
    } else if (age <= 40) {
        console.log("You are adult.");
    } else {
        console.log("You are old.");
    }
}
