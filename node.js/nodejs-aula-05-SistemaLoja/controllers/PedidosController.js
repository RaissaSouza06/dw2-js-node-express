import express from 'express'
const router = express.Router()
import Pedido from "../models/Pedido.js";

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Pedido.findAll().then((pedidos) =>{ 
  res.render("pedidos", {
    pedidos:pedidos,
    });
  });
});

// ROTA PARA CADASTRAR 
router.post("/pedidos/new", function (req, res) { 
  //coletando os dados do formulario
  const numero = req.body.numero  
  const valor = req.body.valor
  Pedido.create({  
    numero : numero,
    valor : valor
  }).then(() => {
    res.redirect("/pedidos");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EXCLUSÃO
router.get("/pedidos/delete/:id", (req, res) =>{ //:id é um parametro obrigatório
  const id = req.params.id 
  Pedido.destroy({
    where : {
      id : id,
    },
  }).then(() => {
    res.redirect("/pedidos");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EDIÇÃO 
router.get("/pedidos/edit/:id", (req, res) =>{ 
  const id = req.params.id  
  Pedido.findByPk(id).then(pedido => {
    res.render("pedidoEdit", {
      pedido : pedido
    });
  });
});

//ROTA DE ALTERAÇÃO 
router.post("/pedidos/update", (req, res) => {
  const id = req.body.id //usar body para buscar coisas que vem do body, como o formulario
  const numero = req.body.numero
  const valor = req.body.valor
  Pedido.update({
    numero : numero,
    valor : valor
  },
  { where : {id : id}}
  ).then (() => {
    res.redirect("/pedidos");
  }).catch(error => {
    console.log(error)
  })
})

export default router;
