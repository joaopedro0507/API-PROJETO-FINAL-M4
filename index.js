const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Render define a porta

// Importação das rotas
const campanhaRoutes = require("./routes/campanhaRoutes");
const denunciaRoutes = require("./routes/denunciaRoutes");

app.use(express.json());
//Comentário teste
// Rota raiz
app.get("/", (req, res) => {
  res.send("🚀 API Antirracismo está online!");
});
//teste 2
// Prefixos das rotas
app.use("/campanhas", campanhaRoutes);
app.use("/denuncias", denunciaRoutes);

// teste Tábata
// Inicia servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
