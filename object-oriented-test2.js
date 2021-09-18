// 'use strict'

// function Person(initialName){
//     let name = initialName;

//     this.getName = function() {
//         return name;
//     }

//     this.setName = function (newName) {
//         name = newName;
//     }
// }

// const p = new Person('Rafael');

// p.setName('Rafael Pavanello');
// console.log(p.getName());
// console.log(p);

//With class

class Person {
    #name = '';

    constructor(inicitalName) {
        this.#name = inicitalName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const p = new Person("Rafael");

console.log(p);

p.setName("Rafael Novo");
console.log(p.getName());