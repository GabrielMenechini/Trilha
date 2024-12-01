class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        if (compromisso.trim() !== "") {
            this.compromissos.push(compromisso);
            console.log(`Compromisso "${compromisso}" adicionado com sucesso!`);
        } else {
            console.log("Compromisso não pode ser vazio.");
        }
    }

    listarCompromissos(): void {
        console.log("Lista de compromissos:");
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso adicionado.");
        } else {
            this.compromissos.forEach((compromisso, index) => {
                console.log(`${index + 1}. ${compromisso}`);
            });
        }
    }
}


const minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("Reunião com equipe às 10h");
minhaAgenda.adicionarCompromisso("Consulta médica às 14h");
minhaAgenda.listarCompromissos(); 
