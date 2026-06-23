/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

const persona1 = new Persona('Juan', 30);
persona1.saludar();
 // Hola, mi nombre es Juan y tengo 30 años.


// 2. Crea un objeto que herede de otro
const animal = {
    tipo: 'Animal',
    comer() {
        console.log('Estoy comiendo');
    }
};

// 3. Define un método de instancia en un objeto
const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
};

coche.mostrarInfo();
// Marca: Toyota, Modelo: Corolla, Año: 2020

// 4. Haz uso de get y set en un objeto
const persona2 = {
    nombre: 'Ana',
    edad: 25,
    get info() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    },
    set actualizarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
    }
};
// 5. Utiliza la operación assign en un objeto
const destino = { a: 1, b: 2 };
const fuente = { b: 4, c: 5 };

const resultado = Object.assign(destino, fuente);

console.log(resultado); // { a: 1, b: 4, c: 5 }
// 6. Crea una clase abstracta
class Animal {
    constructor(nombre) {
        if (new.target === Animal) {
            throw new Error("No se puede instanciar la clase abstracta Animal");
        }
        this.nombre = nombre;
    }
}

// 7. Utiliza polimorfismo en dos clases diferentes
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }   
// 8. Implementa un Mixin
    hacerSonido() {
        console.log('Guau');
    }
}

class Gato extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    hacerSonido() {
        console.log('Miau');
    }
}

// 9. Crea un Singleton
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

// 10. Desarrolla un Proxy
const personaProxy = new Proxy(persona2, {
    get(target, prop) {
        console.log(`Accediendo a la propiedad ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Actualizando la propiedad ${prop} a ${value}`);
        target[prop] = value;
        return true;
    }
});
personaProxy.nombre; // Accediendo a la propiedad nombre
personaProxy.edad = 26; // Actualizando la propiedad edad a 26
console.log(personaProxy.info); // Accediendo a la propiedad info
    