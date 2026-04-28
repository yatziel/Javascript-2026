/* 

  Clases

  Las clases en JS son una forma de definir objsetos, sus propiedades y métodos, creando un prototipo o plantilla del cual se generan varias instancias de objetos y heredan su comportamiento.
  
  Por norma, los nombres de clases comienzan con mayúscula.

  Sintanxis:

  class NombreClase {

    // Utilizamos un método constructor especial para inicializar una instancia del objeto

    constructor(prop1, prop2) {
      this.key = prop1;
      this.key = prop2;
      ...
    }

  } 

  class 👉 Define la clase
  constructor() 👉 Se ejecuta al crear el objeto
  this 👉 una referencia al objeto que se esta creando.

*/

class Estudiante {

  constructor(nombre, licenciatura, semestre) {
    this.nombre = nombre;
    this.licenciatura = licenciatura;
    this.semestre = semestre;
  }

  // Agregar un método para todas las instancias

  saludo() {
    console.log( `Hola soy ${this.nombre} estudio ${this.licenciatura} en el semetres No. ${this.semestre}` );
  }
} 

console.log(Estudiante);

/* 

  Crear instancias de la clase (objetos)

  Vamos a utilizar una constante y a crear una nueva instancia a partir de la clase.

  Sintaxis:

  const nombreConstante = new NombreClase(prop1, prop2, prop3)

  new 👉 crea una instancia

*/

const estudiante1 = new Estudiante('Antonio', 'LDPM', 4);
const estudiante2 = new Estudiante('Alan', 'LTPA', 2);
const estudiante3 = new Estudiante('Areli', 'LCGI', 6);


console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);

// Accedemos a los valores

console.log( `Hola soy ${estudiante1.nombre}, estudio en ${estudiante1.licenciatura} y voy en el semestre #${estudiante1.semestre}!` )

console.log( `Hola soy ${estudiante2.nombre}, estudio en ${estudiante2.licenciatura} y voy en el semestre #${estudiante2.semestre}!` )

console.log( `Hola soy ${estudiante3.nombre}, estudio en ${estudiante3.licenciatura} y voy en el semestre #${estudiante3.semestre}!` )



console.log("---------------------------------")

estudiante1.saludo();
estudiante2.saludo();
estudiante3.saludo();
