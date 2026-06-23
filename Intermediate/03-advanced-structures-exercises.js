/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let numbers = [1, 2, 3, 4, 5, 6]
let result = numbers
    .map(n => n * 2)
    .filter(n => n % 3 === 0)
    .reduce((acc, n) => acc + n, 0)
console.log(result) // 18 (6 + 12)  

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let cubedEvens = numbers
    .map(n => n ** 3)
    .filter(n => n % 2 === 0)
console.log(cubedEvens) // [8, 64, 216] (2^3, 4^3, 6^3) 

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let nestedArray = [1, [2, [3, [4]]]]
let flatArray = nestedArray.flat(2)
console.log(flatArray) // [1, 2, 3, [4]]

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words) // ["Hola", "mundo", "Adiós", "mundo"]   

// 4. Ordena un array de números de mayor a menor
let unsorted = [3, 4, 1, 6, 10]
let sorted = unsorted.sort((a, b) => b - a)
console.log(sorted) // [10, 6, 4, 3, 1] 

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let setA = new Set([1, 2, 3, 4])
let setB = new Set([3, 4, 5, 6])

// Unión
let union = new Set([...setA, ...setB])
console.log(union) // Set {1, 2, 3, 4, 5, 6}

// Intersección
let intersection = new Set([...setA].filter(x => setB.has(x)))
console.log(intersection) // Set {3, 4}

// Diferencia (elementos en A que no están en B)
let difference = new Set([...setA].filter(x => !setB.has(x)))
console.log(difference) // Set {1, 2}

// Diferencia (elementos en B que no están en A)
let differenceB = new Set([...setB].filter(x => !setA.has(x)))
console.log(differenceB) // Set {5, 6}

// 6. Itera los resultados del ejercicio anterior
union.forEach(x => console.log(x))
intersection.forEach(x => console.log(x))
difference.forEach(x => console.log(x))
differenceB.forEach(x => console.log(x))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
let usersMap = new Map([
    ["user1", { name: "Alice", age: 25, email: "alice@example.com" }],
    ["user2", { name: "Bob", age: 17, email: "bob@example.com" }],
    ["user3", { name: "Charlie", age: 30, email: "charlie@example.com" }]
])

usersMap.forEach((value, key) => console.log(`${key}: ${JSON.stringify(value)}`))

// 8. Dado el mapa anterior, crea un array con los nombres
let namesArray = Array.from(usersMap.values()).map(user => user.name)
console.log(namesArray)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
let adultEmailsSet = new Set(Array.from(usersMap.values()).filter(user => user.age >= 18).map(user => user.email))
console.log(adultEmailsSet)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
let usersObject = Object.fromEntries(usersMap)
let emailKeyedMap = new Map(Object.values(usersObject).map(user => [user.email, user]))
console.log(emailKeyedMap)  