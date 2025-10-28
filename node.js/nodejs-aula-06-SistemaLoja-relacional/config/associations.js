// todos os relacionamentos do projeto ficam nessa pasta

import Pedido from "../models/Pedido.js";
import Cliente from "../models/Cliente.js";

// Definindo as realçaoes entre as entidades (tabelas)
// a função pode ter o nome que vc quiser
const defineAssociations = () => {
    Cliente.hasMany(Pedido, {foreignKey:"cliente_id"}); //hasMany = possui muitos
    Pedido.belongsTo(Cliente, {foreignKey:"cliente_id"}); //belongsTo = pertence a
};

export default defineAssociations;