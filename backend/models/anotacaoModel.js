import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Anotacao = sequelize.define("Anotacao",
    {
        // colunas da tabela tb_anotacao
        id_anotacao:{
            type: DataTypes.INTEGER, // define o tipo do atributo
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descricao:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);
