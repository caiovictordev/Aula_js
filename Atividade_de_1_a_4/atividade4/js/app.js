let Qprodutos = 0 
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
}