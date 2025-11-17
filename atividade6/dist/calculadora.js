"use strict";
class Calculadora {
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
    subtracao() {
        return this._operando1 - this._operando2;
    }
    multiplicacao() {
        return this._operando1 * this._operando2;
    }
    divisao() {
        return this._operando1 / this._operando2;
    }
}
let calculadora = new Calculadora(4, 7);
console.log(calculadora.multiplicacao());
