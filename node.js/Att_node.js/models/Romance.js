import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Romance = connection.define("romance", {
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

Romance.sync({ force: false });

export default Romance;