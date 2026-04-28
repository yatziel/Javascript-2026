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
  saludo : function() { console.log("Hola soy la Chikis! 🐶")}
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

console.log('Hola me llamo ' + perrito.nombre + ' y tengo ' + perrito.edad + ' años y soy un perrito ' + perrito.raza);

console.log(`Hola me llamo ${perrito.nombre} y tengo ${perrito.edad} años y soy un perrito ${perrito.raza}`);

// Acceso a las propiedades boleanas

console.log(perrito.aunLadra);
console.log(perrito.aunBrinca);

if (perrito.aunLadra) {
  console.log('Soy una perrita guardiana! 🚨')
} else {
  console.log('Soy una perrita dormilona! 😴')
}

if (perrito.aunBrinca) {
  console.log('Soy una perrita jóven y vivaracha! 👶'); 
} else {
  console.log('Ya no brinco porque soy una perrita viejita! 👵');
}

// Acceso al array

console.log(perrito.juguetes); // Todo el array
console.log(perrito.juguetes[0]); // Pamchita
console.log(perrito.juguetes[1]); // Leoncio

console.log(`Mis juguetes favoritos son: mi almohada ${perrito.juguetes[0]} y ${perrito.juguetes[1]} mi peluche! `)


/* 

  Métodos de los objetos.

  Son funciones que están asociadas a un objeto. Se pueden llamar utlizando la notación de punto "."

  Todas las funciones para ser llamadas se escriben así:

    nombreFuncion() -> Llamamos a la función

  En los objetos los escribiamos así

    nombreObjeto.nombreFuncion()

  Cuando una función esta dentro de un objeto se les llama métodos.

*/

console.log(perrito.saludo()) // indefinido

perrito.saludo(); // Imprime el mensaje dentro del bloque de código de la función.

/* 

  Agregar propiedades

  Para agregar más propuedes después de declarar el objeto usamos la siguiente sintaxis.

    nombreObjeto.nuevaPropiedad = valor;

  Para actualizar una propiedad usamos la misma sintanxis del punto y el valor actualizado.

    nombreObjeto.propiedadExistene = nuevoValor

*/

console.log(perrito)

perrito.color = "blanco";
perrito.edad = 12;
perrito.corre; 

console.log(perrito)


