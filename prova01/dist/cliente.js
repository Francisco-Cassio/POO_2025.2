"use strict";
// Francisco de Cássio da Silva Mourão Júnior e Isaac de Jesus Santos
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, cpf, dataNascimento) {
        this._id = 0;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._contas = [];
    }
    set id(umId) {
        this._id = umId;
    }
    get cpf() {
        return this._cpf;
    }
    get nome() {
        return this._nome;
    }
    get contas() {
        return this._contas;
    }
}
exports.Cliente = Cliente;
