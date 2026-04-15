let fases = +prompt("Escreva o número de fases jogadas")
let pontuacao = 0
let pontuacaoTotal = 0
let media = 0
let contador = 0

for(let cont = 1; cont <= fases; cont++){

    pontuacao = +prompt(`Digite a sua pontuação da fase ${cont}.`)

    pontuacaoTotal += pontuacao

    media = pontuacaoTotal / fases

    console.log(pontuacao)
    if(pontuacao > 100){
        contador ++
    }
}

alert(`
    --------------Estatísticas---------------
    Fases Jogadas : ${fases}
    Pontuação Total: ${pontuacaoTotal}
    Media de pontos obtidos: ${media}
    Pontuações acima de 100: ${contador} 

`)
