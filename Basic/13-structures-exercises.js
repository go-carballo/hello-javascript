/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "elefante", "tigre", "león"];

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("jirafa");
animales.push("cebra");

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1);
console.log(animales);
// 4. Crea un set que almacene cinco libros
let libros = new Set(["1984", "Cien años de soledad", "El Quijote", "Moby Dick", "Don Quijote de la Mancha"]);


// 5. Añade dos más. Uno de ellos repetido
libros.add("La Odisea");
libros.add("1984"); // Repetido


// 6. Elimina uno concreto a tu elección
libros.delete("Cien años de soledad");
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log(meses.get(5));
} else {
    console.log("El mes 5 no existe en el mapa");
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", [6, 7, 8]);
console.log(meses);
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = [1, 2, 3, 4, 5, 5, 4, 3];
let setFromArray = new Set(array);
let mapFromSet = new Map();
mapFromSet.set("numeros", setFromArray);
console.log(mapFromSet);
