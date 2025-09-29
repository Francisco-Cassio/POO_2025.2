"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sorteio(nome) {
    let valor = Math.floor(Math.random() * nome.length);
    return nome[valor];
}
let nomes = ['Jorge', 'Cotoco', 'Debug Console da Silva'];
console.log(sorteio(nomes));
