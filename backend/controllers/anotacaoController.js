import Anotacao from "../models/anotacaoModel.js";

async function listar(req, res) {
    try {
        // findAll é equivalente ao "select * from tb_anotacao"
        const anotacoes = await Anotacao.findAll();
        res.status(200).json(anotacoes);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar anotações",
            error,
        });
    }
}

async function obterPorID(req, res) {
    const {id} = req.params;
    try {
        const anotacaoBuscada = await obterPorIDInterno(id);

        // se não for encontrada
        if (!anotacaoBuscada) {
            return res.status(204).json({
                message: "Anotação não encontrada"
            })
        }

        res.status(200).json({anotacaoBuscada});

    } catch (error) {
        res.status(500).json({
            message: "Erro inesperado",
            error,
        });
    }
}

async function criar(req, res) {
    const {
        descricao,
        data_criacao,
        id_usuario
    } = req.body;

    try {
        let novaAnotacao = {
            descricao: descricao,
            data_criacao: data_criacao,
            finalizado: false
        };

        if (id_usuario != undefined) {
            // adicione uma nova propriedade, com o valor do id do usuario
            novaAnotacao.id_usuario = id_usuario
        }

        const anotacaoCriada = await Anotacao.create(novaAnotacao)
        res.status(201).json({
            message: "Anotação criado com sucesso!",
            anotacaoCriada
        })
    } catch (error) {
        res.status(500).json({
            message: "Ocorreu um erro inesperado",
            error
        })
    }
}

async function atualizar(req, res) {

}

async function deletar(req, res) {

}

async function obterPorIDInterno(id) {
    try {
        return await Anotacao.findByPk(id)
    } catch (error) {
        return error
    }
}

export default {listar, obterPorID, criar, atualizar, deletar}