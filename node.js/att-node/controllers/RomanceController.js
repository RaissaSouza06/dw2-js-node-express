// importando o express
import express from "express"
const router = express.Router()

// ROTA DE ROMANCE - retirada do index.js
router.get("/romance", (req, res) => {
    // trocar app.get por router.get
  const romance = [
    {numero:"1", nome: "After", ator: "Tessa e Hardin"},
    {numero:"2", nome: "A cinco pés de distancia", ator: "Stella e Will"},
    {numero:"3", nome: "Uma linda mulher", ator: "Vivian e Edward"},
    {numero:"4", nome: "Com carinho kitty", ator: "Kitty e Min Ho"},
    {numero:"5", nome: "O plano imperfeito", ator: "Harper e Charlie"},
  ];

  res.render("romance", {
    romance:romance
  });
});

// exportando o objeto router
export default router;
