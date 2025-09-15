class Produto{
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(percentual: number): number {
        return this.preco - (this.preco * (percentual/100));
    }

    emitirOrcamento(percentualDeDesconto: number): string {
        const novoPreco = this.aplicarDesconto(percentualDeDesconto);

        const formatadorMoeda = {
            style: 'currency',
            currency: 'BRL'
        } as const;
        
        const precoOriginalFormatado = this.preco.toLocaleString('pt-BR', formatadorMoeda);
        const novoPrecoFormatado = novoPreco.toLocaleString('pt-BR', formatadorMoeda);

        const linha1 = `Produto: ${this.nome}, Preço: ${precoOriginalFormatado}`;
        const linha2 = `Desconto: ${percentualDeDesconto}% → Novo preço: ${novoPrecoFormatado}`;

        return `${linha1}\n${linha2}`;
    }
}

let produto = new Produto('Camisa', 100)

console.log(produto.emitirOrcamento(10))