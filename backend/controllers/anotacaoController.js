import { where } from "sequelize";
import Anotacao from "../models/anotacaoModel.js";

async function listar(req, res) {
    try {
        // findAll é equivalente ao "select * from tb_anotacao"
        const anotacoes = await Anotacao.findAll();
        res.status(200).json(anotacoes);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao listar anotações",
            error,
        });
    }
}

async function obterPorID(req, res) {
    // atribuir um nome a variavel e pegar o nome que está no params
    const { id } = req.params;
    try {
        const anotacaoBuscada = await obterPorIDInterno(id);

        // se não for encontrada
        if (!anotacaoBuscada) {
            return res.status(404).json({
                message: "Anotação não encontrada",
            });
        }

        res.status(200).json({ anotacaoBuscada });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar anotação",
            error,
        });
    }
}

async function criar(req, res) {
    const { descricao, data_criacao, id_usuario } = req.body;

    try {
        let novaAnotacao = {
            descricao: descricao,
            data_criacao: data_criacao,
            finalizado: false,
        };

        if (id_usuario != undefined) {
            // adicione uma nova propriedade, com o valor do id do usuario
            novaAnotacao.id_usuario = id_usuario;
        }

        const anotacaoCriada = await Anotacao.create(novaAnotacao);
        res.status(201).json({
            message: "Anotação criado com sucesso!",
            anotacaoCriada,
        });
    } catch (error) {
        res.status(500).json({
            message: "Ocorreu um erro inesperado",
            error,
        });
    }
}

async function atualizar(req, res) {
    const { id } = req.params; // processo de desestruturação

    const { descricao, finalizado } = req.body;
    let propEscolhida = {};

    try {
        const anotacaoBuscada = await obterPorIDInterno(id);

        if (!anotacaoBuscada) {
            return res.status(404).json({
                message: "Essa anotação não existe em nossa base de dados",
            });
        }

        // se for diferente de não definido
        if (descricao != undefined) {
            propEscolhida.descricao = descricao;
        } else if (finalizado != undefined) {
            propEscolhida.finalizado = finalizado;
        }

        // o metodo update do sequelize vale para os verbos put e patch
        await anotacaoBuscada.update(propEscolhida);

        res.status(200).json({
            message: "Anotação atualizada com sucesso",
            anotacaoBuscada,
        });
    } catch (error) {
        res.status(500).json({
            message: "Ocorreu um erro ao atualizar a anotação",
            error,
        });
    }
}

async function deletar(req, res) {
    const { id } = req.params;

    try {
        const anotacaoBuscada = await obterPorIDInterno(id);

        if (!anotacaoBuscada) {
            return res.status(404).json({
                message: "Essa anotação não existe em nossa base de dados",
            });
        }

        await anotacaoBuscada.destroy({
            where: { id_anotacao : id },
        });

        res.status(200).json({
            message: "Anotação excluída com sucesso"
        })
    } catch (error) {
        res.status(500).json({
            message: "Ocorreu um erro ao deletar a anotação",
            error,
        });
    }
}

async function obterPorIDInterno(id) {
    try {
        return await Anotacao.findByPk(id);
    } catch (error) {
        return error;
    }
}

export default { listar, obterPorID, criar, atualizar, deletar };
