"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    getNome() {
        return this.nome;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.1;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(funcionario => {
        const bonus = funcionario.calcularBonus();
        const salarioFinal = funcionario.getSalario() + bonus;
        console.log(`Funcionário: ${funcionario.getNome()}, Salário Base: ${funcionario.getSalario().toFixed(2)}, Bônus: ${bonus.toFixed(2)}, Salário Final: ${salarioFinal.toFixed(2)}`);
    });
}
const gerente = new Gerente("Carlos", 10000);
const operario1 = new Operario("Ana", 3000);
const operario2 = new Operario("João", 2500);
calcularSalarioComBonus([gerente, operario1, operario2]);
