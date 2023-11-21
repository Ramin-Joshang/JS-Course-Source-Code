

// const animals = ["Cat", "Dog"];

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i]);
// }

// for (let animal of animals) {
//     console.log(animal);
// }

// console.log(animals.length);

const scores = [];

const number = Number(prompt("How many scores do you have : "));

for (let i = 0; i < number; i++) {
    const score = Number(prompt(`Enter score of lesson ${i + 1} : `));
    scores[i] = score;
}
let sum = 0;
for (const score of scores) {
    sum += score;
}
console.log("Result : " + sum / number);




