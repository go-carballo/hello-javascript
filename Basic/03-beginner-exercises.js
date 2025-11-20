/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Este es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/*
Este es un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let miNumero = 42; // Número
let miCadena = "Hola, mundo"; // Cadena de texto
let miBooleano = true; // Booleano
let miUndefined; // Undefined
let miNull = null; // Null
let miSimbolo = Symbol("miSimbolo"); // Símbolo
let miBigInt = 9007199254740991n; // BigInt

// 4. Imprime por consola el valor de todas las variables
console.log(miNumero);
console.log(miCadena);
console.log(miBooleano);
console.log(miUndefined);
console.log(miNull);
console.log(miSimbolo);
console.log(miBigInt);              

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof miNumero);
console.log(typeof miCadena);
console.log(typeof miBooleano);
console.log(typeof miUndefined);
console.log(typeof miNull);
console.log(typeof miSimbolo);
console.log(typeof miBigInt);   

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
miNumero = 100;
miCadena = "Adiós, mundo";
miBooleano = false;
miUndefined = undefined;
miNull = null;
miSimbolo = Symbol("otroSimbolo");
miBigInt = 1234567890123456789n;                

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
miNumero = "Ahora soy una cadena";
miCadena = 256;
miBooleano = "true";
miUndefined = null;
miNull = undefined;
miSimbolo = 123;
miBigInt = "No soy un BigInt";      

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const miConstanteNumero = 3.14; // Número
const miConstanteCadena = "Constante"; // Cadena de texto
const miConstanteBooleano = false; // Booleano
const miConstanteUndefined = undefined; // Undefined
const miConstanteNull = null; // Null
const miConstanteSimbolo = Symbol("constanteSimbolo"); // Símbolo
const miConstanteBigInt = 9876543210987654321n; // BigInt   

// 9. A continuación, modifica los valores de las constantes
// miConstanteNumero = 1.59; // Error
// miConstanteCadena = "Nuevo valor"; // Error
// miConstanteBooleano = true; // Error
// miConstanteUndefined = "No soy undefined"; // Error
// miConstanteNull = "No soy null"; // Error
// miConstanteSimbolo = Symbol("nuevoSimbolo"); // Error
// miConstanteBigInt = 12345678901234567890n; // Error  

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Las líneas que intentan modificar las constantes han sido comentadas para evitar errores.
// miConstanteNumero = 1.59; // Error
// miConstanteCadena = "Nuevo valor"; // Error
// miConstanteBooleano = true; // Error
// miConstanteUndefined = "No soy undefined"; // Error
// miConstanteNull = "No soy null"; // Error
// miConstanteSimbolo = Symbol("nuevoSimbolo"); // Error
// miConstanteBigInt = 12345678901234567890n; // Error  

// ¡No olvides ejecutar el archivo para comprobar que todo funciona correctamente!
