"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numero;
    saldo;
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= 0)
            return false;
        if (this.saldo - valor < 0)
            return false;
        this.saldo -= valor;
        return true;
    }
    depositar(valor) {
        if (valor > 0)
            this.saldo += valor;
    }
    transferir(destino, valor) {
        if (valor <= 0)
            return false;
        const ok = this.sacar(valor);
        if (!ok)
            return false;
        destino.depositar(valor);
        return true;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
const c1 = new Conta("1", 100);
const c2 = new Conta("2", 100);
console.log(c1.consultarSaldo(), c2.consultarSaldo());
console.log(c1.sacar(50));
console.log(c1.consultarSaldo());
console.log(c1.transferir(c2, 30));
console.log(c1.consultarSaldo(), c2.consultarSaldo());
console.log(c1.transferir(c2, 1000));
console.log(c1.consultarSaldo(), c2.consultarSaldo());
