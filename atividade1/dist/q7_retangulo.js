"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Retangulo {
    lado1 = 0;
    lado2 = 0;
    calcularPerimetro() {
        return (this.lado1 * 2) + (this.lado2 * 2);
    }
    calcularArea() {
        return this.lado1 * this.lado2;
    }
}
let retangulo1 = new Retangulo;
retangulo1.lado1 = 10;
retangulo1.lado2 = 20;
console.log(`Perímetro do Retângulo 1: ${retangulo1.calcularPerimetro()}`);
console.log(`Área do Retângulo 1: ${retangulo1.calcularArea()}`);
let retangulo2 = new Retangulo();
retangulo2.lado1 = 5;
retangulo2.lado2 = 10;
console.log(`Perímetro do Retângulo 2: ${retangulo2.calcularPerimetro()}`);
console.log(`Área do Retângulo 2: ${retangulo2.calcularArea()}`);
