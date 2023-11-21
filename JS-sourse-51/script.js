// * synchronous

// console.log("1");
// for (let i = 0; i <= 10000; i++) {
//     console.log("hello");
// }
// console.log("2");

// console.log("3");

setTimeout(() => {
    console.log("0");
}, 0);

console.log("1");

setTimeout(() => {
    console.log("2");
}, 5000)

console.log("3");

for (let i = 0; i <= 1000; i++) {
    console.log("hello");
}

