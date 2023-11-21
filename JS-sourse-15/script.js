// * For, While, do While, For in, For of

// * For

// for (let i = 1; i <= 15; i++) {
//     console.log(i, "Hello");
// }

// for (let i = 0; i <= 100; i += 10) {
//     console.log(i);
// }

// for (let i = 100; i >= 10; i -= 10) {
//     console.log(i);
// }


// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even.");
//     } else {
//         console.log(i + " is odd.");
//     }
// }

let number1 = Number(prompt("Enter first number: "));
let number2 = Number(prompt("Enter second number: "));
let result = 1;
for (let i = 1; i <= number2; i++) {
    result *= number1;
}
console.log(result);