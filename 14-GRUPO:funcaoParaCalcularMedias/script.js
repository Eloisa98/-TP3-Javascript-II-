const estudantes = [
  { nome: 'João', notas: [7.5, 8.0, 9.0], situacao: '' },
  { nome: 'Maria', notas: [5.5, 6.0, 6.5], situacao: '' },
  { nome: 'Pedro', notas: [9.5, 8.5, 9.0], situacao: '' }
];

const calcularMedia = notas => (
  notas.reduce((total, nota) => total + nota, 0) / notas.length
).toFixed(2);

const atualizarSituacao = estudante => {
  const media = calcularMedia(estudante.notas);
  estudante.situacao = media >= 6.0 ? 'Aprovado' : 'Recuperação';
};

const verificarRecuperacao = (estudantes, index = 0, recuperacao = []) => {
  if (index >= estudantes.length) return recuperacao;
  const estudante = estudantes[index];
  if (calcularMedia(estudante.notas) < 6.0) {
      recuperacao.push(estudante);
  }
  return verificarRecuperacao(estudantes, index + 1, recuperacao);
};

const gerarRelatorio = () => {
  estudantes.forEach(estudante => {
      atualizarSituacao(estudante);
      console.log(`Nome: ${estudante.nome}`);
      console.log(`Notas: ${estudante.notas.join(', ')}`);
      console.log(`Média: ${calcularMedia(estudante.notas)}`);
      console.log(`Situação: ${estudante.situacao}`);
      console.log('---------------------------');
  });
};

gerarRelatorio();
console.log('Estudantes em recuperação:');
verificarRecuperacao(estudantes).forEach(estudante => console.log(estudante.nome));
let tarefas = [
  { id: 1, descricao: 'Comprar mantimentos', concluida: false },
  { id: 2, descricao: 'Estudar JavaScript', concluida: true },
  { id: 3, descricao: 'Ler um livro', concluida: false }
];

const adicionarTarefa = (descricao) => {
  const novaTarefa = { id: tarefas.length + 1, descricao, concluida: false };
  tarefas = [...tarefas, novaTarefa];
};

const editarTarefa = (id, novaDescricao) => {
  tarefas = tarefas.map(tarefa => tarefa.id === id ? { ...tarefa, descricao: novaDescricao } : tarefa);
};

const removerTarefa = (id) => {
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
};

const visualizarTarefas = () => {
  tarefas.forEach(tarefa => {
      console.log(`ID: ${tarefa.id}, Descrição: ${tarefa.descricao}, Concluída: ${tarefa.concluida}`);
  });
};

const marcarComoConcluida = (id) => {
  tarefas = tarefas.map(tarefa => tarefa.id === id ? { ...tarefa, concluida: true } : tarefa);
};

adicionarTarefa('Fazer exercícios físicos');
editarTarefa(2, 'Estudar JavaScript e TypeScript');
marcarComoConcluida(1);
removerTarefa(3);
visualizarTarefas();

