import express from "express";
import { sequelize } from "./config/db.js";
import routesAnotacao from "./routes/anotacaoRoute.js";

const app = express(); // 1°
app.use(express.json()) // 2°
app.use("/", routesAnotacao)

sequelize
    .authenticate()
    .then(() => console.log("Banco autenticado com sucesso"))
    .catch((error) => console.log(`Erro na autenticação: ${error}`));

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
