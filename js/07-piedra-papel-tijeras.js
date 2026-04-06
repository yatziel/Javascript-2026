/* 

  Juego Piedra, Papel o Tijera

  Vamos a crear un juego interactivo donde el usuario pueda jugar contra la compu.

  Reglas:

  - Piedra vence a tijera
  - Tijera vence a papel
  - Pepel vence a piedra
  - Si ambos elijen lo mismo es empate

  Pasos para implementar

  - Definir las opciones del jugador. 
  - Generar una opción aleatoria para la computadora.
  - Comparar estas opciones y determinamos al ganador.
  - Mostrar el resultado.

  Estructura a utilizar

  - Varibales
  - Condicionales
  - Generar un numero aleatorio (Math.random) entre 0 y 1
  - Operadores lógicos y de comparación
  - Concatenación de cadenas de texto (templates literals)
  - Comentarios

*/

// Variables. 1. Opción del jugador

const opcionJugador = prompt('¡Para jugar escribe: piedra, papel o tijera!'); // piedra, papel o tijera
 
// 2. Opción de la computadora

const numeroAleatorio = Math.random(); // Entre 0 y 1

let opcionComputadora; 

// 3. Condicional - Asignar una opción dependiendo del número aleatorio

if ( numeroAleatorio < 0.33 ) {
  opcionComputadora = 'piedra';
} else if ( numeroAleatorio < 0.66 ) {
  opcionComputadora = 'papel';
} else {
  opcionComputadora = 'tijera';
}

// 4 Mostrar las elección

console.log('¡🪨 Piedra, 🧻 Papel o ✂️ Tijera!');
console.log('Tu elección es: ' + opcionJugador);
console.log('La compu eligió: ' + opcionComputadora);
console.log('-------------------------------------------');

// 5. Determinar el ganador a partir de las condicionales

let resultado;

if ( opcionJugador === opcionComputadora ) {
  resultado = `🤝 ¡Empate! ambos eligieron ${opcionJugador}`;
} else if ( opcionJugador === 'piedra' && opcionComputadora === 'tijera') {
  resultado = `🎉 ¡Ganaste! piedra vence a tijera.`;
} 