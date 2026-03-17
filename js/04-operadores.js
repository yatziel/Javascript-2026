/* 

 Operadores

 Son simbolos que indican al interprete que debe realizarse una operación matemática, lógica o relacional. Y producir un resultado.

 1. Operadores Aritméticos

 Se utilizan para operaciones matemáticas basicas como suma, resta, división y multiplicación.

 + 👉 suma
 - 👉 resta
 * 👉 multiplicación
 / 👉 división
 % 👉 módulo (residuo de una división)
 ++ 👉 incremento (suma 1 al valor)
 -- 👉 decremento (resta 1 al valor)

*/

let a = 10;
let b = 5;

// Expresión: es el conjunto de variables, valores y operadores.

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
a++;
console.log(a); // 11
b--;
console.log(b); // 4


/* 

2. Operadores de Asignación

Estos operadores se utilizan para asignar valores a las variabales.

= 👉 asignación
+= 👉 suma y asigna
-= 👉 resta y asigna
*= 👉 multiplica y asigna
/= 👉 divide y asigna
%= 👉 residuo y asigna

*/

let c = 20;
console.log(c); // 20

c += 5;
console.log(c); // 25

c -= 10; 
console.log(c); // 15

c *= 2;
console.log(c); // 30

c /= 3;
console.log(c); // 10

c %= 3;
console.log(c); // 1


/* 

  3. Operadores de comparación

  Se utilizan para comparar dos valores o expresiones y devuelve un valor booleano (true o false)

  == 👉 igualdad. Compara solo el valor.
  === 👉 igualdad estricta. Compara el valor y el tipo de dato.
  != 👉 desigualdad. Compara solo el valo.
  !== 👉 desigualdad estricta. Compara el valor y el tipo de dato.
  > 👉 mayor que
  < 👉 menor que
  >= 👉 mayor o igual que
  <= 👉 menor o igual que

*/

let d = 10; // number
let e = "10"; // string

console.log(d == e); // true
console.log(d === e); // false
console.log(d != e); // false
console.log(d !== e); // true

console.log(d > 5); // false
console.log(d < 15); // true
console.log(d >= 10); // true
console.log(d <= 5); // false

/* 

  4. Operadores lógicos

  Los utilizamos para combianar expresiones booleanas.

  && 👉 AND (y) - Si ambos valores o expresiones son verdaderos, entonces el resultado será verdadero. Si al menos un valor es falso, el resultado será falso.

  || 👉 OR (o) - Si al menos un valor es verdadero el resultado será verdadero. Solo si ambos valores son falsos el resultado será falso.

  ! 👉 NOT (no) - Niega el valor. El resultado es el valor contrario al que esta asignado.

*/

let f = true; // 10 > 5
let g = false; // 10 === "10"

console.log( f && g ) // false
console.log( f || g ) // true
console.log( !f ) // false
console.log( !g ) // true