# INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO PIAUÍ

**Curso:** ADS  
**Disciplina:** Programação Orientada a Objetos  
**Professor:** Ely Miranda  
**Aluno:** Francisco de Cássio da Silva Mourão Júnior  

---

## Exercício 02 - POO

## Questão 01
Na tipagem estática, antes do programa ser executado, um compilador analisa o código para garantir que todas as variáveis e funções estão sendo usadas com os tipos corretos. Se tentar atribuir um valor de um tipo incompatível a uma variável, o programa nem sequer compilará.

Na tipagem dinâmica, a variável não tem um tipo fixo, mas o valor que ela armazena sim. O interpretador só verifica se uma operação é válida para o tipo do valor no momento exato em que a linha de código é executada.

## Questão 02
O principal problema é que erros de tipo só são descobertos em tempo de execução. Ou seja, um bug pode passar despercebido durante o desenvolvimento e testes, e só se manifestar quando o sistema já está em produção. Esses tipos de erros podem ser difíceis de rastrear e podem causar falhas inesperadas no programa, tornando o código menos confiável e mais difícil de manter em projetos grandes.

## Questão 03
Um exemplo comum que ocorre em JavaScript com o operador +. Ele pode ser usado tanto para adição matemática quanto para concatenação de strings. A linguagem decide o que fazer em tempo de execução, o que pode levar a resultados inesperados.

Se somar o valor de uma string e com um número, o JavaScript opta pela concatenação em vez da soma. Em uma linguagem com tipagem estática, a tentativa de somar uma string com um number geraria um erro em tempo de compilação, prevenindo o bug.


## Questão 04
Em TypeScript, o compilador acusará um erro antes mesmo de o código ser executado.

```TS
let idade: number;

idade = 30;
idade = "trinta";   
```

```Saida
Error: Type 'string' is not assignable to type 'number'.
```

O compilador do TypeScript imediatamente sinalizará um erro na linha idade = "trinta".

O programa não será compilado com sucesso, impedindo que esse erro chegue ao usuário final.

## Questão 05
Neste caso, o TypeScript usa um recurso chamado inferência de tipo.

```TS
let nome = "Ely";
```

```Saida
Ely
```
O tipo inferido é string.

Mesmo sem declararmos let nome: string;, o TypeScript analisa o valor inicial atribuído à variável, reconhece que é uma string e trata a variável nome como se ela tivesse sido declarada como tal. Qualquer tentativa futura de atribuir um númer
o ou outro tipo a ela resultará em um erro de compilação.

## Questão 06
A linguagem C é estática porque os tipos são verificados no momento da compilação. No entanto, ela é considerada fraca porque oferece mecanismos para "burlar" o sistema de tipos, principalmente através do uso de ponteiros.

Podemos alocar memória para um inteiro (int) e depois, usando ponteiros, tratar essa mesma memória como se fosse um caractere (char).

```C
#include <stdio.h>

int main() {
    int numero = 1025;
    
    char* ponteiro_char = (char*)&numero;

    printf("O primeiro byte do inteiro 1025 é: %d\n", *ponteiro_char);

    return 0;
}
```
```Saida
O primeiro byte do inteiro 1025 é: 1
```

O (char*)&numero força o compilador a tratar o endereço de um inteiro como o endereço de um caractere. Isso permite acessar e manipular os bytes individuais de um inteiro, quebrando a abstração do tipo int. Uma linguagem de tipagem forte não permitiria essa conversão implícita ou perigosa sem mecanismos de segurança mais explícitos.

## Questão 07
Não, pois isso se deve à definição do próprio tipo number.

Em JavaScript e, por consequência, em TypeScript, não existe uma distinção entre tipos para números inteiros e números de ponto flutuante. Ambos são representados pelo mesmo e único tipo: number.

```TS
let idade: number = 30;
let altura: number = 1.75;
```

Ambas as variáveis são do mesmo tipo: number. A tipagem continua sendo forte porque ela não permitirá que você atribua um valor de um tipo diferente sem uma conversão explícita. A capacidade de um tipo abranger diferentes formatos de um mesmo conceito é uma característica do design do tipo, e não uma fraqueza no sistema de tipagem.

## Questão 08

```JS
let a = 10;
let b = "5";
console.log(a + b);
```
```Saida
105
```
O operador + em JavaScript serve tanto para adição matemática quanto para concatenação de strings. Quando um dos operandos é uma string, ele prioriza a concatenação. Para fazer isso, ele converte o número 10 para a string "10" e em seguida concatena com a string "5", resultando em "105".

```JS
let x = true;
let y = 2;

console.log(x + y);
```
```Saida
3
```
Para que a operação seja possível, o JavaScript converte o booleano true para seu valor numérico correspondente, que é 1. A operação se torna 1 + 2, resultando no número 3.

```JS
console.log(0 == false);
console.log("" == false);
console.log(null == undefined);
```
```Saida
true
true
true
```
O operador de igualdade não-estrita (==) compara dois valores após realizar coerções de tipo necessárias.

