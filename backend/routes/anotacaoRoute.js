import { Router } from "express";
import anotacaoController from "../controllers/anotacaoController.js";

// Router do express para config as rotas
const routes = Router();

routes
    .get("/anotacao", anotacaoController.listar)
    .get("/anotacao/:id", anotacaoController.obterPorID)
    .post("/anotacao", anotacaoController.criar)
    .patch("/anotacao/:id", anotacaoController.atualizar)
    .delete("/anotacao/:id", anotacaoController.deletar);

export default routes;
