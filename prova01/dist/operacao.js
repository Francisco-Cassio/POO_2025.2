"use strict";
// Francisco de Cássio da Silva Mourão Júnior e Isaac de Jesus Santos
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operacao = void 0;
class Operacao {
    constructor(id, conta, tipo, valor, descricao) {
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
    set descricao(texto) {
        this._descricao = texto;
    }
}
exports.Operacao = Operacao;
