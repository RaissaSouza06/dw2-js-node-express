//OBJETOS LITERAIS (não derivam de classes) - usado p agrupar valores que possuem propriedades e funções(ações que ele executa)
//Possuem Atributos e Métodos
//Sintaxe igual ao da array mas troca a [] por {}
/**
 * let carro = {
 *     modelo: 'gol',
 *     cor: 'vermelho',
 *     acelerar(){
 *          console.Log('Acelerando..')
 *      },
 *     frear(){
 *          console.Log('Freando..')
 *      },
 *   }
 *
 * chaves = modelo e cor
 * valores = gol, vermelho
 * chave + valor = atributos
 * funções = métodos
 *
 * quero mostrar modelo do objeto - ${carro.modelo} (vai exibir gol)
 * quero mostrar uma função do objeto - carro.acelerar()
 */

//ARRAY DE OBJETOS - uma lista de objetos que possuem propriedades e funções
//FOREACH - para percorrer o array do objeto

const pessoa = {};
document.write(typeof pessoa); //fala de que tipo é a variavel - tipagem dinamica

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    return "Acelerando..";
  },
  frear() {
    return "Freando..";
  },
};
//SHIFT+ALT+F - formatação automática

//Exibindo as propriedades do objeto
document.write(`<p>O modelo do carro é ${carro.modelo}</p>`);
document.write(`<p>A cor do carro é ${carro.cor}</p>`);
document.write(`<p>${carro.acelerar()}</p>`);
document.write(`<p>${carro.frear()}</p><hr>`);
//ALT+ENTER - configurar atalhaos para inserir <p>

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "Pc moderno com bom desempenho",
};

document.write(
  `<p>${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}! ${produto.descricao}</p><hr>`
);

//ARRAY DE OBJETOS (lista de produtos)
const listaProduto = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "Pc moderno com bom desempenho",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de desempenho",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao: "Ultra resistente",
  },
];

//Exibindo o Array de objetos com forEach
listaProduto.forEach((produto) => { //cria um novo q representa um item da lista
  document.write(`
        Produto: ${produto.nome}<br>
        Marca; ${produto.marca}<br>
        Preço: ${produto.preco}<br>
        Descrição: ${produto.descricao}<br><br>
        `);
}); 
