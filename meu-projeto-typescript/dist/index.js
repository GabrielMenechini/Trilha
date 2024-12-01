"use strict";
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    converterParaFahrenheit() {
        return (this.valor * 9 / 5) + 32;
    }
    converterParaKelvin() {
        return this.valor + 273.15;
    }
    exibirConversoes() {
        console.log(`Temperatura em Celsius: ${this.valor.toFixed(2)} °C`);
        console.log(`Temperatura em Fahrenheit: ${this.converterParaFahrenheit().toFixed(2)} °F`);
        console.log(`Temperatura em Kelvin: ${this.converterParaKelvin().toFixed(2)} K`);
    }
}
const temperatura = new Temperatura(25);
temperatura.exibirConversoes();
