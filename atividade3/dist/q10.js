"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Autenticacao {
    usuario;
    senha;
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
    }
    validar() {
        return this.usuario == 'admin' && this.senha == '1234';
    }
}
let pessoa1 = new Autenticacao('admininisttrador', '1234');
let pessoa2 = new Autenticacao('admin', '1234');
console.log(pessoa1.validar());
console.log(pessoa2.validar());
