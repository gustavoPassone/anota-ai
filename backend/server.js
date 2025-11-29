import express from "express";
import { sequelize } from "./config/db.js";

const app = express();

sequelize
  .authenticate()
  .then(() => console.log("Banco autenticado com sucesso"))
  .catch((error) => console.log(`Erro na autenticação: ${error}`));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
