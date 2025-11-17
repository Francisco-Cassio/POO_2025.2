"use strict";
class Hora {
    constructor(hora, minutos, segundos) {
        this._hora = hora;
        this._minutos = minutos;
        this._segundos = segundos;
    }
    get hora() {
        return this._hora;
    }
    get minutos() {
        return this._minutos;
    }
    get segundos() {
        return this._segundos;
    }
    exibirHorario() {
        let horaStr = String(this.hora).padStart(2, "0");
        let minutoStr = String(this.minutos).padStart(2, "0");
        let segundoStr = String(this.segundos).padStart(2, "0");
        return `${horaStr}h:${minutoStr}m:${segundoStr}s`;
    }
}
let horario = new Hora(13, 25, 46);
console.log(horario.exibirHorario());
