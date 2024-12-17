import express from 'express';
import routes from './src/routes/routes.js'; 

const app = express();

// Middleware 
app.use(express.json());

// Definindo a rota principal
app.use('/api', routes); // As rotas estarão no caminho /api


app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});

export default app; // Exporta o app para testes, caso necessário