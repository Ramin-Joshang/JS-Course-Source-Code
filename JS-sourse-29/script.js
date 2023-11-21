// const person = {
//     name: "Ramin",
//     age: 20,
//     city: "Qazvin",
//     friend: {
//         name: "Amir",
//         age: 30,
//         city: "Tehran"
//     }
// }

// console.log(person.name);
// console.log(person["city"]);

// const x = "name";

// console.log(person[x]);

// for (let x in person) {
//     console.log(person[x]);
// }

// console.log(person.friend.name);
// console.log(person['friend']['city']);

// const person = {
//     name: "Ramin",
//     family: "Joshang",
//     age: 20,
//     fullName: function () {
//         return this.name + " " + this.family;
//     },
//     sayHello: function () {
//         console.log("Hello");
//     }

// }

// console.log(person.fullName());
// person.sayHello();

// console.log(this);
// function test() {
//     console.log(this);
// }
// test();
// window.alert("hello")


// * Display Object

// const car = {
//     name: "Tesla",
//     model: 2023,
//     color: "gray"
// }

// console.log(car);

// for (const key in car) {
//     console.log(car[key]);
// }

// const result = Object.values(car);

// console.log(result);
// for (const item of result) {
//     console.log(item);
// }

// const result = JSON.stringify(car)

// console.log(result);