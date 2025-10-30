import express from "express";
import Pedido from "../models/Pedido.js";
// importando o models de cliente p conseguir fazer o innerjoin
import Cliente from "../models/Cliente.js";
const router = express.Router();

//importando o middlearw de autenticação 
import Auth from "../middleware/Auth.js";

// ROTA PEDIDOS
router.get("/pedidos", Auth, function (req, res) {
  // realiza ambas as consutas em paralelo dentro de uma promessa
  Promise.all([
  Pedido.findAll({
    // fazendo um INNERJOIN com a tabela de clientes
    include: [
      {
        model : Cliente, //inclui o models cliente que esta relacionado
        require : true, // garante que somente pedidos com clientes sejam retornados
      }
    ]
  }),
  Cliente.findAll(),
])

    .then(([pedidos, clientes]) => {
      res.render("pedidos", {
        pedidos: pedidos,
        clientes: clientes,
      });
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new", Auth, (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  const clienteId = req.body.clienteId;
  Pedido.create({
    numero: numero,
    valor: valor,
    cliente_id: clienteId,
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/pedidos/delete/:id", Auth, (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: {id: id}
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

export default router;
