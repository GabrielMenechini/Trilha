
class Pagamento {
    processar(): void {
        throw new Error("O método 'processar' deve ser implementado.");
    }
}


class PagamentoCartao extends Pagamento {
    numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    validarCartao(): boolean {
        
        return /^\d{16}$/.test(this.numeroCartao);
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log("Pagamento com cartão processado com sucesso.");
        } else {
            console.log("Número do cartão inválido.");
        }
    }
}


class PagamentoBoleto extends Pagamento {
    processar(): void {
        const codigoBoleto = Math.random().toString().slice(2, 14); 
        console.log(`Boleto gerado: ${codigoBoleto}`);
    }
}


function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento, index) => {
        console.log(`Processando pagamento ${index + 1}:`);
        pagamento.processar();
    });
}


const pagamentoCartao = new PagamentoCartao("1234567812345678"); 
const pagamentoCartaoInvalido = new PagamentoCartao("1234"); 
const pagamentoBoleto = new PagamentoBoleto();

const pagamentos: Pagamento[] = [pagamentoCartao, pagamentoCartaoInvalido, pagamentoBoleto];
processarPagamentos(pagamentos);
