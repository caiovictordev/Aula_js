let produtos = +prompt("Quantos produtos vai levar?")
let nome 
let preco = 0
let quantidadeProdutos = 0
let valor = 0
let valorTotal = 0
let contador = 0
let pmc = 0

for(let cont = 1; cont <= produtos; cont++){
    nome = prompt("Qual o nome do produto?")
    preco = +prompt(`Qual o preço do ${nome}?`)
    quantidadeProdutos = +prompt("Digite quantos dejesa levar:")

    //Aqui começa o calculo
    valor = quantidadeProdutos * preco
    valorTotal += valor
    if(valor > 100){
        contador++
    }
    console.log(valor)

    if(preco > pmc){
        pmc = preco
    }
}

alert(`
    Produtos no seu carrinho:

    Custam mais de R$100,00: ${contador}.
    Produto mais caro: ${pmc}
    Valor total: R$${valorTotal}.

`)
