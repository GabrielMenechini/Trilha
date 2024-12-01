"use strict";
class Animal {
    constructor(energiaInicial) {
        this.energia = energiaInicial;
    }
    comer() {
        console.log("O animal comeu.");
    }
    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
    alterarEnergia(valor) {
        this.energia += valor;
    }
}
class Leao extends Animal {
    constructor() {
        super(100);
    }
    comer() {
        this.alterarEnergia(-30);
        this.alterarEnergia(50);
        console.log("O leão caçou e se alimentou.");
    }
}
class Passaro extends Animal {
    constructor() {
        super(50);
    }
    comer() {
        this.alterarEnergia(20);
        console.log("O pássaro se alimentou.");
    }
}
function gerenciarAnimais(animais) {
    animais.forEach(animal => {
        animal.comer();
        animal.statusEnergia();
    });
}
const leao = new Leao();
const passaro = new Passaro();
gerenciarAnimais([leao, passaro]);
