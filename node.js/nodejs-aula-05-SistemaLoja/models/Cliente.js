// é no model que criaremos a estrutura da tabela do bd
import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";


//definindo a estrutura da tabela
const Cliente = connection.define('clientes', { // método define cria uma nova tabela
    nome: {
        type: Sequelize.STRING,
        allowNull: false, //esse campo não pode ser nulo
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

// sincronizando a tabela como bd
Cliente.sync({force: false}) //não forca acriação da tabela novamente

export default Cliente;