class TradutorEmoji {
    dicionario: { [palavra: string]: string} = {
        "amor": "💗",
        "futebol": "⚽",
        "cachorro": "🐶"
    }

    traduzir(frase: string) {
        let palavras: string[] = frase.split(" ")

        let novaFrase: string[] = palavras.map((palavra: string) => {
            if (palavra in this.dicionario) {
                palavra = this.dicionario[palavra]!;
            }
            return palavra;
        })

        return novaFrase.join(" ");
    }

}

let frase1 = new TradutorEmoji();

console.log(frase1.traduzir('amor do cachorro velho pelo futebol'))