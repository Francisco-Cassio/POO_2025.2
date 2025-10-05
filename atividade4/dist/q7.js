"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Equipamento {
    ligado;
    constructor() {
        this.ligado = false;
    }
    ligar() {
        if (!this.ligado)
            this.ligado = true;
    }
    desligar() {
        if (this.ligado)
            this.ligado = false;
    }
    inverter() {
        this.ligado = !this.ligado;
    }
    estaLigado() {
        return this.ligado;
    }
}
const e = new Equipamento();
console.log(e.estaLigado());
e.ligar();
console.log(e.estaLigado());
e.ligar();
console.log(e.estaLigado());
e.inverter();
console.log(e.estaLigado());
e.desligar();
console.log(e.estaLigado());
e.desligar();
console.log(e.estaLigado());
