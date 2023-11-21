class Person {
    name;
    age;
    job;
    isActive;
    cars;
}

const person1 = new Person();
const person2 = new Person();


person1.name = "Ali";
person1.age = 30;
person1.job = "Web Developer";
person1.isActive = true;
person1.cars = ['Pride', '206']

person2.name = "Ramin";
person2.age = 20;
person2.job = "Full-Stack Developer";
person2.isActive = false;
person2.cars = ['405', '206']


console.log(person1);
console.log(person2);



// console.log(person1.job);