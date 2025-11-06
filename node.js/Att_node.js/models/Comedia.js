import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Comedia = connection.define("comedia", {
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

Comedia.sync({ force: false });

export default Comedia;