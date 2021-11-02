/*

Ejercicio 3
Nos proporcionan el siguiente constructor de tipo Consumible. 
Quieren poder generar consumibles de diferentes tipos, 
por lo que cada uno podrá tener efectos completamente diferentes.

class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
 
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}
 
let manzana = new Consumible('Manzana');
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}
 
ricardo.consumir(manzana);

El tipo de objeto PlantaCurativa debe permitir generar objetos que recuperen 
la cantidad de puntos de vida definida por parámetro del constructor 
y respetando el máximo de puntos de vida del jugador:

class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        // Implementar
    }
 
    consumir(jugador) {
        // Implementar
    }
}
Terminar de implementar PlantaCurativa.


*/

class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
 
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}

let manzana = new Consumible('Manzana');
let alvaro = {
    nombre: 'Alvaro',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}
 
class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }
 
    consumir(jugador) {
            if(alvaro.puntosVida < alvaro.maxPuntosVida){
                let resultado = this.poder + alvaro.puntosVida;
                if(resultado> alvaro.maxPuntosVida){
                    alvaro.puntosVida = alvaro.maxPuntosVida;
                }
            }
            console.log(jugador.nombre+" consume " + this.nombre + ". Le da "+this.poder+ " de vida y tiene un total de " +jugador.puntosVida+" puntos de vida.");
    }
}

let plantaCurativa1 = new PlantaCurativa("Hierbabuena",5);
alvaro.consumir(plantaCurativa1);