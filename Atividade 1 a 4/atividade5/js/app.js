function calcularNota(){
    let nota = -1
    while(nota < 0 || nota >10){
        nota = +prompt("Digite sua nota")
        if(nota < 0 || nota > 10){
            alert("Digite um número de 0 a 10")
        }else{
            if(nota >= 6){
                alert("aprovado")
            }else{
                alert("reprovado")
            }
        }
    }
}
function sair(){
    alert("O programa será encerrado")
}
let opcoes = 0
while(opcoes != 2){
    opcoes = +prompt(`
    Clique na opção que deseja conferir:
    1- Calculo de nota
    2- Sair
    `)
    switch (opcoes) {
        case 1:
            calcularNota()
        break;
        case 2:
            sair()
        break;
        default:
            alert("Digite uma opção válida")
        break;
    }
}
