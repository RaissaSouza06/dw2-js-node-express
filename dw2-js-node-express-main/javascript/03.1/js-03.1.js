// Classes = uma forma de criar objetos e organizar o código de forma mais clara
//são modelos p criar diversos objetos com as mesmas propriedades e métodos
//criar instancias - objetos que derivam de uma clase, a classe serve como um grande modelo
//---------------------------------------------------------------------------------------------------------------------

class Carro {    //Nome de classe inicia com letra MAIUSCULA
  constructor(marca, modelo, ano) {  //método constructor para criar os atributos, todo carro terá marca,modelo e ano
    this.marca = marca; //esta marca vai ser alterada como valor que eu enviar para o parametro marca
    this.modelo = modelo; // this representa a instancia(objeto), o valor que for enviado a classe sera atribuido a instancia
    this.ano = ano;
  }
  buzinar() { //métodos
    return "Beep! Beep!";
  }
}

//Criando instancias(objetos) derivadas da classe carro
const carroPopular = new Carro("Fiat", "Uno", 2012);  //Objeto carroPopular
document.write(
    `<p>Carro ${carroPopular.marca}, modelo ${carroPopular.modelo}, é do ano de ${carroPopular.ano}.<br>
    Quando buzina faz ${carroPopular.buzinar()}
    </p><hr>`
)

const carroEsportivo = new Carro(); //Objeto carroEsportivo, outra maneira de fazer
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = 2024
document.write(
    `<p>Carro ${carroEsportivo.marca}, modelo ${carroEsportivo.modelo}, é do ano de ${carroEsportivo.ano}.<br>
    Quando buzina faz ${carroEsportivo.buzinar()}
    </p><hr>`
)

//Adicionar umnovo atributo a um objeto
carroEsportivo.corNeon = "Azul";

//Adicionar novos métodos a umobjeto
carroEsportivo.Turbo = () => {
    return "Vrummmmmmmmmmmmmmmmmmm! O carro acelera muito!!!";
};

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}.
    E quando usa turbo ${carroEsportivo.Turbo()}</p>`)