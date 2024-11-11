// app.js

const express = require('express');
const app = express();
const adotantesRoutes = require('./routes/adotantes'); // Importa as rotas de adotantes

app.use(express.json()); // Middleware para aceitar JSON no corpo da requisição


app.use('/adotantes', adotantesRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
