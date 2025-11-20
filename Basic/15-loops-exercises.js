/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(`La suma de los números del 1 al 100 es: ${suma}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofía"];
for (let nombre of nombres) {
    console.log(nombre);
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola, este es un ejercicio para contar vocales.";
let contadorVocales = 0;
for (let char of texto.toLowerCase()) {
    if ("aeiouáéíóú".includes(char)) {
        contadorVocales++;
    }
}
console.log(`Número de vocales en el texto: ${contadorVocales}`);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5];
let producto = 1;
for (let num of numeros) {
    producto *= num;
}
console.log(`El producto de los números es: ${producto}`);


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena = "JavaScript";
let cadenaInvertida = "";
for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
}
console.log(`Cadena invertida: ${cadenaInvertida}`);


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibo = [0, 1];
for (let i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(`Los primeros 10 números de Fibonacci son: ${fibo}`);


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numerosArray = [4, 11, 15, 3, 22, 7, 9, 13];
let mayoresDeDiez = [];
for (let num of numerosArray) {
    if (num > 10) {
        mayoresDeDiez.push(num);
    }
}
console.log(`Números mayores a 10: ${mayoresDeDiez}`);  

// ¡No olvides ejecutar el archivo para comprobar que todo funciona correctamente!  
// Para ejecutar el archivo, usa el siguiente comando en la terminal:
// node Basic/15-loops-exercises.js

