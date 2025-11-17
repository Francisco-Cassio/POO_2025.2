
class Conta {
    id: number;
    numero: string;
    saldo: number;
    cliente!: Cliente;
    dataDeAbertura: Date;

    constructor(numero: string, saldo: number) {
        this.id = 0;
        this.numero = numero;
        this.saldo = saldo;
        this.dataDeAbertura = new Date();

    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo
    }

    transferir(contaDestino: Conta, valor: number): void {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;

        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this.id = 0;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}

class Banco {
    contas: Conta[];
    clientes: Cliente[];
    idClienteAtual: number;
    idContaAtual: number;

    constructor() {
        this.contas = [];
        this.clientes = [];
        this.idClienteAtual = 1;
        this.idContaAtual = 1;
    }

    inserirConta(conta: Conta) {
        conta.id = this.idContaAtual++;

        if (!this.consultarConta(conta.numero)) {
            this.contas.push(conta);
        }
    }

    consultarConta(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    consultarContaPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    excluir(numero: string): void {
        let indiceProcurado: number =
            this.consultarContaPorIndice(numero);

        if (indiceProcurado != -1) {
            if (this.consultarConta('numero').cliente) {
                return;
            }

            for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    alterar(conta: Conta): void {
        let contaProcurada: Conta = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    inserirCliente(cliente: Cliente): void {
        cliente.id = this.idClienteAtual++

        if (!this.consultarCliente(cliente.cpf)) {
            this.clientes.push(cliente);
        }
    }

    consultarCliente(cpf: string): Cliente {
        let clienteProcurado!: Cliente;

        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }

    excluirCliente(cpf: string) {
        let indice = this.clientes.findIndex( c => c.cpf == cpf);

        if (indice >= 0 && this.clientes[indice].contas.length == 0){
                this.clientes.splice(indice,1);
        }

    }

    sacar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);
        let contaDestino: Conta = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }


    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarCliente(cpfCliente);

        if (contaProcurada && clienteProcurado &&
            !this.jaExisteContaParaCliente(clienteProcurado.cpf, contaProcurada.numero)) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
        }
    }

    jaExisteContaParaCliente(cpf: string, numero: string): boolean {
        let contaProcurada = this.consultarConta(numero);
        let clienteProcurado = this.consultarCliente(cpf);

        if (!contaProcurada && !clienteProcurado) {
            return false
        }

        if (contaProcurada.cliente == null) {
            return false;
        }

        if (contaProcurada.cliente.cpf == clienteProcurado.cpf) {
            return true;
        }

        for (let contaAssociada of clienteProcurado.contas) {
            if (contaAssociada.numero == contaProcurada.numero) {
                return true;
                break;
            }
        }

        /*
        let conta2 = this.pesquisarContaPorCPF(clienteProcurado.cpf)
        if (conta2) {
            if (conta2.numero = contaProcurada.numero) {
                return true;
            }
        }*/

        return false;
    }

    pesquisarContaPorCPF(cpf: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this.contas) {
            if (conta.cliente && conta.cliente.cpf == cpf) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    listarContasSemCliente(): Conta[] {
        let contas: Conta[] = [];

        for (let conta of this.contas) {
            if (!conta.cliente) {
                contas.push(conta);
            }
        }

        return contas;
    }

    listarContasCliente(cpf: string): Conta[] {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let contas: Conta[] = [];

        if (clienteProcurado) {
            contas = clienteProcurado.contas;
        }
        return contas;
    }

    totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let total: number = 0;
        if (clienteProcurado) {
            for (let conta of clienteProcurado.contas) {
                total += conta.saldo
            }
        }

        return total;
    }


    obterQuantidadeDeContas(): number {
        return this.contas.length;
    }


    obterTotalDinheiroDepositado(): number {
        let total: number = 0;

        for (let conta of this.contas) {
            total = total + conta.saldo;
        }
        return total;
    }


    calcularMediaSaldoContas(): number {
        return this.obterTotalDinheiroDepositado() / this.obterQuantidadeDeContas();
    }

    realizarOrdemBancaria(numeroContaOrigem: string, numerosContasDestino: string[], valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroContaOrigem);
        //TODO: validar se o saldo suporta as n transferências

        if (!contaOrigem) {
            return;
        }

        for (let numeroDestino of numerosContasDestino) {
            let contaDestino = this.consultarConta(numeroDestino);

            if (contaDestino) {
                contaOrigem.sacar(valor);
                contaDestino.depositar(valor);
            }
        }
    }

    transferirTitularidade(numeroConta: string, cpf: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarCliente(cpf);

        if (!contaProcurada && !clienteProcurado) {
            return;
        }

        if (this.jaExisteContaParaCliente(clienteProcurado.cpf, contaProcurada.numero)) {
            return;
        }

        this.associarContaCliente(contaProcurada.numero, clienteProcurado.cpf);
    }


    carregarDados() {
        let conta1: Conta = new Conta("111-1", 300);
        let conta2: Conta = new Conta("222-2", 0);
        let conta3: Conta = new Conta("333-3", 0);
        let conta4: Conta = new Conta("444-4", 0);

        this.inserirConta(conta1);
        this.inserirConta(conta2);
        this.inserirConta(conta3);
        this.inserirConta(conta4);

        let cliente1: Cliente = new Cliente("Ely", '825', new Date(1979, 6, 29));
        let cliente2: Cliente = new Cliente("Nicolas", '999', new Date(2004, 4, 24));

        this.inserirCliente(cliente1);
        this.inserirCliente(cliente2);


        this.associarContaCliente('111-1', '825');
        this.associarContaCliente('222-2', '999');
        this.associarContaCliente('333-3', '825');

    }
}


/*
banco.realizarOrdemBancaria('111-1', ['0', '222-2', '333-3', '444-4'], 100);
banco.transferirTitularidade('111-1', '999');
banco.obterQuantidadeDeContas();

banco.contas = [];
banco.clientes = [];
conta1.saldo = -111110000000000000;
*/
export { Conta, Cliente, Banco }