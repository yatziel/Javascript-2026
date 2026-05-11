/* 

  Funciones

  Las funciones son bloques de código reutilizables que realizan una tarea específica.

  1. Función Declarada

  Es la forma más común de definir funciones. Se puede llamar a la función antes de su definición debido al hoisting, es decir se "eleva" en el contexto de ejecución.

  Sintaxis: 

  function nombreFuncion() {
    // Cuerpa de la función
    ...
  }

  Llamada o invocación de la función:

  nombreFuncion();

*/

dianaSaluda();

function dianaSaluda() {
  console.log("Hola soy Dianita y tengo sueño! 😴");
}


/* 

  2. Función expresada (Anónimas)

  Este tipo de función se asignan a una varibale. No puede ser llamada antes de su definición.

  Sintaxis:

  const nombreConstante = function() {
    // Cuerpa de la función
    ...
  }

  Llamada a la función:

  nombreConstante();

*/

const joshuaDespedida = function() {
  console.log("Adios vaquero! 🤠");
}

joshuaDespedida();

/* 

  3. Funcion flecha - Arrow Function

  Tinen una sintaxis más consisa, son útiles para ejecución cortas. Generalmente se asignan a variables.

  Sintaxis:

  const nombreConstante = () => {
    // Cuerpa de la función
    ...
  }
  
  Llamada

  nombreConstante();

*/


const astridSos = () => console.log("Auxilio muero de hambre! 🤤");

astridSos();

/* 

  Parámetros y Argumentos

  Las funciones pueden acepta4r parámetro para recibir datos cuando son invocadas.

  Sintaxis:

  function nombreFuncion( parametro1 , parametro2 , ... ) {
    // Cuerpa de la funcion
    // Los parámetros los usamos dentro del cuerpo de la función
    ...
  }

  Llamadas:

  nombreFuncion( argumento1, argumento2,  ... );

*/

function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Dianita");
saludar("Joshua");
saludar("Astrid");
saludar("Toñito");
saludar("Axel");


const sumar = function(num1 , num2) {
  let suma = num1 + num2;
  console.log("El resultado es " + suma);
}

sumar(5, 10);
sumar(40, 333);
sumar(134823, 12987344);
sumar(12, "Yat");


/* 

  Parámetros por defecto

  En las funciones podemos tener valores por defecto si no se proporcionan los argumentos al llamar a la función.

  Sintaxis:

  function nombreFuncion( parm1 = valorDefault ) {
    // Código que se ejecuta o cuerpa de la función.
    ... 
  }

  Llamada:

  nombreFuncion(); // Usará los valores por defecto.
  nombreFuncion(arg1); // Usara el valor del argumento

*/

const multiplicar = function( num1 = 1, num2 = 2 ) {
  let resultado = num1 * num2;
  console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${resultado}`);
}

multiplicar();
multiplicar(5, 3);
multiplicar(86, 324);

/* 

  Valor de Retorno (Return)

  Las funciones pueden "devolver" o retornar un valor. Para esto se utiliza la palabra "return"

  Sintaxis:

  function nombreFunción() {
    // Cuerpa de la función.
    ...
    ...
    return valor;
  }

  Llamada:

  const nombreConstante = nombreFuncion();

*/

function despedido( nombre = 'Yattito' ) {
  return `${nombre} estas despedido! 😱`;
}

const mensajito = despedido();

console.log(mensajito);

/* 

  Retorno Implícito

  Las funciones flecha no necesitan la palabra return en su estructura más simple (una sola línea)

  Sintaxis:

  const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2;

const resultado = restar(2, 75);

console.log(resultado);