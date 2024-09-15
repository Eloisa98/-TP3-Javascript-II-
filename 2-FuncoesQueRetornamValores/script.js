function divisao(a, b) {
    if (b === 0) {
        return "Divisão por zero não é permitida";
    }
    return a / b;
}

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}


function calcularTudo(a, b) {
    return {
        soma: soma(a, b),
        subtracao: subtracao(a, b),
        multiplicacao: multiplicacao(a, b),
        divisao: divisao(a, b)
    };
}

alert(JSON.stringify(calcularTudo(10, 2)));
