class Hora {
  private _hora: number;
  private _minutos: number;
  private _segundos: number;

  constructor(hora: number, minutos: number, segundos: number) {
    this._hora = hora;
    this._minutos = minutos;
    this._segundos = segundos;
  }

  get hora(): number {
    return this._hora;
  }

  get minutos(): number {
    return this._minutos;
  }

  get segundos(): number {
    return this._segundos;
  }

  public exibirHorario(): string {
    let horaStr = String(this.hora).padStart(2, "0");
    let minutoStr = String(this.minutos).padStart(2, "0");
    let segundoStr = String(this.segundos).padStart(2, "0");
    return `${horaStr}h:${minutoStr}m:${segundoStr}s`;
  }
}

let horario: Hora = new Hora(13, 25, 46);
console.log(horario.exibirHorario());
