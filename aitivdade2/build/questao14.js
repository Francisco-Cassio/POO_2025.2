"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Numero {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    ehPar() {
        if (this.valor % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    ehImpar() {
        if (!this.ehPar()) {
            return true;
        }
        else {
            return false;
        }
    }
}
let numero = new Numero(10);
console.log(numero.ehPar());
console.log(numero.ehImpar());
