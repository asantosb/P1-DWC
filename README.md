# P1_DWC

La empresa Entretenimientos del Sur S.L. está trabajando en un juego de zombies y nos han pedido que continuemos con su desarrollo.

Ejercicio 1
Crear la clase Jugador que permita crear nuevos jugadores a partir del nombre, la ocupación, los puntos de vida y la facción. Todos los nuevos jugadores tendrán un máximo de puntos de vida de 100 (es una propiedad fija, no se define por parámetro).

Crear el método toString() dentro de Jugador para facilitar la comprobación de los datos de los jugadores. toString mostrará toda la información de un jugador en una sola línea.

Finalmente crear una lista de jugadores con dos jugadores de ejemplo (invéntate los datos).

Ejercicio 2
Crea un nuevo subtipo de Zombi llamado Abominacion, que además de funcionar como cualquier Zombi, tiene un ataque especial llamado ataqueMultiple, que ataca 3 veces consecutivas a un adversario.

Ejercicio 3
Quieren poder generar consumibles de diferentes tipos, por lo que cada uno podrá tener efectos completamente diferentes.
El tipo de objeto PlantaCurativa debe permitir generar objetos que recuperen la cantidad de puntos de vida definida por parámetro del constructor y respetando el máximo de puntos de vida del jugador.
Terminar de implementar PlantaCurativa.

Ejercicio 4
Cada posición del array es un objeto que contiene el nombre y la puntuación total. Se pide implementar una función que reciba dicho array y devuelva un nuevo array (sin modificar el que se pasa por parámetro) con los nombres de aquellos jugadores que hayan sacado más de 100 puntos ordenado de mayor a menor puntuación.
