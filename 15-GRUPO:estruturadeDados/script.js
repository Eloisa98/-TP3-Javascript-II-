let tarefas = [];

const adicionarTarefa = (descricao, prioridade) => {
    const novaTarefa = {
        id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1, 
        descricao: descricao,
        concluida: false,
        prioridade: prioridade
    };
    tarefas.push(novaTarefa);
};

const editarTarefa = (id, novaDescricao, novaPrioridade) => {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.descricao = novaDescricao;
        tarefa.prioridade = novaPrioridade;
    } else {
        console.log(`Tarefa com ID ${id} não encontrada.`);
    }
};

const removerTarefa = (id) => {
    tarefas = tarefas.filter(t => t.id !== id);
};

adicionarTarefa('Ler um livro', 'baixa');
adicionarTarefa('Fazer exercícios', 'média');
console.log('Tarefas após adição:', tarefas);

editarTarefa(1, 'Estudar JavaScript intensivamente', 'alta');
removerTarefa(2);
console.log('Tarefas após edição e remoção:', tarefas);
