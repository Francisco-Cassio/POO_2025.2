"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TradutorEmoji {
    dicionario = {
        "amor": "💗",
        "futebol": "⚽",
        "cachorro": "🐶"
    };
    traduzir(frase) {
        let palavras = frase.split(" ");
        let novaFrase = palavras.map((palavra) => {
            if (palavra in this.dicionario) {
                palavra = this.dicionario[palavra];
            }
            return palavra;
        });
        return novaFrase.join(" ");
    }
}
let frase1 = new TradutorEmoji();
console.log(frase1.traduzir('amor do cachorro velho pelo futebol'));
