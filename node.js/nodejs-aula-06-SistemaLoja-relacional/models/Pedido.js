import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define("pedidos", {
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  
  //novo atributo a ser criado
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

// essa linha cria a tabela no banco: Pedido.sync({ force: false });
// force:false não força a criacao de uma nova tabela se ela já existir

export default Pedido;
