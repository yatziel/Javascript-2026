/* 

  Blucles

  Son estructuras de control que permiten repetir un bloque de código varias veces, hasta que se cumpla una condición específica.

  Los más comunes son: 

  1. Bucle for

  El bucle for se utiliza cuando sabemos cuantas veces queremos repetir un bloque de código.

  Sintaxis:

  for ( inicialización; condición; incremento ) {

    // Código que se va a repetir su ejecución
  
  }

  inicialización 👉 variable con un valor inicial.
  condición 👉 evalua una expresión. true > se ejectura el bucle.
  incremento 👉 aumenta el valor de la variable en cada iteración

*/

for ( let i = 1; i <= 100; i++ ) {
  //console.log(i);
}


/* 

2. Bucle while

  El bucle while se utiliza cuando no sabemos cuantas veces queremos repetir un bloque de código. Pero si queremos que se repita mientras se cumpla una condición.

  Sintaxis:

  inicialización

  while (condición) {
    // Código que se ejecuta
    ...
    incremento
  }

*/

/*  

let j = 0;
let repeticiones = parseInt(prompt("Cuantas veces quiers que se repita"))


while (j <= repeticiones) {
  console.log(j);
  j++;
}

*/

/* 

  3. Blucle do...while

  Este bucle es simar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez. Ya que la condición se evalua despues de la ejecución.

  Sintaxis:

  incialización

  do {
    // Codigo que se ejectura al menos una vez 
    ...
    incremento
  } while (condición);

*/

let k = 0;

do {
  console.log('Beep Beep Richie! 🎈');
  k++;
} while (k < 5);

