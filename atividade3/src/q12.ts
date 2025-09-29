class JogarParImpar {
    numeroJogador: number;
    numeroMaquina: number;

    constructor(numeroJogador: number){
        this.numeroJogador = numeroJogador;
    }

    sortearMaquina(): number {
        let valor = Math.floor(Math.random() * 10) + 1
        return valor;
    }

    resultado(): string {
        return ((this.sortearMaquina() + this.numeroJogador) % 2 == 0) ? "Par" : "Ímpar";
    }

    vencedor(): string {
        if(this.resultado() == 'Par'){
            return 'Jogador';
        } else {
            return 'Máquina';
        }
    }
}

let jogada = new JogarParImpar(5);

console.log(jogada.resultado())
console.log(jogada.vencedor())
