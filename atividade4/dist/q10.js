"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogador {
    forca;
    nivel;
    pontos;
    constructor(forca, nivel, pontos) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    estaVivo() {
        return this.pontos > 0;
    }
    atacar(outro) {
        if (!outro.estaVivo())
            return;
        const dano = this.calcularAtaque();
        outro.pontos -= dano;
    }
}
const j1 = new Jogador(5, 2, 100);
const j2 = new Jogador(4, 3, 100);
j1.atacar(j2);
j2.atacar(j1);
console.log("j1 pontos:", j1.pontos);
console.log("j2 pontos:", j2.pontos);
if (j1.pontos > j2.pontos)
    console.log("j1 tem mais pontos");
else if (j2.pontos > j1.pontos)
    console.log("j2 tem mais pontos");
else
    console.log("empatados");
