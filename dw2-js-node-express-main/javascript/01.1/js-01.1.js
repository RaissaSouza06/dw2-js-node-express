/*formas de declarar variáveis: var, let e const
VAR: no geral evite seu uso, pode não ser muito seguro
LET: utilize quando for necessário reatribuir o valor da variável, exp: let nome = "maria", e dps let nome = "pedro", 
nome fica com dois valores. No let pode só declarar a variavel sem atribuir um valor.
CONST: não há como reatribuir valor, apenas um valor, utilize quando não precisar reatribuir o valor da variavel. 
No const não pode declarar a variavel sem atribuir um valor.

declaração(declara a variavel, não precisa atribuir um valor, exp: var nome) X atribuição(atribui valor a variavel)*/
// var nome = "raissa"
// var nome = "ana"
// let cidade = "registro"
// let cidade = "cajati" // NÃO PODE
// let endereço
// endreco = "japao"
// const idade // NÃO PODE
// const idade = 18
// idade = 20 // NÃO PODE

//tipos de funções
//FUNÇÃO SIMPLES:
const message = "<h2>Olá Bem-vindo! Essa é sua primeira função!</h2>";
// variavel atribui a mensagem
function showMessage() {
  document.write(message);
  //o que a função vai executar fica aqui
}
// invocando a função, se não ela não aparece
showMessage();

//FUNÇÃO COM PARÂMETROS:
//parâmetro = valor passado p função que ela vai usar
const user = "Raissa a mais mais";
function userMessage(user) {
  //essa função recebe um parâmetro
  //nome do parametro não precisa ser igual ao da variavel
  document.write(`<h3>O que deseja fazer hoje, ${user}?</h3>`);
  // usar ${} apenas entre CRASES ``
  // ${} -> template strings / literal strings // opção usada no lugar de concatenar
  // template strings é usada para inserir variaveis dentro de strings (aspas)
}
userMessage(user); // ARGUMENTO = o que estou enviando p função, esta fora dela, tem que ter o nome igual
// SHIFT+ALT+F = formatar o código

//---------------------------------------------------------------------------------------------------------------

//FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1=10;
const n2=12;

function mult(n1,n2){
  //essa função recebe dois parâmetros
  let result = n1*n2;
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}`);
} mult(n1,n2);

//---------------------------------------------------------------------------------------------------------------

//FUNÇÃO COM DIFERENTES RETORNOS (USA RESTRUTUR ACONDICIONAL)
const number = 5;
function parImpar(number){
  if(number%2==0){
    return "par";
  } else {
    return "ímpar";
  }
}
  document.write(`<br>O número ${number} é <strong> ${parImpar(number)} </strong>`);


