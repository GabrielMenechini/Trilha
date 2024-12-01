class Animal {
    private energia: number;

    constructor(energiaInicial: number) {
        this.energia = energiaInicial;
    }

    comer(): void {
        console.log("O animal comeu.");
    }

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }

    protected alterarEnergia(valor: number): void {
        this.energia += valor;
    }
}

class Leao extends Animal {
    constructor() {
        super(100);
    }

    comer(): void {
        this.alterarEnergia(-30);
        this.alterarEnergia(50);
        console.log("O leão caçou e se alimentou.");
    }
}

class Passaro extends Animal {
    constructor() {
        super(50);
    }

    comer(): void {
        this.alterarEnergia(20);
        console.log("O pássaro se alimentou.");
    }
}

function gerenciarAnimais(animais: Animal[]): void {
    animais.forEach(animal => {
        animal.comer();
        animal.statusEnergia();
    });
}

const leao = new Leao();
const passaro = new Passaro();
gerenciarAnimais([leao, passaro]);
