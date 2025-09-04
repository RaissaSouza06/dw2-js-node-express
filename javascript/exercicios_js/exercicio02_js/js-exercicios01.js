document.write("<h2>Arrays e Objetos: Gerenciamento de Clientes</h2>")

const listaClientes = [
  {
    nome: "Raissa",
    endereco: "rua presidente antonio telma, 65, centro",
    cpf: 154267386543,
  },
  {
    nome: "Gisely",
    endereco: "Cafundó de judas, 00",
    cpf: 10984762524,
  },
  {
    nome: "Antonia",
    endereco: "Avenia são paulo, 513",
    cpf: 264738519276,
  },
];

listaClientes.forEach((cliente) => { //cria um novo q representa um item da lista
  document.write(`
        Nome: ${cliente.nome}<br>
        Endereço; ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `);
}); 


 // Adicionar cliente no FINAL
    listaClientes.push({
      nome: "Ana Maria",
      endereco: "Rua Central, 5421",
      cpf: 48736258476,
    });

    document.write("<h3>Após adicionar no FINAL</h3>");
    listaClientes.forEach((cliente) => {
      document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
      `);
    });

    // Adicionar cliente no INÍCIO
    listaClientes.unshift({
      nome: "Joãõ Marcos",
      endereco: "Av. Brasil, 3499",
      cpf: 19254323476,
    });

    document.write("<h3>Após adicionar no INÍCIO</h3>");
    listaClientes.forEach((cliente) => {
      document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
      `);
    });