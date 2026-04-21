/* 

  Objetos

  Son colecciones de propiedades. Una propiedad es una asociación entre un nombre (clave o key) y un valor (value).

  Los valores pueden ser de distintos tipos: numeros, cadenas de texto, bloeanos, arreglos, funciones... 
  
  Sintaxis:

  nombreObjeto = {
    // Propiedades (clave: valor)
    clave1: valor,
    clave2: valor,
    clave3: valor,
    ...
  }

*/

const perrito = {
  nombre : 'Chikis',
  raza : 'Bichon',
  edad : 13,
  aunLadra : true,
  aunBrinca : false,
  juguetes : ['pamchita','leoncio'],
  saludo : function() { console.log("Hola soy la Chiquis! 🐶")}
} 

console.log(perrito);

/* 

  Para acceder a las propiededas y sus valores, utilizamos la notación de punto o la notación de corchetes.

  nombreObjeto.clave 👉 notacion de punto
  nombreObjeto[clave] 👉 notacion de corchetes
   
*/

console.log(perrito.aunBrinca);
console.log(perrito['aunLadra']);

// Mensaje por consola

console.log("Hola me llamo " + perrito.nombre + " y tengo " + perrito.edad + " años y soy un perrito " + perrito.raza);

console.log(`Hola me llamo ${perrito.nombre} y tengo ${perrito.edad} años y soy un perrito ${perrito.raza}`);

