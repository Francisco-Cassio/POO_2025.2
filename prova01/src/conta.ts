// Francisco de Cássio da Silva Mourão Júnior e Isaac de Jesus Santos

import { Cliente } from "./cliente";
import { Operacao } from "./operacao";

class Conta {
  private _id: number;
  private _numero: string;
  private _saldo: number;
  private _cliente!: Cliente;
  private _dataDeAbertura: Date;
  private _operacoes: Operacao[];
  private _limite: number;
  private _idOperacaoAtual: number;

  constructor(numero: string, saldo: number, limite: number) {
    this._id = 0;
    this._numero = numero;
    this._saldo = saldo;
    this._dataDeAbertura = new Date();
    this._operacoes = [];
    this._limite = limite;
    this._idOperacaoAtual = 1;
  }

  sacar(valor: number): Operacao {
    let saque: Operacao;
    let saldoApos = this._saldo - valor >= -this._limite;

    if (saldoApos) {
      saque = new Operacao(
        this._idOperacaoAtual++,
        this,
        "DÉBITO",
        valor,
        `Saque na conta ${this}`
      );
      this._saldo -= valor;
    } else {
      saque = new Operacao(
        this._idOperacaoAtual++,
        this,
        "FALHA",
        valor,
        "Saque não autorizado: limite de saldo execedido"
      );
    }

    this._operacoes.unshift(saque);
    return saque;
  }

  depositar(valor: number): Operacao {
    let deposito = new Operacao(
      this._idOperacaoAtual++,
      this,
      "CRÉDITO",
      valor,
      `Depósito na conta ${this}`
    );

    this._saldo += valor;
    this._operacoes.unshift(deposito);
    return deposito;
  }

  transferir(contaDestino: Conta, valor: number): Operacao[] {
    let transferencia: Operacao[] = [];
    let saque = this.sacar(valor);

    if (!(saque.tipo == "FALHA")) {
      transferencia.unshift(
        new Operacao(
          this._idOperacaoAtual++,
          this,
          "DÉBITO",
          valor,
          `Transferência para ${contaDestino}`
        )
      );

      transferencia.unshift(
        new Operacao(
          this._idOperacaoAtual++,
          contaDestino,
          "CRÉDITO",
          valor,
          `Transferência recebida da conta ${this}`
        )
      );
      contaDestino.depositar(valor);
    } else {
      saque.descricao = `Falha na transferência: saque não autorizado (limite excedido)`;
      transferencia.unshift(saque);
    }

    return transferencia;
  }

  get id(): number {
    return this._id;
  }

  get numero(): string {
    return this._numero;
  }

  get saldo(): number {
    return this._saldo;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  get dataDeAbertura(): Date {
    return this._dataDeAbertura;
  }

  get operacoes(): Operacao[] {
    return this._operacoes;
  }

  get limite(): number {
    return this._limite;
  }

  set cliente(umCliente: Cliente) {
    if (umCliente) {
      this._cliente = umCliente;
    }
  }

  set id(umId: number) {
    this._id = umId;
  }
}

export { Conta };
