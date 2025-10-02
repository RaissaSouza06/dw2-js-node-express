import express from "express"
const app = express();

import RomanceController from "./controllers/RomanceController.js"
import AcaoController from "./controllers/AcaoController.js"
import ComediaController from "./controllers/ComediaController.js"

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", RomanceController)
app.use("/", AcaoController)
app.use("/", ComediaController)

app.get("/", (req, res) => {
  res.render("index"); //coloco entre parenteses a pasta que quero renderizar(só o nome, não preciso nem do enderenço, nem da extenção)
});

app.get("/perfil/:user", (req, res) => {
  const user = req.params.user
  res.render("perfil", {
    user: user,
  });
});


const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});