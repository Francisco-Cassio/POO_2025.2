class Circulo{
    raio: number = 0;

    calcularPerimetro(){
        return 3.14 * (2 * this.raio);
    }

    calcularArea(){
        return 3.14 * (this.raio ** 2);
    }
}

let circulo = new Circulo();
circulo.raio = 25;

console.log(`Perímetro do Círculo: ${circulo.calcularPerimetro().toFixed(1)}`);
console.log(`Área do Círculo: ${circulo.calcularArea().toFixed(1)}`);