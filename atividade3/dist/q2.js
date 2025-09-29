"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cumprimentar(nome, pronome = "Sr") {
    return `${pronome} ${nome}`;
}
let nome = "Cássio";
console.log(cumprimentar(nome));
