'use strict';

class Animal {
    constructor() {
        this.qtdPatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdPatas = 4;
        this.morder = morde;
    }

    latir() {
        console.log('Au Au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
pitbull.latir();
console.log(pitbull);