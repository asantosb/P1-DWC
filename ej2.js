/*
Práctica 1

La empresa Entretenimientos del Sur S.L. está trabajando en un juego de zombies 
y nos han pedido que continuemos con su desarrollo. 
Por ahora tienen una estructura de datos para representar los zombies, que es la siguiente:


*/

class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
 
    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
    }
}

/*

Ejercicio 2
Crea un nuevo subtipo de Zombi llamado Abominacion, que además de funcionar como cualquier Zombi, 
tiene un ataque especial llamado ataqueMultiple, que ataca 3 veces consecutivas a un adversario.

*/

class Abominacion extends Zombi{
    ataqueMultiple(objetivo){
        for (let i = 0; i< 3;i++) {
            super.atacar(objetivo);
        }
    }
}

let zombi1 = new Zombi("Pepe",100,50);
zombi1.atacar("Paco");
let zombi2 = new Abominacion("Álvaro",100,50);
zombi2.ataqueMultiple("Pepe");