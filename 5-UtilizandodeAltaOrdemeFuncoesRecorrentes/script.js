const numeros = [1, 2, 3, 4, 5];

function dobrarValores(array) {
    return array.map(numero => numero * 2);
}

console.log("Valores dobrados:", dobrarValores(numeros));
