# INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO PIAUÍ

**Curso:** ADS  
**Disciplina:** Programação Orientada a Objetos  
**Professor:** Ely Miranda  
**Aluno:** Francisco de Cássio da Silva Mourão Júnior  

---

## Exercício 04 - POO

### Questão 01
( F  Objetos são modelos para classes;

( F ) Atributos de uma classe devem ser obrigatoriamente inicializados para que as classes compilem;

( F ) Uma variável declarada dentro de um método deve ser inicializada para que a classe seja compilável;

( V ) Uma variável que seja uma classe declarada em um método é automaticamente inicializada com undefined;

( V ) Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação;

( V ) Construtores não possuem tipo de retorno e podem ou não ter parâmetros;

( V ) Uma classe pode ter várias instâncias.

---
### Questão 02
Em linguagens como *Java* e *C#*, atributos recebem valor padrão (como 0). Em *TypeScript* com verificação estrita (strictPropertyInitialization), pode dar erro se não for inicializada no construtor ou com !.  

---

### Questão 03

```ts
class Hotel {
  quantReservas: number;

  constructor(quantReservas: number) {
    this.quantReservas = quantReservas;
  }

  adicionarReserva(): void {
    this.quantReservas++;
  }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);
```
```Saída
2
```

---

### Questão 04

```ts
class Radio {
    volume : number;
    
    constructor(volume : number) {
        this.volume = volume;

    }
}

let r : Radio = new Radio();
r.volume = 10;
```

```Saída
Error: Expected 1 arguments, but got 0.
```

O construtor exige um parâmetro volume, mas foi chamado sem argumentos. Isso gera erro de compilação/execução porque falta o valor a ser passado no construtor. 

A solução seria definir valor padrão ou um construtor sem parâmetros.

---

### Questão 05

```ts
let c1: Conta = new Conta("1" ,100);
let c2: Conta = new Conta("2" ,100);
let c3: Conta;

c1 = c2;
c3 = c1;

c1.sacar(10);
c1.transferir(c2, 50);

console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
```

Todos irão imprimir 90. sacar(10) reduz o saldo para 90.transferir(c2, 50) é feito para o mesmo objeto (mesma referência), não alterando o saldo final. Como c1, c2 e c3 apontam para o mesmo objeto, todos exibem o mesmo valor. O objeto criado inicialmente por new Conta("1", 100) fica sem referência.Sem variáveis apontando para ele, torna-se inacessível e será coletado pelo garbage collector.

---
### Questão 09

Ambas as abordagens têm mérito: retornar códigos lógicos/erros permite ao chamador reagir explicitamente (boa prática para operações críticas), enquanto ignorar alterações pode simplificar quando falhas são não-críticas. Em sistemas robustos, é preferível sinalizar sucesso/falha e tratar erros (retornar boolean ou lançar exceção conforme o caso)."

---

### Questões 06, 07, 08 e 10 na pasta src!