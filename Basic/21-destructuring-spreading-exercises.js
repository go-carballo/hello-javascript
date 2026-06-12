/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(first, second);


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [a, b, c = 10] = [1, 2];
console.log(a, b, c);   


// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = { name: "John", age: 30 };
let { name, age } = person;
console.log(name, age);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { name: fullName, age: years } = person;
console.log(fullName, years);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let personWithAddress = { name: "John", age: 30, address: { city: "New York", zip: "10001" } };
let { address: { city, zip } } = personWithAddress;
console.log(city, zip);
        
// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log(combinedArray);

// 7. Usa propagación para crear una copia de un array
let copiedArray = [...array1];
console.log(copiedArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);

// 9. Usa propagación para crear una copia de un objeto
let copiedObject = { ...obj1 };
console.log(copiedObject);

// 10. Combina desestructuración y propagación
let { a, ...rest } = combinedObject;
console.log(a, rest);
