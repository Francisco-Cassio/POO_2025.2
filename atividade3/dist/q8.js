"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var dobro = array.map((num) => num * 2);
console.log(dobro);
var soma = array.reduce((acumulador, num) => {
    return acumulador + num;
});
console.log(soma);
