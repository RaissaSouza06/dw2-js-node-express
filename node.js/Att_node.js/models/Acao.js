import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Acao = connection.define("acao", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ator: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Acao.sync({ force: false });

export default Acao;
