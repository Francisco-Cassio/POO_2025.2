function exibir(...valores: string[]): string{
    let espaco: string = ''
    for(let valor in valores){
        espaco += (valores[valor] + ' ')
    }
    
    // valores.forEach(valor => {
    //     espaco += (valor + ' ');
    // })

    return espaco;
}

console.log(exibir('a', 'b'));
console.log(exibir('a', 'b', 'c'));
console.log(exibir('a', 'b', 'c', 'd'));