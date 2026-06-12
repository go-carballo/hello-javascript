/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
    throw new Error("¡Algo salió mal!");
} catch (error) {
    console.error("Error capturado:", error.message);
} finally {
    console.log("Bloque finally ejecutado.");
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    JSON.parse("Esto no es un JSON válido");
} catch (error) {
    console.error("Error de parsing:", error.message);
} finally {
    console.log("Intento de parsing finalizado.");
}   

// 3. Lanza una excepción genérica
try {
    throw new Error("Excepción genérica");
} catch (error) {
    console.error("Error capturado:", error.message);
}

// 4. Crea una excepción personalizada
class MiErrorPersonalizado extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "MiErrorPersonalizado";
    }
}

// 5. Lanza una excepción personalizada
try {
    throw new MiErrorPersonalizado("¡Este es un error personalizado!");
} catch (error) {
    console.error("Error capturado:", error.message);
}

// 6. Lanza varias excepciones según una lógica definida
function validarEdad(edad) {
    if (edad < 0) {
        throw new MiErrorPersonalizado("La edad no puede ser negativa.");
    } else if (edad < 18) {
        throw new MiErrorPersonalizado("La edad debe ser mayor o igual a 18.");
    } else {
        console.log("Edad válida.");
    }
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    validarEdad(-5);
} catch (error) {
    if (error instanceof MiErrorPersonalizado) {
        console.error("Error personalizado capturado:", error.message);
    } else {
        console.error("Error desconocido:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["10", "20", "abc", "30"];
for (const valor of valores) {
    try {
        const numero = parseFloat(valor);
        if (isNaN(numero)) {
            throw new Error(`No se pudo convertir "${valor}" a número.`);
        }
        console.log(`Número convertido: ${numero}`);
    } catch (error) {
        console.error("Error capturado:", error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function verificarPropiedad(obj, propiedad) {
    if (!obj.hasOwnProperty(propiedad)) {
        throw new MiErrorPersonalizado(`El objeto no tiene la propiedad "${propiedad}".`);
    }
    console.log(`El objeto tiene la propiedad "${propiedad}".`);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function reintentarOperacion(operacion, maxIntentos = 10) {
    let intentos = 0;
    while (intentos < maxIntentos) {
        try {
            return operacion();
        } catch (error) {
            intentos++;
            console.error(`Error capturado en el intento ${intentos}:`, error.message);
            if (intentos === maxIntentos) {
                throw new MiErrorPersonalizado("Se alcanzó el número máximo de reintentos.");
            }
        }
    }
}


