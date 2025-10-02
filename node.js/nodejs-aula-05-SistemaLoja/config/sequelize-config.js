// importando o sequelize
import Sequelize from "sequelize";

//criando os dados de conexão com o banco de dados
const connection = new Sequelize ({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    //definindo o banco de dados da aplicação
    database: "nossaloja",
    timezone: "-03:00"

});

export default connection;