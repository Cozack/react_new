// interface IAnimal {
//     action:string;
//     info():string;
// }
interface IAnimal {
    action: string;

    info(): string
}


// class Cat implements IAnimal{
//     action: string;
//
//     info(): string {
//         return `This is a Cat that can ${this.action}`;
//     }
// constructor(action:string,) {
// }
// }
//
//
// class Bird implements IAnimal{
//     action: string;
//
//     info(): string {
//         return `This is a Bird that can ${this.action}`;
//     }
//
// }
//
//
//
// class Fish implements IAnimal{
//     action: string;
//
//     info(): string {
//         return `This is a Fish that can ${this.action}`;
//     }
//
// }
// let newCat = new Cat()


class Fish implements IAnimal {
    action: string

    constructor(action: string) {
        this.action = action
    }

    info() {
        return `This animal can ${this.action}`
    }
}

let newFish = new Fish('swim')

console.log(newFish.info())

class Cat implements IAnimal {
    action: string

    constructor(action: string) {
        this.action = action
    }

    info() {
        return `This animal can ${this.action}`
    }
}

let newCat = new Cat('run')

console.log(newCat.info())

class Bird implements IAnimal {
    action: string

    constructor(action: string) {
        this.action = action
    }

    info() {
        return `This animal can ${this.action}`
    }
}

let newBird = new Bird('fly')

console.log(newBird.info())