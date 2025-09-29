"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorteio {
    array;
    constructor() {
        this.array = [];
    }
    adicionar(nome) {
        this.array.push(nome);
    }
}
let nomes = new Sorteio();
nomes.adicionar('Jorge');
nomes.adicionar('Pedro');
nomes.adicionar('Cássio');
nomes.adicionar('Loki');
nomes.adicionar('Cotoco');
let nome_sorteado = nomes.array[Math.floor(Math.random() * nomes.array.length)];
console.log(nome_sorteado);
