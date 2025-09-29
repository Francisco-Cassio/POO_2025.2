function cumprimentar(nome:  string, pronome: string = "Sr"): string{
    return `${pronome} ${nome}`
}

let nome = "Cássio"
console.log(cumprimentar(nome))