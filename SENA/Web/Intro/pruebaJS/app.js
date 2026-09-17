// //1. Guardamos y buscamos en HTML por su id exacto
// const titulo = document.getElementById("titulo-principal");
// const mensaje = document.getElementById("mensaje-bienvenida");

// //2. Modificamos mensaje interno de cada etiqueta
// titulo.textContent ="Desde JavaScript tomando el control! 🚀"
// mensaje.textContent = "El tiempo fue cambiado en tiempo real"

console.log("Hola desde app.js")

const titulo =document.getElementById("titulo-principal")
const mensaje = document.getElementById("input-texto")
const boton = document.querySelector("#boton-cambiar")

//Lectura de acción del usuario
boton.addEventListener("click", function(){
    // console.log("El sensor funciona. Hiciste click")
    const nuevo_titulo = mensaje.value
    titulo.textContent = nuevo_titulo
});


