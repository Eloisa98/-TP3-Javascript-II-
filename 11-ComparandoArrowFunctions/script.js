function calcularAreaTradicional(largura, altura) {
    return largura * altura;
}

const calcularAreaArrow = (largura, altura) => largura * altura;

alert("Área usando função tradicional: " + calcularAreaTradicional(5, 8));
alert("Área usando arrow function: " + calcularAreaArrow(5, 8));
