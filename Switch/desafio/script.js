let loja = +prompt(`
    ---------------------Defina o seu status-----------------

    Digite: 1 (Cliente)
    Digite: 2 (Funconário)
    Digite: 3 (vip)
`)


while(loja <1 || loja >3){
  
    alert("Por favor insira um número válido")
    loja = +prompt(`
    ---------------------Defina o seu status-----------------

    Digite: 1 (Cliente)
    Digite: 2 (Funconário)
    Digite: 3 (vip)
`)

}
let valor = +prompt("Valor do produto?")
let desconto

switch(loja){
case 1:
alert(`
    Olá cliente! total a pagar é R$${valor}
    Não há desconto.    
`)
break;

case 2:
desconto = valor * 0.10
valor = valor - desconto
alert(`    
    Olá funcionário! Total a pagar R$${valor}
    Seu desconto foi de R$${desconto}
`)

break;

case 3:
desconto = valor * 0.05
valor = valor - desconto
alert(`
    Você é vip!!! Total a pagar R$${valor}
    Seu desconto foi de R$${desconto}
`)
break;

default:
alert("Insira um valor válido")
break;
}

