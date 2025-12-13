import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


const Usuario = sequelize.define(
    "Usuario", 
    {
        // colunas da tabela tb_usuario
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_nasc: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        tableName: "tb_usuario",
        timestamps: false, // desabilita os atributos createdAt e updatedAt
    }
);

export default Usuario;