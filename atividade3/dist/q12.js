"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JogarParImpar {
    numeroJogador;
    numeroMaquina;
    constructor(numeroJogador) {
        this.numeroJogador = numeroJogador;
    }
    sortearMaquina() {
        let valor = Math.floor(Math.random() * 10) + 1;
        return valor;
    }
    resultado() {
        return ((this.sortearMaquina() + this.numeroJogador) % 2 == 0) ? "Par" : "Ímpar";
    }
    vencedor() {
        if (this.resultado() == 'Par') {
            return 'Jogador';
        }
        else {
            return 'Máquina';
        }
    }
}
let jogada = new JogarParImpar(5);
console.log(jogada.resultado());
console.log(jogada.vencedor());
