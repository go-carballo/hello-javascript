/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}   

// 2. Añade un método a la clase que utilice las propiedades
Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}


// 3. Muestra los valores de las propiedades e invoca a la función
const persona1 = new Persona("Juan", 30);
persona1.saludar();

// 4. Añade un método estático a la primera clase
Persona.saludarTodos = function() {
    console.log("Hola a todos!");
}

// 5. Haz uso del método estático
Persona.saludarTodos();

// 6. Crea una clase que haga uso de herencia
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
}

// 7. Crea una clase que haga uso de getters y setters
class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class ProductoPrivado {
    #nombre;
    #precio;

    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.#precio = precio;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get precio() {
        return this.#precio;
    }

    set precio(nuevoPrecio) {
        this.#precio = nuevoPrecio;
    }
}



// 9. Utiliza los get y set y muestra sus valores
const producto = new ProductoPrivado("Laptop", 1500);
console.log(producto.nombre); // Laptop
console.log(producto.precio); // 1500

producto.nombre = "Smartphone";
producto.precio = 800;

console.log(producto.nombre); // Smartphone
console.log(producto.precio); // 800



// 10. Sobrescribe un método de una clase que utilice herencia 
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y estudio ${this.curso}.`);
    }
}

const estudiante1 = new Estudiante("Ana", 22, "Matemáticas");
estudiante1.saludar();

