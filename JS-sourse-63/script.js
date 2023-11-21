class Person {
    static name = "John";
    age;
    job;
    isActive;
    cars;

    static eat() {
        console.log("user is eating.");
    }

    sleep() {
        console.log("user is sleeping.");
    }

    getName() {
        return this.name;
    }

    getInfo() {
        return {
            name: this.name,
            age: this.age,
            job: this.job,
        }
    }

    setName(name) {
        this.name = name;
    }

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


person1.setName("Reza");

console.log(person1);
console.log(person2);

// person1.eat();
// person2.eat();
person1.sleep();
person2.sleep();

console.log(person1.getName());
console.log(person2.getName());

console.log(person1.getInfo());
console.log(person2.getInfo());

Person.eat();
console.log(Person.name);
// console.log(person1.job);