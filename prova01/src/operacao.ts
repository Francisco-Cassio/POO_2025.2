// Francisco de Cássio da Silva Mourão Júnior e Isaac de Jesus Santos

import { Conta } from "./conta";

class Operacao {
  private _id: number;
  private _conta: Conta;
  private _tipo: string;
  private _valor: number;
  private _descricao: string;
  private _dataHora: Date;

  constructor(
    id: number,
    conta: Conta,
    tipo: string,
    valor: number,
    descricao: string
  ) {
    this._id = id;
    this._conta = conta;
    this._tipo = tipo;
    this._valor = valor;
    this._descricao = descricao;
    this._dataHora = new Date();
  }

  get id() {
    return this._id;
  }

  get conta() {
    return this._conta;
  }

  get tipo() {
    return this._tipo;
  }

  get valor() {
    return this._valor;
  }

  get descricao() {
    return this._descricao;
  }

  get dataHora() {
    return this._dataHora;
  }

  set descricao(texto: string) {
    this._descricao = texto;
  }
}

export { Operacao };
