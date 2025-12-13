// configuração do mysql

// Sequelize conecta com o banco e converte o resultado das querys em objetos
import { Sequelize } from "sequelize";
import "dotenv/config.js"

// pegando uma variavel de ambiente do .env
const dbNome = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

// conexão com o mysql
const sequelize = new Sequelize(
    dbNome, 
    dbUser, 
    dbPassword, 
    {
        dialect: "mysql", 
        host: dbHost,
        port: dbPort
    });

export { sequelize }; // export nomeado. ao importar precisa colocar o mesmo nome do arquivo de origem
