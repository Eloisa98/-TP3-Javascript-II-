function calcularSomaArray(array) {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

function calcularProdutoArray(array) {
    return array.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
}

const lista = [10, 20, 30, 40];

console.log("Soma dos elementos:", calcularSomaArray(lista));
console.log("Multiplicação dos elementos:", calcularProdutoArray(lista));