0 == false: O booleano false é convertido para o número 0, então a comparação se torna 0 == 0, que é true.

"" == false: A string vazia "" também é convertida para 0, assim como false. A comparação novamente se torna 0 == 0, que é true.

null == undefined: Há uma regra específica na especificação do JavaScript que diz que null e undefined são iguais um ao outro quando comparados com ==.

## Questão 09

```TS
let x = true;
let y = 2;

console.log(x + y);
```
```Saida
Error: Operator '+' cannot be applied to types 'boolean' and 'number'.
``` 
O código não compila, pois o TypeScript proíbe uma operação entre tipos que não fazem sentido juntos em um contexto aritmético. 

Um booleano não é um número para o sistema de tipos do TypeScript. O desenvolvedor teria que escrever um código explícito, o que torna a lógica muito mais clara e menos propensa a bugs.

```TS
console.log(0 == false);
console.log("" == false);
console.log(null == undefined);
```
```Saida
Error: This comparison appears to be unintentional because the types 'number' and 'boolean' have no overlap.
``` 
Para o TypeScript, um valor nunca pode ser um número e um booleano ao mesmo tempo, ele considera a comparação um erro de lógica e te avisa para prevenir bugs.

A mensagem mostra que o próprio compilador do TypeScript já é avançado o suficiente para pegar esse tipo de erro, que em JavaScript passaria despercebido e poderia causar bugs.

## Questões 10, 11, 12, 13, 14 na pasta src.

## Questão 16
```TS
function teste() {
  let x: number = 10;
  console.log("Início do programa");
  if (x > 5) {
    console.log("x é maior que 5");
    // Tudo abaixo desse return nunca será executado
    return;
    console.log("Essa linha é inatingível!"); // <-- Código inatingível
  }
  console.log("Fim do programa");
}
```
"allowUnreachableCode": false

O TypeScript exibirá um aviso no terminal: Unreachable code detected.

Este é o comportamento padrão e o mais recomendado. Ele te alerta sobre possíveis erros de lógica no seu código. Ver um aviso de código inatingível geralmente significa que você colocou uma instrução return, throw ou break no lugar errado.

"allowUnreachableCode": true:

O código compila sem nenhum aviso.

O TypeScript simplesmente ignora o fato de que a linha console.log("Essa linha é inatingível!"); nunca será executada e compila o código normalmente. A linha inatingível é omitida do arquivo .js final.

## Questão 17
```TS
let valor; // Tipo implícito "any" 
valor = 10; 
valor = "teste"; 
console.log(valor); 

let outroValor: number; // Tipo declarado 
outroValor = 20; 
console.log(outroValor); 
```
"noImplicitAny": false

O código compila com sucesso.

A variável valor recebe o tipo any implicitamente porque não foi inicializada nem teve seu tipo declarado. Isso anula muitas das vantagens do TypeScript, pois permite que você atribua qualquer tipo de valor a ela sem nenhuma verificação, o que pode levar a erros em tempo de execução.

"noImplicitAny": true

O compilador gera um erro na linha let valor.

```Saida
Error: Variable 'valor' implicitly has an 'any' type.
```

Este é o comportamento mais seguro. O TypeScript te força a ser explícito sobre o tipo da variável. Para corrigir o erro, você precisaria declarar o tipo que valor pode ter,.

## Questão 18
```TS
let nome: string; 
nome = "Ely"; 
console.log("Nome:", nome);
```
"strictNullChecks": false:

O código compila com sucesso.

Neste modo, null e undefined são considerados valores válidos para qualquer tipo. Isso significa que a variável nome do tipo string poderia receber null ou undefined, o que poderia causar erro.

"strictNullChecks": true

O compilador gera um erro se você tentar usar a variável nome antes de atribuir um valor a ela.

```Saida
Erro: Variable 'nome' is used before being assigned.
```

Este modo torna o código muito mais seguro. null e undefined se tornam tipos próprios e não podem ser atribuídos a uma variável do tipo string, a menos que você declare isso explicitamente.

## Questão 19
Classe TypeScript
```TS
class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual: number) {
    return this.preco * (1 - percentual / 100);
  }
}
```
Transpilado para JS com ```"target": "ES3"```
```JS
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.aplicarDesconto = function (percentual) {
        return this.preco * (1 - percentual / 100);
    };
    return Produto;
}());
```

### Alterações
class -> function: O ES3 não possui a palavra-chave class. O TypeScript converte a classe em uma função construtora.

let/const -> var: Todas as declarações de variáveis com let e const seriam convertidas para var, que era a única forma de declarar variáveis no ES3.

Métodos de Classe -> prototype: Métodos como aplicarDesconto não ficam dentro da definição da "classe". Em vez disso, eles são adicionados ao prototype da função construtora. Este era o padrão de "orientação a objetos" no JavaScript antigo.

IIFE: O código é envolvido em uma (function () { ... }()), uma Expressão de Função Imediatamente Invocada (IIFE), para criar um escopo fechado e evitar a poluição do escopo global.