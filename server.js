
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Recebe o caminho da pasta do projeto como argumento
const projectFolder = process.argv[2] || path.join(__dirname, '1-DefinicaoeChamadaDeFuncoes'); 

// Verifica se o caminho foi passado e existe
if (!projectFolder) {
  console.error('Caminho para a pasta do projeto não especificado.');
  process.exit(1);
}

// Servir arquivos estáticos (CSS, JS, etc.)
app.use(express.static(projectFolder));

// Roteia a requisição para o arquivo HTML principal
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