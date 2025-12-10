/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Hola, ";
let cadena2 = "mundo!";
let resultado = cadena1 + cadena2;
console.log(resultado);

// 2. Muestra la longitud de una cadena de texto
let cadena = "JavaScript es genial";
console.log(cadena.length);

// 3. Muestra el primer y último carácter de un string
console.log(cadena[0]); // Primer carácter
console.log(cadena[cadena.length - 1]); // Último carácter

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let multiLinea = `Esta es la primera línea.
Esta es la segunda línea.
Esta es la tercera línea.`;
console.log(multiLinea);

// 6. Interpola el valor de una variable en un string
let nombre = "Alejandro";
let saludo = `Hola, mi nombre es ${nombre}.`;
console.log(saludo);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = "Aprender JavaScript es divertido";
let fraseModificada = frase.replace(/ /g, "-");
console.log(fraseModificada);

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let texto = "Me encanta programar en JavaScript";
let palabra = "JavaScript";
console.log(texto.includes(palabra));

// 9. Comprueba si dos strings son iguales
let str1 = "Hola";
let str2 = "hola";
console.log(str1 === str2);


// 10. Comprueba si dos strings tienen la misma longitud
console.log(str1.length === str2.length);

//
// 11. Extrae una parte de un string utilizando slice o substring
let subcadena = cadena.slice(0, 10);
console.log(subcadena);

// 12. Elimina los espacios en blanco al inicio y al final de un string
let cadenaConEspacios = "   Hola, mundo!   ";
let cadenaSinEspacios = cadenaConEspacios.trim();
console.log(cadenaSinEspacios);

//  