/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// 2. Exporta una constante
export const PI = 3.14159;

// 3. Exporta una clase
export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
// 4. Importa una función
import { saludar } from './modulo.js';

console.log(saludar("Juan"));

// 5. Importa una constante
import { PI } from './modulo.js';

console.log("El valor de PI es:", PI);

// 6. Importa una clase
import { Persona } from './modulo.js';

const persona1 = new Persona("Ana", 25);
console.log(persona1.saludar());

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default {
    saludar,
    PI,
    Persona
};  


// 5. Importa una constante
import modulo from './modulo.js';

console.log("El valor de PI es:", modulo.PI);

// 6. Importa una clase 
import modulo from './modulo.js';
const persona2 = new modulo.Persona("Luis", 30);
console.log(persona2.saludar());

// 6. Importa una clase
import modulo from './modulo.js';
const persona3 = new modulo.Persona("Carlos", 28);
console.log(persona3.saludar());

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default {
    saludar,
    PI,
    Persona
};

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import modulo from './modulo.js';

console.log(modulo.saludar("María"));
console.log("El valor de PI es:", modulo.PI);
const persona4 = new modulo.Persona("Sofía", 22);
console.log(persona4.saludar());

// 9. Exporta una función, una constante y una clase desde una carpeta
export function despedir(nombre) {
    return `Adiós, ${nombre}!`;
}

export const EULER = 2.71828;

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { despedir, EULER } from '../otraCarpeta/modulo.js';

console.log(despedir("Juan"));
console.log("El valor de Euler es:", EULER);

