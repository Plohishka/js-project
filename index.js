'use strict';



class CollectionAnimals {
    constructor(animals) {
        this.animals = [];
    }

    #add(animal) {
         this.animals.push(animal);
    }

    #createAnimal(animal) {
        switch(animal) {
            case 'cow': return collection.#add(new Cow);
            case 'goat': return collection.#add(new Goat);
            case 'cat': return collection.#add(new Cat);
            case 'dog': return collection.#add(new Dog);
            default: throw new TypeError('Unknown type of animal!');
        }
    }

    createAmountAnimal(name, animal, child, childOfChild) {
        if (child === undefined) {
            child = 0;
        }

        if (childOfChild === undefined) {
            childOfChild = 0;
        }
       
        for (let i = 1; i <= (animal + child + childOfChild); i++) {
            this.#createAnimal(name);
        }
    }

    countTotal() {
        return this.animals.length;
    }

}

const collection = new CollectionAnimals;


class Cow {

}

class Goat {

}

class Cat {

}

class Dog {

}


collection.createAmountAnimal('cow', 2, 3, 5);
collection.createAmountAnimal('goat', 2, 4);
collection.createAmountAnimal('cat', 3);
collection.createAmountAnimal('dog', 2);

console.log(collection);
console.log(collection.countTotal());








