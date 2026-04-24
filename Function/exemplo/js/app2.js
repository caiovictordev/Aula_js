/* let valor 
let resultado = 0

function calculo(){
    for(let i = 1; i <= 2; i++){
        valor = +prompt("Informe o " + i + "º valor")
        resultado += valor 
    }
    alert("Resultado: " +resultado)
}

calculo()
 */

//Ultilizando parametros na função

let resultado = 0
let valor 
function calculo(quantidade){
for(let i = 1; i <= quantidade; i++){
    valor = +prompt("Digite o "+i+"º valor")
    resultado += valor
}
alert("Resultado: " +resultado)
}

calculo(+prompt("Digite a quantidade de numeros"))