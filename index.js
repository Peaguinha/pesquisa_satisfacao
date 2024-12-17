import express from 'express';
import path from 'path'; 
import routes from './src/routes/routes.js'; // Importando as rotas

const app = express();

// Middleware para servir o favicon
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'favicon.ico')));

// Middleware para tratar requisições no formato JSON
app.use(express.json());

// Definindo a rota principal
app.use('/api', routes); // As rotas estarão no caminho /api

// Iniciando o servidor na porta 4000
app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});

export default app; // Exporta o app para testes, caso necessário
