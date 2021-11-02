/*

Ejercicio 4
Tenemos el siguiente array de puntuaciones de usuarios:

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];
Cada posición del array es un objeto que contiene el nombre y la puntuación total. 
Se pide implementar una función que reciba dicho array y devuelva un nuevo array 
(sin modificar el que se pasa por parámetro) 
con los nombres de aquellos jugadores que hayan sacado más de 100 puntos ordenado 
de mayor a menor puntuación.

*/

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];

function ordenarPuntuaciones(array)
{
    let resultado = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].puntuacion > 100){

            resultado.push(array[i]);
        }
    }
    resultado.sort((a, b) => b.puntuacion - a.puntuacion);
    console.log(resultado);
}

ordenarPuntuaciones(puntuaciones);
