let addProdutos = 0
let removeProdutos = 0
let quantidadeAtual = 0
function entradaProdutos(){
    addProdutos = +prompt("Digite quantos produtos você deseja adicionar")
    quantidadeAtual += addProdutos
}
function saidaProdutos(){
    removeProdutos = +prompt("Digite quantos produtos deseja retirar")
    if(quantidadeAtual > removeProdutos){
        quantidadeAtual -= removeProdutos
    }else{
        alert("Não existe essa quantidade de itens no estoque.")
    }
}
function estoqueAtual(){
    alert(`
    Última Entrada de Produtos: ${addProdutos} 
    Últiam Saida de Produtos: ${removeProdutos}
    Quatidade Atual de Produtos: ${quantidadeAtual}
    `)
}
function situacaoEstoque(){
    if(quantidadeAtual == 0){
        alert("Sem estoque")
    }else if(quantidadeAtual > 0 && quantidadeAtual <= 10){
        alert(`Estoque baixo, temos ${quantidadeAtual} itens no estoque`)
    }else if(quantidadeAtual > 10){
        alert(`Estoque adequado, temos ${quantidadeAtual} itens no estoque`)
    }
}
function sair(){
    alert("O programa será encerrado")
}

let opcoes = 0
while(opcoes != 5){
    opcoes = +prompt(`
        1- Entranda de produtos
        2- Saida de produtos
        3- Estoque atual
        4- Situação do estoque
        5- Sair
    `)

    switch(opcoes){
        case 1:
            entradaProdutos()
        break;
        case 2:
            saidaProdutos()
        break;
        case 3:
            estoqueAtual()
        break;
        case 4:
            situacaoEstoque()
        break;
        case 5:
            sair()
        break;
        default:
            alert("Digite um valor válido")
        break;
    }
}
/* let Qprodutos = 0 
let retiradaProdutos = 0
let valorRetirados = 0

function entradaProdutos(){
    Qprodutos = +prompt("Digite a quantidade de produtos:")
}
function saidaProdutos(){
    retiradaProdutos = +prompt("Digite quantos produtos deseja retirar:")
    valorRetirados = Qprodutos - retiradaProdutos
}
function estoqueAtual(){

    if(valorRetirados != 0){
        alert(`Temos ${valorRetirados} no estoque`)

        if(valorRetirados == 0){
            alert("Sem estoque")

        }else if(valorRetirados > 0 && Qprodutos <=10){
            alert(`Estoque baixo`)

        }else if(valorRetirados > 10){
            alert(`Estoque adequado`)
        }
    
    }else{
        alert(`Temos ${Qprodutos} no estoque`)

        if(Qprodutos == 0){
            alert("Sem estoque")

        }else if(Qprodutos > 0 && Qprodutos <=10){
            alert(`Estoque baixo`)

        }else if(Qprodutos > 10){
            alert(`Estoque adequado`)
        }
    }
}
function situacaoEstoque(){
    if(valorRetirados != 0){
        alert(`Temos ${valorRetirados} no estoque`)

    }else{
        alert(`Temos ${Qprodutos} no estoque`)
    }
}
function sair(){
    alert("O programa será encerrado.")
    window.close()
} */