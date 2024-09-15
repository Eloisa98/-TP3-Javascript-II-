const estoque = [
    { nome: 'Tênis', quantidade: 10, precoUnitario: 150 },
    { nome: 'Camisa', quantidade: 20, precoUnitario: 50 },
    { nome: 'Calça', quantidade: 15, precoUnitario: 80 },
];

function removerProduto(nome) {
    const index = estoque.findIndex(produto => produto.nome === nome);
    if (index !== -1) {
        estoque.splice(index, 1);
        return `${nome} removido com sucesso.`;
    } else {
        return `${nome} não encontrado no estoque.`;
    }
}

function calcularValorTotal() {
    return estoque.reduce((total, produto) => total + (produto.quantidade * produto.precoUnitario), 0).toFixed(2);
}

function relatorioEstoque() {
    console.log('Relatório de Estoque:');
    estoque.forEach(produto => {
        const valorTotal = produto.quantidade * produto.precoUnitario;
        console.log(`Produto: ${produto.nome}, Quantidade: ${produto.quantidade}, Valor Total: R$ ${valorTotal.toFixed(2)}`);
    });
}

console.log(removerProduto('Tênis'));
console.log(`Valor total do estoque: R$ ${calcularValorTotal()}`);
relatorioEstoque();

const estudantes = [
    { nome: 'João', notas: [7.5, 8.0, 9.0] },
    { nome: 'Maria', notas: [5.5, 6.0, 6.5] },
    { nome: 'Pedro', notas: [9.5, 8.5, 9.0] }
];

function calcularMediaNotas(estudante) {
    const totalNotas = estudante.notas.reduce((total, nota) => total + nota, 0);
    return (totalNotas / estudante.notas.length).toFixed(2);
}

function adicionarEstudante(nome, notas) {
    estudantes.push({ nome, notas });
}

function gerarRelatorioDesempenho() {
    console.log('Relatório de Desempenho:');
    estudantes.forEach(estudante => {
        const media = calcularMediaNotas(estudante);
        console.log(`Estudante: ${estudante.nome}, Média: ${media}`);
    });
}

function alunosParaRecuperacao() {
    return estudantes.filter(estudante => calcularMediaNotas(estudante) < 6.0);
}

adicionarEstudante('Ana', [4.5, 5.0, 6.0]);
gerarRelatorioDesempenho();
console.log('Alunos para recuperação:');
alunosParaRecuperacao().forEach(estudante => console.log(estudante.nome));
