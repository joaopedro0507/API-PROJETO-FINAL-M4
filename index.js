const express = require('express');
const app = express();
const port = 3000;

// Importação das rotas
const rotasCampanha = require('./routes/campanhaRoutes');
const rotasDenuncias = require('./routes/denunciaRoutes');

app.use(express.json());

// Prefixos das rotas
app.use('/campanha', rotasCampanha);
app.use('/denuncias', rotasDenuncias);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);};
