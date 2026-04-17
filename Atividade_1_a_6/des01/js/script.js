let numero = +prompt("Digite um número")
let conta = ""

for(let cont = 0; cont <= numero; cont++){
    if(cont % 2 == 0){
        conta += cont + "\n"
    }
    
}
alert(conta)