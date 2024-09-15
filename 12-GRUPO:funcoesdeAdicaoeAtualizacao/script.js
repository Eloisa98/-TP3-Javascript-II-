let estoque = [];

function adicionarProduto(nome, quantidade, precoUnitario) {
    const produtoExistente = estoque.find(produto => produto.nome === nome);
    
    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
        return `Produto ${nome} atualizado. Nova quantidade: ${produtoExistente.quantidade}`;
    } else {
        const novoProduto = {
            nome: nome,
            quantidade: quantidade,
            precoUnitario: precoUnitario
        };
        estoque.push(novoProduto);
        return `Produto ${nome} adicionado ao estoque.`;
    }
}

function atualizarProduto(nome, quantidade) {
    const produto = estoque.find(produto => produto.nome === nome);
    
    if (produto) {
        produto.quantidade = quantidade;
        return `Quantidade do produto ${nome} atualizada para ${quantidade}.`;
    } else {
        return `Produto ${nome} não encontrado no estoque.`;
    }
}


console.log(adicionarProduto('Boné', 20, 30)); 
console.log(atualizarProduto('Calça', 12)); 
console.log(adicionarProduto('Calça', 15, 50)); 
console.log(atualizarProduto('Calça', 12)); 
console.log(estoque); 
