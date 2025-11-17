"use strict";
// Francisco de Cássio da Silva Mourão Júnior e Isaac de Jesus Santos
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const cliente_1 = require("./cliente");
const conta_1 = require("./conta");
class Banco {
    constructor() {
        this._contas = [];
        this._clientes = [];
        this._operacoes = [];
        this._idClienteAtual = 1;
        this._idContaAtual = 1;
    }
    inserirConta(conta) {
        conta.id = this._idContaAtual++;
        if (!this.consultarConta(conta.numero)) {
            this._contas.push(conta);
        }
    }
    consultarConta(numero) {
        let contaProcurada;
        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }
    consultarContaPorIndice(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    excluirConta(numero) {
        let indiceProcurado = this.consultarContaPorIndice(numero);
        if (indiceProcurado != -1) {
            if (this.consultarConta("numero").cliente) {
                return;
            }
            for (let i = indiceProcurado; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }
    alterar(conta) {
        let contaProcurada = this.consultarConta(conta.numero);
        if (contaProcurada) {
            contaProcurada = conta;
        }
    }
    inserirCliente(cliente) {
        cliente.id = this._idClienteAtual++;
        if (!this.consultarCliente(cliente.cpf)) {
            this._clientes.push(cliente);
        }
    }
    consultarCliente(cpf) {
        let clienteProcurado;
        for (let cliente of this._clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }
    excluirCliente(cpf) {
        let indice = this._clientes.findIndex((c) => c.cpf == cpf);
        if (indice >= 0 && this._clientes[indice].contas.length == 0) {
            this._clientes.splice(indice, 1);
        }
    }
    sacar(numero, valor) {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            let saque = contaProcurada.sacar(valor);
            this._operacoes.unshift(saque);
        }
    }
    depositar(numero, valor) {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            let deposito = contaProcurada.depositar(valor);
            this._operacoes.unshift(deposito);
        }
    }
    transferir(numeroOrigem, numeroDestino, valor) {
        let contaOrigem = this.consultarConta(numeroOrigem);
        let contaDestino = this.consultarConta(numeroDestino);
        if (contaOrigem && contaDestino) {
            let transferencia = contaOrigem.transferir(contaDestino, valor);
            for (let operacao of transferencia) {
                this._operacoes.unshift(operacao);
            }
        }
    }
    consultarExtratoConta(numeroConta) {
        let contaProcurada = this.consultarConta(numeroConta);
        return contaProcurada.operacoes;
    }
    consultarExtratoCliente(cpf) {
        let clienteProcurado = this.consultarCliente(cpf);
        let contasCliente = clienteProcurado.contas;
        let operacoesCliente = [];
        for (let contas of contasCliente) {
            for (let operacao of contas.operacoes) {
                operacoesCliente.unshift(operacao);
            }
        }
        return operacoesCliente;
    }
    consultarExtratoGeral() {
        return this._operacoes;
    }
    associarContaCliente(numeroConta, cpfCliente) {
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);
        if (contaProcurada &&
            clienteProcurado &&
            !this.jaExisteContaParaCliente(clienteProcurado.cpf, contaProcurada.numero)) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
        }
    }
    jaExisteContaParaCliente(cpf, numero) {
        let contaProcurada = this.consultarConta(numero);
        let clienteProcurado = this.consultarCliente(cpf);
        if (!contaProcurada && !clienteProcurado) {
            return false;
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
        return false;
    }
    pesquisarContaPorCPF(cpf) {
        let contaProcurada;
        for (let conta of this._contas) {
            if (conta.cliente && conta.cliente.cpf == cpf) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }
    listarContasSemCliente() {
        let contas = [];
        for (let conta of this._contas) {
            if (!conta.cliente) {
                contas.push(conta);
            }
        }
        return contas;
    }
    listarContasCliente(cpf) {
        let clienteProcurado = this.consultarCliente(cpf);
        let contas = [];
        if (clienteProcurado) {
            contas = clienteProcurado.contas;
        }
        return contas;
    }
    totalizarSaldoCliente(cpf) {
        let clienteProcurado = this.consultarCliente(cpf);
        let total = 0;
        if (clienteProcurado) {
            for (let conta of clienteProcurado.contas) {
                total += conta.saldo;
            }
        }
        return total;
    }
    obterQuantidadeDeContas() {
        return this._contas.length;
    }
    obterTotalDinheiroDepositado() {
        let total = 0;
        for (let conta of this._contas) {
            total = total + conta.saldo;
        }
        return total;
    }
    calcularMediaSaldoContas() {
        return this.obterTotalDinheiroDepositado() / this.obterQuantidadeDeContas();
    }
    realizarOrdemBancaria(numeroContaOrigem, numerosContasDestino, valor) {
        let contaOrigem = this.consultarConta(numeroContaOrigem);
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
    transferirTitularidade(numeroConta, cpf) {
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpf);
        if (!contaProcurada && !clienteProcurado) {
            return;
        }
        if (this.jaExisteContaParaCliente(clienteProcurado.cpf, contaProcurada.numero)) {
            return;
        }
        this.associarContaCliente(contaProcurada.numero, clienteProcurado.cpf);
    }
    carregarDados() {
        let conta1 = new conta_1.Conta("111-1", 300, 100);
        let conta2 = new conta_1.Conta("222-2", 0, 200);
        let conta3 = new conta_1.Conta("333-3", 0, 300);
        let conta4 = new conta_1.Conta("444-4", 0, 400);
        this.inserirConta(conta1);
        this.inserirConta(conta2);
        this.inserirConta(conta3);
        this.inserirConta(conta4);
        let cliente1 = new cliente_1.Cliente("Ely", "825", new Date(1979, 6, 29));
        let cliente2 = new cliente_1.Cliente("Nicolas", "999", new Date(2004, 4, 24));
        this.inserirCliente(cliente1);
        this.inserirCliente(cliente2);
        this.associarContaCliente("111-1", "825");
        this.associarContaCliente("222-2", "999");
        this.associarContaCliente("333-3", "825");
    }
    get operacoes() {
        return this._operacoes;
    }
}
exports.Banco = Banco;
