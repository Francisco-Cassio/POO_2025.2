"use strict";
// Francisco de Cássio da Silva Mourão Júnior e Isaac de Jesus Santos
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const operacao_1 = require("./operacao");
class Conta {
    constructor(numero, saldo, limite) {
        this._id = 0;
        this._numero = numero;
        this._saldo = saldo;
        this._dataDeAbertura = new Date();
        this._operacoes = [];
        this._limite = limite;
        this._idOperacaoAtual = 1;
    }
    sacar(valor) {
        let saque;
        let saldoApos = this._saldo - valor >= -this._limite;
        if (saldoApos) {
            saque = new operacao_1.Operacao(this._idOperacaoAtual++, this, "DÉBITO", valor, `Saque na conta ${this}`);
            this._saldo -= valor;
        }
        else {
            saque = new operacao_1.Operacao(this._idOperacaoAtual++, this, "FALHA", valor, "Saque não autorizado: limite de saldo execedido");
        }
        this._operacoes.unshift(saque);
        return saque;
    }
    depositar(valor) {
        let deposito = new operacao_1.Operacao(this._idOperacaoAtual++, this, "CRÉDITO", valor, `Depósito na conta ${this}`);
        this._saldo += valor;
        this._operacoes.unshift(deposito);
        return deposito;
    }
    transferir(contaDestino, valor) {
        let transferencia = [];
        let saque = this.sacar(valor);
        if (!(saque.tipo == "FALHA")) {
            transferencia.unshift(new operacao_1.Operacao(this._idOperacaoAtual++, this, "DÉBITO", valor, `Transferência para ${contaDestino}`));
            transferencia.unshift(new operacao_1.Operacao(this._idOperacaoAtual++, contaDestino, "CRÉDITO", valor, `Transferência recebida da conta ${this}`));
            contaDestino.depositar(valor);
        }
        else {
            saque.descricao = `Falha na transferência: saque não autorizado (limite excedido)`;
            transferencia.unshift(saque);
        }
        return transferencia;
    }
    get id() {
        return this._id;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    get cliente() {
        return this._cliente;
    }
    get dataDeAbertura() {
        return this._dataDeAbertura;
    }
    get operacoes() {
        return this._operacoes;
    }
    get limite() {
        return this._limite;
    }
    set cliente(umCliente) {
        if (umCliente) {
            this._cliente = umCliente;
        }
    }
    set id(umId) {
        this._id = umId;
    }
}
exports.Conta = Conta;
