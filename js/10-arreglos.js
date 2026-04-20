/* 

  Arreglos (Arrays)
 
  Un arreglo es una colección de datos, es decir una lista de elementos.

  En JS los arreglos se definen utilizando corchetes [] y los elementos internos se separan por comas "," 

  Pueden contner el mismo tipo de datos o diferentes tipos, incluso pueden tener arreglos anidados.

  En windows shift + tecla de las llaves

*/

let frutas = ["manzana", "sandía", "melón", "pera"];
let calificaciones = [10, 8, 5, 0];
let misDatos = ["Yatziel", 37, true];

console.log(frutas); // Muestra el arreglo completo
console.log(frutas.length); // El número de datos
console.log(frutas[3]); // Accedemos a un dato a través del índice
console.log("Calificación de Diana: " + calificaciones[3]);
console.log("Yat ya huele a viejito porque tiene " + misDatos[1] + " años! 👴🏻");

let coordenadas = [ [1 , 2 , 3] , [4 , 5 , 6] , [7 , 8 , 9] ]; // Arreglos aniadados

console.log(coordenadas);
console.log(coordenadas[2]);
console.log(coordenadas[2][2]);

/* 

  Métodos de los arreglos.

  Un método es una función preestablecida que nos ayuda a trabajar con arreglos y sus datos.

  push() 👉 Agrega uno o más elementos al final del areglo.
  pop() 👉 Elimina el último elemento del arreglo y lo devuelve.
  shift() 👉 Elimina el primer elemento del arreglo y lo devuelve.
  unshift() 👉 Agrega uno o más elementos al inicio del arreglo.
  indexOf() 👉 Devuelve el índice del primer elemento que coincida con el valor especificado o regresa -1 si no encuentra nanais.

*/

/* Mensaje del commit: "Aprendimos arreglos básicos y anidados" */