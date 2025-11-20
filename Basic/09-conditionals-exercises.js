/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let mostrarNombre = true; // Cambia este valor para probar
if (mostrarNombre) {
    console.log("Alejandro");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin";
let contrasena = "1234";
if (usuario === "admin" && contrasena === "1234") {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 10; // Cambia este valor para probar
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16; // Cambia este valor para probar
if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log(`No puede votar. Le faltan ${18 - edad} años`);
}   


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let categoria = (edad >= 18) ? "adulto" : "menor";
console.log(`La persona es un ${categoria}`);


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 4; // Cambia este valor para probar (1-12)
if (mes === 12 || mes === 1 || mes === 2) {
    console.log("Estamos en invierno");
} else if (mes >= 3 && mes <= 5) {
    console.log("Estamos en primavera");
} else if (mes >= 6 && mes <= 8) {
    console.log("Estamos en verano");
} else if (mes >= 9 && mes <= 11) {
    console.log("Estamos en otoño");
} else {
    console.log("Mes inválido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes === 2) {
    console.log("Febrero tiene 28 o 29 días");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("Este mes tiene 30 días");
} else if (mes >= 1 && mes <= 12) {
    console.log("Este mes tiene 31 días");
} else {
    console.log("Mes inválido");
}   

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "es"; // Cambia este valor para probar ("es", "en", "fr", "de")
switch (idioma) {
    case "es":
        console.log("¡Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    case "de":
        console.log("Hallo!");
        break;
    default:
        console.log("Idioma no soportado");
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Estamos en invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Estamos en primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Estamos en verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Estamos en otoño");
        break;
    default:
        console.log("Mes inválido");
        break;
}           

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 2:
        console.log("Febrero tiene 28 o 29 días");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 30 días");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 días");
        break;
    default:
        console.log("Mes inválido");
        break;
}   

// ¡No olvides ejecutar el archivo para comprobar que todo funciona correctamente!  
// Para ejecutar el archivo, usa el siguiente comando en la terminal:
// cd Basic
// node 09-conditionals-exercises.js    

