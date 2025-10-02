// é no model que criaremos a estrutura da tabela do bd
import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";


//definindo a estrutura da tabela
const Pedido = connection.define('pedidos', { // método define cria uma nova tabela
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false, 
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
})

// sincronizando a tabela como bd
Pedido.sync({force: false}) //não forca a criação da tabela novamente

export default Pedido;