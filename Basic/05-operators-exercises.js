/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let x = 15;
let y = 4;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

console.log(x + y); // Suma
console.log(x - y); // Resta
console.log(x * y); // Multiplicación
console.log(x / y); // División
console.log(x % y); // Módulo
console.log(x ** y); // Exponente

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(x > y); // Mayor que
console.log(x < y + 20); // Menor que
console.log(x >= 15); // Mayor o igual que
console.log(y <= 4); // Menor o igual que
console.log(x === 15); // Igualdad por identidad

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(x < y); // Mayor que
console.log(x > y + 20); // Menor que
console.log(x <= 10); // Mayor o igual que
console.log(y >= 10); // Menor o igual que
console.log(x !== 15); // Igualdad por identidad

// 5. Utiliza el operador lógico and
console.log(x > 10 && y < 10); // true && true = true
console.log(x > 20 && y < 10); // false && true = false

// 6. Utiliza el operador lógico or
console.log(x > 10 || y < 10); // true || true = true
console.log(x > 20 || y < 10); // false || true = true

// 7. Combina ambos operadores lógicos
console.log((x > 10 && y < 10) || (x < 5 && y > 5)); // true || false = true    
// 8. Añade alguna negación
console.log(!(x > 10)); // !true = false
console.log(!(y < 10)); // !true = false

// 9. Utiliza el operador ternario  
console.log(x > y ? "x es mayor" : "y es mayor");       

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((x + y > 20) && (x - y < 10)); // (19 > 20) && (11 < 10) => false && false => false
console.log((x * 2 > 20) || (y / 2 < 3)); // (30 > 20) || (2 < 3) => true || true => true   
console.log(!((x % 2 === 0) || (y % 2 !== 0))); // !((1 === 0) || (0 !== 0)) => !(false || false) => !false => true
