/* 

  Switch

  Es una sentencia que se utiliza pra realizar diferentes acciones según distintas condiciones.

  Se suela usar como forma alternativa a multiples sentencias else-if cuando se tiene una sola variable que puede tomar distintos valores.
  
  Sintaxis:

  switch (varibale)  {

    // Casos según se compare la variable
    
    case valor1:
      // Código a ejecutar
      ...
      ...

      break; // Parar la ejecución del código

    case valor2:
      // Código a ejectura
      ...
      ...

      break;

    case valor3: 
      // Código que se ejectura
      ...
      ...
      
      break;

    default: 
      // Va a ejecutar el codigo si no coincide con ningun caso.
      ...
      ...
      break; // Sea opcional
  }

*/

let eleccionLicenciatura = prompt('Escribe la licenciatura que te interesa: televisión, diseño o consultoría') // televisión, diseño, consultoría

switch (eleccionLicenciatura) {

  case 'televisión':
    console.log('📺 Has elegido la Licenciatura de Televisión, que mal por ti!');
    break;

  case 'diseño':
    console.log('🎨 Has elegido la Licenciatura de Diseño, serás muy fregón!');
    break;
  
  case 'consultoría':
    console.log('💅 Has elegido la Licenciatura de Consultoría, me caes muy bien!');
    break;

  default: 
    console.log('🫪 Estas loquit@!');
}