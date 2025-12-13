import Usuario from "../models/usuarioModel.js";

async function listar(req, res) {
    try {
        const usuarios = await Usuario.findAll({
            attributes: { exclude: ["senha"] }, // não retornar senha
        });

        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao listar usuarios",
            error,
        });
    }
}

async function obterPorID(req, res) {
    const { id } = req.params;
    try {
        const usuarioBuscado = await obterPorIDInterno(id, {
            attributes: { exclude: ["senha"] },
        });

        if (!usuarioBuscado) {
            return res.status(404).json({
                message: "Usuário não encontrado",
            });
        }

        res.status(200).json({ usuarioBuscado });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar usuário ",
        });
    }
}

async function criar(req, res) {
    const { nome, email, senha, data_nasc } = req.body;

    try {
        const usuarioCriado = await Usuario.create({
            nome,
            email,
            senha,
            data_nasc,
        });

        res.status(201).json({
            message: "Usuário criado com sucesso",
            id_usuario: usuarioCriado.id_usuario,
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao criado usuário",
            error,
        });
    }
}

async function atualizar(req, res) {
    const { id } = req.params; // processo de desestruturação

    const { nome, email, senha, data_nasc } = req.body;
    let propEscolhida = {};

    try {
        const usuarioBuscado = await obterPorIDInterno(id);

        if (!usuarioBuscado) {
            return res.status(404).json({
                message: "Esse usuário não existe em nossa base de dados",
            });
        }

        await usuario.update({
            nome,
            email,
            senha,
            data_nasc,
        });

        res.status(200).json({
            message: "Usuário atualizado com sucesso",
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao atualizar usuário",
            error,
        });
    }
}

async function deletar(req, res) {
    const { id } = req.params;

    try {
        const usuarioBuscado = await obterPorIDInterno(id);

        if (!usuarioBuscado) {
            return res.status(404).json({
                message: "Esse usuário não existe em nossa base de dados",
            });
        }

        await usuarioBuscado.destroy({
            where: { id_usuario: id },
        });

        res.status(200).json({
            message: "Usuário deletado  com sucesso",
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao deletar usuário",
            error,
        });
    }
}

async function obterPorIDInterno(id) {
    try {
        return await Usuario.findByPk(id);
    } catch (error) {
        return error;
    }
}

export default { listar, obterPorID, criar, atualizar, deletar };
