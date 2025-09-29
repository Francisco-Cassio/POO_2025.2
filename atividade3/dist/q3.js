"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function retornarNumerosArray(array) {
    let resultado = '';
    array.forEach((numero, index) => {
        resultado += numero.toString();
        if (index < array.length - 1) {
            resultado += '-';
        }
    });
    return resultado;
}
let array = [1, 2, 3, 4, 5];
console.log(retornarNumerosArray(array));
