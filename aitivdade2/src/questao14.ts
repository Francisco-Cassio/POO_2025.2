class Numero{
    valor: number;

    constructor(valor: number){
        this.valor = valor;
    }

    ehPar(): boolean {
        if (this.valor % 2 == 0) {
            return true
        } else {
            return false
        }
    }

    ehImpar(): boolean {
        if (!this.ehPar()) {
            return true
        } else {
            return false
        }
    }
}

let numero = new Numero(10)

console.log(numero.ehPar())
console.log(numero.ehImpar())