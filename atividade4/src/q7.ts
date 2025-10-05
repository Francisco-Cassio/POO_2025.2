class Equipamento {
  ligado: boolean;

  constructor() {
    this.ligado = false;
  }

  ligar(): void {
    if (!this.ligado) this.ligado = true;
  }

  desligar(): void {
    if (this.ligado) this.ligado = false;
  }

  inverter(): void {
    this.ligado = !this.ligado;
  }

  estaLigado(): boolean {
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