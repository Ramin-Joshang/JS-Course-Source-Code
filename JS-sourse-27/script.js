// * Sort Array

// const names = ["Mohammad", "Hamed", "Ali", "Sara", "Bahman"];
// const animals = ["cat", "Tiger", "Monkey", "ant"];

// console.log(animals);

// animals.sort();

// console.log(animals);

// * Reverse Array

// const cars = ["BMW", "Volvo", "Audi", "Tesla", "Benz"];
// cars.sort();
// cars.reverse();

// console.log(cars);

const numbers = [10, 5, 15, 30, 2, 100, 40];
// numbers.sort();

// console.log(numbers);
// 20 5

// * Negative Zero Positive
// * If the result is positive, b is sorted before a.
// * If the result is negative, a is sorted before b.
// * If the result is 0. nothing.

numbers.sort(function (a, b) { return a - b });
// numbers.reverse();

console.log(numbers);

