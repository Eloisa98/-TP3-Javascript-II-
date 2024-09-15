
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const projectFolder = process.argv[2] || path.join(__dirname, '16-GRUPO:marcarTarefascomoConcluidaseFiltrar'); 

if (!projectFolder) {
  console.error('Caminho para a pasta do projeto não especificado.');
  process.exit(1);
}

app.use(express.static(projectFolder));

app.get('/', (req, res) => {
  res.sendFile(path.join(projectFolder, 'index.html'), err => {
    if (err) {
      console.error('Erro ao enviar o arquivo HTML:', err);
      res.status(500).send('Erro ao carregar o arquivo HTML.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});