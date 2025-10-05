"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Triangulo {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ehTriangulo() {
        return Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c &&
            Math.abs(this.a - this.c) < this.b && this.b < this.a + this.c &&
            Math.abs(this.a - this.b) < this.c && this.c < this.a + this.b;
    }
    ehIsoceles() {
        if (!this.ehTriangulo())
            return false;
        return (this.a === this.b) || (this.a === this.c) || (this.b === this.c);
    }
    ehEquilatero() {
        if (!this.ehTriangulo())
            return false;
        return this.a === this.b && this.b === this.c;
    }
    ehEscaleno() {
        if (!this.ehTriangulo())
            return false;
        return this.a !== this.b && this.a !== this.c && this.b !== this.c;
    }
}
const t1 = new Triangulo(3, 4, 5);
const t2 = new Triangulo(2, 2, 3);
const t3 = new Triangulo(5, 5, 5);
console.log(t1.ehTriangulo(), t1.ehEscaleno(), t1.ehIsoceles(), t1.ehEquilatero());
console.log(t2.ehTriangulo(), t2.ehEscaleno(), t2.ehIsoceles(), t2.ehEquilatero());
console.log(t3.ehTriangulo(), t3.ehEscaleno(), t3.ehIsoceles(), t3.ehEquilatero());
