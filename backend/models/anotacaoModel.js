import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Anotacao = sequelize.define(
    "Anotacao",
    {
        // colunas da tabela tb_anotacao
        id_anotacao: {
            type: DataTypes.INTEGER, // define o tipo do atributo
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_criacao: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        data_finalizacao: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        finalizado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        tableName: "tb_anotacao",
        timestamps: false, // desabilita os atributos createdAt e updatedAt
    }
);

export default Anotacao;