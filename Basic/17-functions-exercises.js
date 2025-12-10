/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 7));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function encontrarMayor(numeros) {
    return Math.max(...numeros);
}
console.log(encontrarMayor([3, 5, 7, 2, 8]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(cadena) {
    let contador = 0;
    for (let char of cadena.toLowerCase()) {
        if ("aeiouáéíóú".includes(char)) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales("Hola, este es un ejercicio para contar vocales."));


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirAMayusculas(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log(convertirAMayusculas(["hola", "mundo", "javascript"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(esPrimo(11)); // true
console.log(esPrimo(4));  // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

console.log(elementosComunes([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]        

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(numeros) {
    return numeros.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}
console.log(sumaPares([1, 2, 3, 4, 5, 6])); // 12

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarAlCuadrado(numeros) {
    return numeros.map(num => num * num);
}
console.log(elevarAlCuadrado([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(cadena) {
    return cadena.split(' ').reverse().join(' ');
}
console.log(invertirPalabras("Hola, mundo")); // "mundo, Hola"


// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result =    1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120