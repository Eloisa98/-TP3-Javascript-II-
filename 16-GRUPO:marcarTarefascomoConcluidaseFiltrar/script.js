let tarefas = [
    { id: 1, descricao: 'Estudar JavaScript', prioridade: 'alta', concluida: false },
    { id: 2, descricao: 'Comprar mantimentos', prioridade: 'media', concluida: false },
    { id: 3, descricao: 'Ler um livro', prioridade: 'baixa', concluida: true },
    { id: 4, descricao: 'Praticar programação', prioridade: 'alta', concluida: false }
  ];
  
  const marcarConcluida = (id) => {
    tarefas = tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    );
  };
  
  const listarPorPrioridade = (prioridade) =>
    tarefas.filter(tarefa => tarefa.prioridade === prioridade);
  
  const gerarRelatorio = () =>
    tarefas.map(tarefa => 
        `ID: ${tarefa.id}, Descrição: ${tarefa.descricao}, Status: ${tarefa.concluida ? 'Concluída' : 'Pendente'}`  
    ).join('\n');
  
  const resumoTarefas = () => {
    return tarefas.reduce((resumo, tarefa) => {
        resumo.total += 1;
        if (tarefa.concluida) {
            resumo.concluidas += 1;
        } else {
            resumo.pendentes += 1;
        }
        return resumo;
    }, { total: 0, concluidas: 0, pendentes: 0 });
  };
  
  marcarConcluida(2);
  console.log(listarPorPrioridade('alta'));
  console.log(gerarRelatorio());
  console.log(resumoTarefas());
  