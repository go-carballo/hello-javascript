/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
function outerFunction() {
    return function innerFunction() {
        console.log("Hola desde la función interna")
    }
}

const inner = outerFunction()
inner()

// 2. Implementa una función currificada que multiplique 3 números
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

const multiplyBy2 = multiply(2)
const multiplyBy2And3 = multiplyBy2(3)
console.log(multiplyBy2And3(4)) // 24
console.log(multiply(1)(2)(3)) // 6 

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function power(base, exponent) {
    if (exponent === 0) {
        return 1
    }
    return base * power(base, exponent - 1)
}

console.log(power(2, 3)) // 8
console.log(power(5, 0)) // 1   

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(initialValue = 0) {
    let count = initialValue
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        getValue() {
            return count
        }
    }
}

const counter = createCounter(5)
counter.increment()
counter.increment()
console.log(counter.getValue()) // 7
counter.decrement()
console.log(counter.getValue()) // 6    

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0)
    return sum * multiplier
}

console.log(sumManyTimes(2, 1, 2, 3)) // (1 + 2 + 3) * 2 = 12
console.log(sumManyTimes(3, 4, 5)) // (4 + 5) * 3 = 27  

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumWithCallback(callback, ...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0)
    callback(sum)
}

sumWithCallback(result => {
    console.log(`El resultado de la suma es: ${result}`)
}, 1, 2, 3, 4) // El resultado de la suma es: 10    

// 7. Desarrolla una función parcial
function partial(func, ...fixedArgs) {
    return function (...remainingArgs) {
        return func(...fixedArgs, ...remainingArgs)
    }
}

function add(a, b, c) {
    return a + b + c
}

const add5And10 = partial(add, 5, 10)
console.log(add5And10(15)) // 30 (5 + 10 + 15)  

// 8. Implementa un ejemplo que haga uso de Spread
function logNumbers(...numbers) {
    console.log("Números:", numbers)
}

const nums = [1, 2, 3, 4, 5]
logNumbers(...nums) // Números: [1, 2, 3, 4, 5] 

// 9. Implementa un retorno implícito
function createMultiplier(multiplier) {
    return (number) => number * multiplier
}

const double = createMultiplier(2)
console.log(double(5)) // 10    

// 10. Haz uso del this léxico
function createGreeter(name) {
    return () => {
        console.log(`Hola, ${name}`)
    }
}

const greetBrais = createGreeter("Brais")
greetBrais() // Hola, Brais 