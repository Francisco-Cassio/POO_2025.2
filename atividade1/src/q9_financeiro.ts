class SituacaoFinanceira{
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    calcularSaldo(){
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacaoFinanceira1 = new SituacaoFinanceira();

situacaoFinanceira1.valorCreditos = 50;
situacaoFinanceira1.valorDebitos = 30;

console.log(`Saldo: R$ ${situacaoFinanceira1.calcularSaldo().toFixed(2)}`)

let situacaoFinanceira2 = new SituacaoFinanceira();

situacaoFinanceira2.valorCreditos = 60;
situacaoFinanceira2.valorDebitos = 45;

console.log(`Saldo: R$ ${situacaoFinanceira2.calcularSaldo().toFixed(2)}`)