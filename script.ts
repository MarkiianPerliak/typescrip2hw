
class Key {
    signature: number;

    constructor() {
        this.signature = Math.floor(Math.random() * 1000000);
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    door: boolean = false;
    key: Key;
    tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log("Person came in house");
        } else {
            console.log("Door is closed");
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log("The door is open");
        } else {
            console.log("Wrong key");
        }
    }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());
house.comeIn(person);
