import express from "express"
const router = express.Router()

// ROTA DE PEDIDOS
router.get("/pedidos", (req, res) => {
  const pedidos = [
    {numero:"1", produto: "Notebook", valor: "3800"},
    {numero:"2", produto: "Computador", valor: "4000"},
    {numero:"3", produto: "Tablet", valor: "2000"},
    {numero:"4", produto: "Celular", valor: "3000"},
  ];

  res.render("pedidos", {
    pedidos:pedidos
  });
});

export default router;