/* 

  Condicionales

  Son estructuras de control ue permiten ejectutar dir¿fenretes bloques de código según una condición (verdadero o falso)

  1. if (si es verdadero)
  
  Evaluar una condición y si es verdadera (true), ejecuta el código dentro de sus llaves.
  
  Sintaxis: 

    if (condición) {
      // código que se ejectuta
    }

*/
let edad = 13;

if (edad >= 18) { // verdadero o falso
  // Código que se ejectuta
  console.log("Eres mayor de edad, peudes ver este contenido! 😉");
}

/* 

  2. else (no es verdadero)
  
  Permite ejecutar un bloque de código si la condición es falsa.

  Sintaxis:

  if (condición) {
    // codigo que se ejecuta si es verdadero

  } else {
    // código que se ejecuta si es falso
  
  }

*/

let hora = 16;

if (hora < 12) { // false
  console.log("Buenos días solecito! 🌞");
} else {
  console.log("Buenas tardes chifurímpulo! 👹");
}

/* 

  3. else if (si no es verdadero)

  Nos va a permitir tener más de una condición para ser evaluada. Esta evaluación es secuencia, has que una condición sea verdaderá entonces se ejectura el bloque de código.

  Sintaxis:

  if (condición) {
    // codigo que se ejectuta si la condición es verdadera

  } else if (condición) {
    // codigo que se ejecuta si la condición es verdadera 
  
  } else {
    // codigo que se ejectuta si ninguna de las condiciones es verdera.

  }


*/

let calificacion = 0;

if (calificacion >= 9) {
  console.log("Eres un excelente programador! 🌈");
} else if (calificacion >= 7) {
  console.log("Ahi la llevas, ya casi te sale! 🎮");
} else if (calificacion >= 5) {
  console.log("Échale más ganitas o nos vemos en el extra 👹");
} else {
  console.log("Ya valió barriga. ¡Bienvenidx al extra! 🔥");
}