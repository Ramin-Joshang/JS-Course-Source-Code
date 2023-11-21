class Person {
    name;
    age;
    job;
    city;
    constructor(name, age, job, city) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.city = city;
    }
}

const person1 = new Person("Ramin", 20, "Programmer", "Tehran");
const person2 = new Person("Mahdi", 25, "Student", "Rasht");

console.log(person1);
console.log(person2);