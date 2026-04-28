let opcao = ""
let votacao = ""
let cont = 0
let candidatoA = 0
let candidatoB = 0
let candidatoC = 0
let votoNulo = 0
let VotosCandA = 0
let VotosCandB = 0
let VotosCandC = 0
let VotosNulos = 0

while(opcao != 5){
    opcao = +prompt(`
    Digite a opção desejada
    1- Votar
    2- Exibir Resultado
    3- Resetar Votação
    4- Ganhador da eleição
    5- Sair
    `)
    function votar(){
        votacao = +prompt(`
        1- Candidato A
        2- Candidato B
        3- Candidato C
        4- Voto em Branco
        `)
         if(votacao == 1){
            candidatoA++
            cont++
        }else if(votacao == 2){
            candidatoB++
            cont++
        }else if(votacao == 3){
            candidatoC++
            cont++
        }else if(votacao == 4){
            votoNulo++
            cont++
        }
        VotosCandA = (candidatoA / cont) * 100
        VotosCandB = (candidatoB / cont) * 100
        VotosCandC = (candidatoC / cont) * 100
        VotosNulos = (votoNulo / cont) * 100
    }
    function exibirResultado(){
        alert(`
        Votação:
        Total de votos do Candidato A: ${candidatoA} 
        Total de votos do Candidato B: ${candidatoB}
        Total de votos do Candidato C: ${candidatoC} 
        Total nulos: ${votoNulo}
        
        Porcentagem de votos do Candidato A: ${VotosCandA.toFixed(0)}%
        Porcentagem de votos do Candidato B: ${VotosCandB.toFixed(0)}%
        Porcentagem de votos do Candidato C: ${VotosCandC.toFixed(0)}%
        Porcentagem de votos Nulos: ${VotosNulos.toFixed(0)}%

        Total de votos: ${cont}
        `)
    }
    function resetarVotacao(){
        cont = 0
        candidatoA = 0
        candidatoB = 0
        candidatoC = 0
        votoNulo = 0
    }
    function ganharOuEmpatar(){
        if(candidatoA == candidatoB || candidatoC){
            alert("Empate.")
        }else if(candidatoB == candidatoA || candidatoC){
            alert("Empate.")
        }else if(candidatoC == candidatoA || candidatoB){
            alert("Empate.")
        }else if(candidatoA > candidatoB || candidatoC){
            alert("Candidato A ganhou a eleição.")
        }else if(candidatoB > candidatoA || candidatoC){
            alert("Candidato B ganhou a eleição.")
        }else if(candidatoC > candidatoA || candidatoB){
            alert("Candidato C ganhou a eleição.")
        }
    }
    function sair(){
        alert("O programa será encerrado")
        window.close()
    }
    switch(opcao){
        case 1:
            votar()
        break;
        case 2:
            exibirResultado()
        break;
        case 3:
            resetarVotacao()
        break;
        case 4:
            ganharOuEmpatar()
        break;
        case 5:
            sair()
        break;
        default:
            alert("Digite uma opção válida.")
        break;
    }
}