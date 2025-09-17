document.write("<h2>Classes: Fábrica de Heróis</h2>")

class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "herói correndo!!!";
  }
  andar() {
    return "herói andando!!!";
  }
  atacar() {
    return "herói atacando!!!";
  }
  defender() {
    return "herói defendendo!!!";
  }
}

//Criando instancias(objetos) derivadas da classe herói
const homemAranha = new Heroi("Homem-Aranha", 10, 50, 100);
homemAranha.teia = "1";
homemAranha.sentidoAranha = () => {
  return "Perigo detectado!!!";
};

document.write(
  `<p>Herói: ${homemAranha.nome} <br> 
    Vida: ${homemAranha.vida} <br> 
    Velocidade: ${homemAranha.velocidade} <br>
    Força: ${homemAranha.forca} <br>
    ${homemAranha.sentidoAranha()}
    </p><br>`
);

//Criando instancias(objetos) derivadas da classe herói
const superman = new Heroi("Superman", 20, 500, 400);
superman.podeVoar = "1";
superman.visaoCalor = () => {
  return "Usando visão de calor!!!";
};

document.write(
  `<p>Herói: ${superman.nome} <br> 
    Vida: ${superman.vida} <br> 
    Velocidade: ${superman.velocidade} <br>
    Força: ${superman.forca} <br>
    ${superman.visaoCalor()}
    </p><br>`
);

//Criando instancias(objetos) derivadas da classe herói
const batman = new Heroi("Batman", 50, 1000, 53400);
batman.esconder = "1";
batman.investigar = () => {
  return "Investigando um crime!!!";
};

document.write(
  `<p>Herói: ${batman.nome} <br> 
    Vida: ${batman.vida} <br> 
    Velocidade: ${batman.velocidade} <br>
    Força: ${batman.forca} <br>
    ${batman.investigar()}
    </p><br>`
);
