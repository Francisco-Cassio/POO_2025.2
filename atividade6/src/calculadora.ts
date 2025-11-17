class Calculadora {
  private _operando1: number;
  private _operando2: number;

  constructor(operando1: number, operando2: number) {
    this._operando1 = operando1;
    this._operando2 = operando2;
  }

  public somar(): number {
    return this._operando1 + this._operando2;
  }

  public subtracao(): number {
    return this._operando1 - this._operando2;
  }

  public multiplicacao(): number {
    return this._operando1 * this._operando2;
  }

  public divisao(): number {
    return this._operando1 / this._operando2;
  }
}

let calculadora: Calculadora = new Calculadora(4, 7);

console.log(calculadora.multiplicacao());
