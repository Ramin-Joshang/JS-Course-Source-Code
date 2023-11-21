class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return this.name + " can eat";
    }
}

class Bird extends Animal {
    color;
    size;
    constructor(name, age, color, size) {
        super(name, age)
        this.color = color;
        this.size = size
    }
    fly() {
        return this.name + " can fly";
    }
}

class Fish extends Animal {
    color;
    size;
    constructor(name, age, color, size) {
        super(name, age)
        this.color = color;
        this.size = size
    }

    swim() {
        return this.name + " can swim";
    }
}


const bird1 = new Bird("parrot", 10, "black", "small");
const fish1 = new Fish("goldfish", 5, "red", "small");

console.log(bird1);
console.log(fish1);

console.log(bird1.fly());
console.log(bird1.eat());
console.log(fish1.swim());
console.log(fish1.eat());