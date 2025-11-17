// Francisco de Cássio da Silva Mourão Júnior e Isaac de Jesus Santos

import { Conta } from "./conta";

class Cliente {
  private _id: number;
  private _nome: string;
  private _cpf: string;
  private _dataNascimento: Date;
  private _contas: Conta[];

  constructor(nome: string, cpf: string, dataNascimento: Date) {
    this._id = 0;
    this._nome = nome;
    this._cpf = cpf;
    this._dataNascimento = dataNascimento;
    this._contas = [];
  }

  set id(umId: number) {
    this._id = umId;
  }

  get cpf(): string {
    return this._cpf;
  }

  get nome(): string {
    return this._nome;
  }

  get contas(): Conta[] {
    return this._contas;
  }
}

export { Cliente };
