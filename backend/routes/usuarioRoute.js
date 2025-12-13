import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const routes = Router();

routes
    .get("/usuario", usuarioController.listar)
    .get("/usuario/:id", usuarioController.obterPorID)
    .post("/usuario", usuarioController.criar)
    .patch("/usuario/:id", usuarioController.atualizar)
    .delete("/usuario/:id", usuarioController.deletar);

export default routes;
