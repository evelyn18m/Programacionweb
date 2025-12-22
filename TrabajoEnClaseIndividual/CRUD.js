let numeros = [1, 2, 30, 24, 15];

for(let i = 0 ; i < numeros.length ; i++){
    if(numeros[i] > 20) console.log(numeros[i])
}
let numerogreat20 = numeros.filter(numero => numero > 20)

console.log(numerogreat20);