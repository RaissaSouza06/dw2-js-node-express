import express from "express";
const router = express.Router();

//importando o Model de cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) =>{  //select * from Cliente, o then retorna com um pacotinho clientes
  res.render("clientes", {
    clientes:clientes,
    });
  });
});

export default router;
