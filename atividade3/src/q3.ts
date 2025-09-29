function retornarNumerosArray(array: number[]): string {
    let resultado: string = ''
    array.forEach((numero, index) => {
        resultado += numero.toString();

        if(index < array.length - 1){
            resultado += '-'
        }
    });

    return resultado;
}

let array: number[] = [1, 2, 3, 4, 5];

console.log(retornarNumerosArray(array))