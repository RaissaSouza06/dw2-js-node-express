document.write("<h3>Manipulando datas: </h3>");

//criar uma instancia da classe date (classe nativa do js)
const dataAtual = new Date();
document.write(dataAtual); //mostra dia da semana, mes, dia, ano, horario

//mostra o dia atual
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia}</p>`);

//mostra o mes atual, ele começa a contar o mes pelo 0
const mes = dataAtual.getMonth();
document.write(`<p>Estamos no mês: ${mes + 1}</p>`);

//mostra o ano atual
const ano = dataAtual.getFullYear();
document.write(`<p>Ano atual: ${ano}</p>`);

//mostra o dia da semana
const diaSemana = dataAtual.getDay();
document.write(`<p>Dia da semana: ${diaSemana}</p>`);

//Adicionando dias, meses e anos
//adicionando 4 anos ao ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}</p>`);

//adicionando meses
dataAtual.setMonth(dataAtual.getMonth() + 3);
document.write(`<p>Daqui a 3 meses será: ${dataAtual.getMonth()}</p>`);

//adiconando dias
dataAtual.setDate(dataAtual.getDate() + 7);
document.write(`<p>Daqui a 7 dias será: ${dataAtual.getDate()}</p><hr>`);

//--------------------------------------------------------------------------------------------------

//FORMATAÇÃO DE MOEDAS
document.write("<h3>Formatação de moedas</h3>");

//real
const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
}); //passa a formatacao p uma local
document.write(`<p>O valor do salário mínimo atual é: ${salarioReal}</p>`);

//dólar - conversão apenas da formatação
const salarioDolar = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "USD",
}); //passa a formatacao p uma local
document.write(`<p>O salário em dólar: ${salarioDolar}</p>`);

//dólar - conversão do valor
const salarioConvertido = salario * 0.176;
document.write(
  `<p>O salário em valor de dólar: ${salarioConvertido.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })}</p><hr>`
);

//--------------------------------------------------------------------------------------------------

//FORMATAÇÃO DE STRING
document.write("<h3>Formatação de strings</h3>");
const nome = "Raissa linda";

//alterando p letra maisucula
document.write(`<p>Nome em maiúscula: ${nome.toUpperCase()}</p>`);

//alterando p letra minuscula
document.write(`<p>Nome em minúscula: ${nome.toLocaleLowerCase()}</p>`);

//removendo os espaços da string para poder contar certo 
const novoNome = nome.replace(/\s/g, "")
//conta quantos caracteres tem a string - .length
document.write(`<p>Esse nome tem: ${novoNome.length} letras</p>`);
