"use strict";
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return Math.pow(this.lado, 2);
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function exibirAreas(figuras) {
    figuras.forEach((figura, index) => {
        console.log(`Figura ${index + 1}: Área = ${figura.calcularArea().toFixed(2)}`);
    });
}
const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(6, 3);
const figuras = [circulo, quadrado, triangulo];
exibirAreas(figuras);
