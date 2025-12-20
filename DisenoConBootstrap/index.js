// Callback: Funciones que se pasan como parametros

// function obtenerDatos(callback) {
//     setTimeout(() => {
//         callback("Obtener Datos");
//     }, 2000);
// }
//
// obtenerDatos((respuesta) => {
//     console.log(respuesta);
// });


//PROMESAS resolve: se cumpio rejet: no se cumplio

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promesa");
//     }, 2000)
//})

// promesa
//     .then(respuesta => {
//         console.log(respuesta);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// async / awayt : funciones

// async function obtenerdatos(){
//     const resultado = await promesa
//     console.log(resultado);
// }
async function obtenerDatos() {
    const data = await fetch('https://api.thecatapi.com/v1/images/search');
    const res = await data.json();

    const imagen = document.getElementById('imagen');
    imagen.src = res[0].url
}

obtenerDatos();



