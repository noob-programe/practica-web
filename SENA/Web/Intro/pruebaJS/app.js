//1. Guardamos y buscamos en HTML por su id exacto
const titulo = document.getElementById("titulo-principal");
const mensaje = document.getElementById("mensaje-bienvenida");

//2. Modificamos mensaje interno de cada etiqueta
titulo.textContent ="Desde JavaScript tomando el control! 🚀"
mensaje.textContent = "El tiempo fue cambiado en tiempo real"
