function calcularSoma(a, b) {
    return a + b;
}

function calcularDiferenca(a, b) {
    return a - b;
}

function calcularProduto(a, b) {
    return a * b;
}

const numeros1 = [1, 2, 3, 4];
const numeros2 = [5, 6, 7, 8];

for (let i = 0; i < numeros1.length; i++) {
    console.log("Soma: " + calcularSoma(numeros1[i], numeros2[i]));
    console.log("Diferença: " + calcularDiferenca(numeros1[i], numeros2[i]));
    console.log("Produto: " + calcularProduto(numeros1[i], numeros2[i]));
}
