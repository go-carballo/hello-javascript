/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchPosts();

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nueva publicación',
        body: 'Contenido de la nueva publicación',
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 1,
        title: 'Publicación actualizada',
        body: 'Contenido actualizado de la publicación',
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Título actualizado con PATCH'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
.then(response => {
    if (response.ok) {
        console.log('Recurso eliminado correctamente');
    } else {
        throw new Error('Error al eliminar el recurso');
    }
})
.catch(error => console.error('Error:', error));
// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
function fetchWeather(city) {
    const apiKey = 'TU_API_KEY';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

fetchWeather('Madrid');

// 9. Crea una función que realice una solicitud POST a una API de tu elección (puedes usar JSONPlaceholder para esto)
function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body,
            userId: 1
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

createPost('Título de la nueva publicación', 'Contenido de la nueva publicación');  
// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
fetch('https://pokeapi.co/api/v2/pokemon/1') // Obtener datos de Bulbasaur
    .then(response => response.json())
    .then(pokemon => {
        console.log('Datos del Pokémon:', pokemon);
        return fetch(pokemon.species.url); // Obtener detalles de la especie
    })
    .then(response => response.json())
    .then(species => {
        console.log('Detalles de la especie:', species);
        return fetch(species.evolution_chain.url); // Obtener cadena evolutiva
    })
    .then(response => response.json())
    .then(evolutionChain => {
        console.log('Cadena evolutiva:', evolutionChain);
    })
    .catch(error => console.error('Error:', error));    
// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
    