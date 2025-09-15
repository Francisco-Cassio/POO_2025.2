"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    aplicarDesconto(percentual) {
        return this.preco - (this.preco * (percentual / 100));
    }
    emitirOrcamento(percentualDeDesconto) {
        const novoPreco = this.aplicarDesconto(percentualDeDesconto);
        const formatadorMoeda = {
            style: 'currency',
            currency: 'BRL'
        };
        const precoOriginalFormatado = this.preco.toLocaleString('pt-BR', formatadorMoeda);
        const novoPrecoFormatado = novoPreco.toLocaleString('pt-BR', formatadorMoeda);
        const linha1 = `Produto: ${this.nome}, Preço: ${precoOriginalFormatado}`;
        const linha2 = `Desconto: ${percentualDeDesconto}% → Novo preço: ${novoPrecoFormatado}`;
        return `${linha1}\n${linha2}`;
    }
}
let produto = new Produto('Camisa', 100);
console.log(produto.emitirOrcamento(10));
