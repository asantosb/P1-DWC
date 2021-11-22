/*

Ejercicio 1
Crear la clase Jugador que permita crear nuevos jugadores a partir del nombre, la ocupación, 
los puntos de vida y la facción. 
Todos los nuevos jugadores tendrán un máximo de puntos de vida de 100 
(es una propiedad fija, no se define por parámetro).

Crear el método toString() dentro de Jugador para facilitar la comprobación de los datos
de los jugadores. toString mostrará toda la información de un jugador en una sola línea.

Finalmente crear una lista de jugadores con dos jugadores de ejemplo (invéntate los datos).

*/

class jugador{
    constructor(nombre, ocupacion, puntosVida, faccion){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = puntosVida;
        this.maxPuntosVida = 100;
        this.faccion = faccion;
    }

    toString(){
        console.log("El nombre del jugador es "+this.nombre+", su ocupación es "+this.ocupacion+", tiene "+this.puntosVida+" puntos de vida de "+this.maxPuntosVida+" y es de la facción "+this.faccion+".");
    }
}

let jugador1 = new jugador("Álvaro", "leñador",80, "alianza");
let jugador2 = new jugador("Pepe","tabernero",50, "saqueador");
jugador1.toString();
jugador2.toString();
