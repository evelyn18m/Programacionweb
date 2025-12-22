let notas = [7, 8, 9.5, 7.8, 10, 8.6, 9.6, 9.5, 9.9]
console.log(notas);

// CRUD
// CREAR
notas.push(8.9) // Agrega al final arreglo
console.log(notas);
notas.unshift(7)// Agrega al inicio del arreglo
console.log(notas);

// READ
console.log(notas); // Todo el arreglo
console.log(notas[0]); // primer elemento.
console.log(notas[3]); // cuarta posisicion.

// UPDATE - ACTUALIZAR

notas[2] = 6
console.log(notas);

// ELIMINAR
notas.pop(); // Elimina el último elemento
console.log(notas);

notas.shift(); // Elimina el primer elemento
console.log(notas);

notas.splice(2, 1); // Elimina una posición especifica.
console.log(notas);

notas.splice(1, 0, 10);
console.log(notas);

//METODO FILTER

let aprobados = notas.filter(nota => nota > 7);
console.log(aprobados);

// NOTA MAS ALTA

const notaMasAlta = notas.sort((a, b) => a < b ? 1 : -1).at(0);
console.log(notaMasAlta);

// INCREMENTAR A 10 si el estudiante tiene mayor a 9.5

for (let i = 1; i < notas.length; i++) {
    if (notas[i] > 9.5) {
        notas[i] = 10;
    }
}
console.log(notas);

// INVESTIGACIÓN: Método join, contac y slice.

// JOIN: une elementos de un array en una cadena con un sepador

let cadena = notas.join("; ")
console.log(cadena);

//CONCAT: fusiona dos o mas arrays en un nuevo, sin modificar los originales.
let notasNuevas = [8.8, 7];
let notasUnidas = notas.concat(notasNuevas);
console.log(notas);
console.log(notasUnidas);

//SLICE extrae una porcion de un arreglo devolviendo una copia. No modifica el arreglo original

let extratoNotas = notas.slice(2, 5)
console.log(notas);
console.log(extratoNotas);



