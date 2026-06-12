/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function mostrarError(mensaje) {
    console.error("Error:", mensaje);
}

mostrarError("¡Algo salió mal!");

// 2. Crea una función que utilice warn correctamente
function mostrarAdvertencia(mensaje) {
    console.warn("Advertencia:", mensaje);
}

mostrarAdvertencia("¡Esto es una advertencia!");

// 3. Crea una función que utilice info correctamente
function mostrarInfo(mensaje) {
    console.info("Información:", mensaje);
}

mostrarInfo("¡Esto es información!");

// 4. Utiliza table
const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Carlos", edad: 28 }
];

console.table(usuarios);

// 5. Utiliza group
console.group("Grupo de usuarios");
usuarios.forEach(usuario => {
    console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`);
});
console.groupEnd();

// 6. Utiliza time
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Tiempo de ejecución");

// 7. Valida con assert si un número es positivo
const numero = -5;
console.assert(numero > 0, "El número no es positivo");

// 8. Utiliza count
console.count("Conteo");
console.count("Conteo");
console.count("Conteo");

// 9. Utiliza trace
function funcionA() {
    funcionB();
}
function funcionB() {
    console.trace("Rastreo de la pila");
}
funcionA();

// 10. Utiliza clear
console.clear();
