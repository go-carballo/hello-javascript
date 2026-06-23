/*
Clases 74 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24329
*/

// 1. Crea un código con un error lógico y usa VS Code para encontrarlo
function multiply(a, b) {
    return a + b; // Error lógico: debería ser a * b
}

console.log(multiply(3, 5)); // Debería ser 15, pero devuelve 8

// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución
    debugger;
