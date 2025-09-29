"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibir(...valores) {
    let espaco = '';
    for (let valor in valores) {
        espaco += (valores[valor] + ' ');
    }
    // valores.forEach(valor => {
    //     espaco += (valor + ' ');
    // })
    return espaco;
}
console.log(exibir('a', 'b'));
console.log(exibir('a', 'b', 'c'));
console.log(exibir('a', 'b', 'c', 'd'));
