import express, { json } from 'express';
const app = express();
const port = 3000;

// Importação das rotas
import rotasCampanha from './routes/campanhaRoutes';
import rotasDenuncias from './routes/denunciaRoutes';

app.use(json());

// Prefixos das rotas
app.use('/campanha', rotasCampanha);
app.use('/denuncias', rotasDenuncias);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
