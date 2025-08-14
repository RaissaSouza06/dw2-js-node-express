// ARRAYS - servem para armazenar uma lista, ou seja, diferentes elementos em uma única variável
// cada elemento precisa estar entre aspas sozinho
const products = ["Computador", "Notebook", "Celular", "Tablet"]
document.write(`<p>${products}</p>`)
document.write(typeof(products))
document.write(`<br><br><p>Exibindo um elemento do array através do índice:</p>`)
document.write(`<p>${products[1]}</p>`)

// forEach
document.write(`<br><p>Exibindo um array através do forEach:</p>`)
products.forEach(produto =>{
    document.write(`<p>${produto}</p>`)
})

// numerando os items
document.write(`<br><p>Mostrando os índices e valores com forEach:</p>`)
products.forEach((produto, i) => {
    document.write(`<p>${i+1} - ${produto}</p>`)
})
