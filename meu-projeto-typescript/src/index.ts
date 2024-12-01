abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    getSalario(): number {
        return this.salario;
    }

    getNome(): string {
        return this.nome;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.1;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const bonus = funcionario.calcularBonus();
        const salarioFinal = funcionario.getSalario() + bonus;
        console.log(
            `Funcionário: ${funcionario.getNome()}, Salário Base: ${funcionario.getSalario().toFixed(2)}, Bônus: ${bonus.toFixed(2)}, Salário Final: ${salarioFinal.toFixed(2)}`
        );
    });
}

const gerente = new Gerente("Carlos", 10000);
const operario1 = new Operario("Ana", 3000);
const operario2 = new Operario("João", 2500);

calcularSalarioComBonus([gerente, operario1, operario2]);
