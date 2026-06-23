/*
Clase 79 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25888
*/

// 1. Crea una RegEx que valide correos electrónicos
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 2. Crea una RegEx obtenga Hashtags de un Texto
const hashtagRegex = /#\w+/g;

// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// NOTA: Aplícalas utilizando diferentes operaciones

