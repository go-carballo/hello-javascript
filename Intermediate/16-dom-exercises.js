/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = '¡Hola Mundo!';
    document.body.appendChild(title);
});

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const myImage = document.createElement('img');
myImage.id = 'myImage';
myImage.src = 'https://via.placeholder.com/150';
document.body.appendChild(myImage);

// Cambiar el atributo src a otra URL
myImage.src = 'https://via.placeholder.com/300';
// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
window.addEventListener('DOMContentLoaded', () => {
    const box = document.createElement('div');
    box.id = 'box';
    document.body.appendChild(box);
    box.classList.add('resaltado');
});
// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const paragraph = document.createElement('p');
paragraph.id = 'paragraph';
paragraph.textContent = 'Este es un párrafo.';
document.body.appendChild(paragraph);
paragraph.style.color = 'blue';
// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
const button = document.createElement('button');
button.textContent = 'Agregar elemento';
document.body.appendChild(button);

const list = document.createElement('ul');
list.id = 'list';
document.body.appendChild(list);
// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
const deleteParagraph = document.createElement('p');
deleteParagraph.id = 'deleteParagraph';
deleteParagraph.textContent = 'Este párrafo se eliminará.';
document.body.appendChild(deleteParagraph);

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Eliminar párrafo';
document.body.appendChild(deleteButton);
// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
const content = document.createElement('div');
content.id = 'content';
content.textContent = 'Contenido original.';
document.body.appendChild(content);

// Reemplazar el contenido por un <h2>
const newContent = document.createElement('h2');
newContent.textContent = 'Nuevo Contenido';
content.innerHTML = '';
content.appendChild(newContent);

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
const greetBtn = document.createElement('button');
greetBtn.id = 'greetBtn';
greetBtn.textContent = 'Saludar';
document.body.appendChild(greetBtn);
greetBtn.addEventListener('click', () => {
    alert('¡Hola!');
});

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
const textInput = document.createElement('input');
textInput.id = 'textInput';
document.body.appendChild(textInput);

const result = document.createElement('div');
result.id = 'result';
document.body.appendChild(result);

textInput.addEventListener('input', () => {
    result.textContent = textInput.value;
});

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
const backgroundBtn = document.createElement('button');
backgroundBtn.id = 'backgroundBtn';
backgroundBtn.textContent = 'Cambiar fondo';
document.body.appendChild(backgroundBtn);

backgroundBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';
});
    