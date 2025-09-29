function sorteio(nome: string[]) {
    let valor = Math.floor(Math.random() * nome.length);
    return nome[valor];
}

let nomes: string[] = ['Jorge', 'Cotoco', 'Debug Console da Silva'];
console.log(sorteio(nomes))