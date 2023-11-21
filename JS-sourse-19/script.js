// * String Search Method

// * indexOf, lastIndexOf

// let animals = "Dog Cat Horse Monkey Cat Dog Cat Elephant";
// let result = animals.indexOf("Cat");
// console.log(result);

// let animals = "Dog Cat Horse Monkey Cat Dog Cat Elephant";
// let result = animals.indexOf("Cat", 10);
// console.log(result);


// let animals = "Dog Cat Horse Monkey Cat Dog Cat Elephant";
// let result = animals.lastIndexOf("Cat");
// console.log(result);

// let animals = "Dog Cat Horse Monkey Cat Dog Cat Elephant";
// let result = animals.lastIndexOf("Cat", 30);
// console.log(result);

// * Search

// let animals = "Dog Cat Horse Monkey Cat Dog Cat Elephant";
// let result = animals.search("Ali")
// console.log(result);

// * Match

// let animals = "Dog Cat Horse Monkey Cat Dog Cat Elephant";
// let result = animals.match("Cat")
// console.log(result);

// * Includes

// animals = "Dog Cat Horse Monkey Cat Dog Cat Elephant";
// let result = animals.includes("Cat", 30)
// console.log(result);

// * StartWith, EndWith

// animals = "Dog Cat Horse Monkey Cat Dog Cat Elephant";
// let result = animals.startsWith("Cat", 4)
// console.log(result);

// animals = "Dog Cat Horse Monkey Cat Dog Cat Elephant";
// let result = animals.endsWith("Cat", 7)
// console.log(result);


// ***************************************************

// * Template Literals

let name = "Ramin";
let family = "Joshang";
let age = 20;

// let result = "My name is " + name + " " + family + ". I'm " + age + " years old.";
// let result = `My name is ${name} ${family} . I'm ${age} years old.`

let result = `${age + 20} Hello ${10 + 5}`

console.log(result);
