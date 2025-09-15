"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
let pessoa = new Pessoa('Ely', 46);
pessoa.apresentar();
