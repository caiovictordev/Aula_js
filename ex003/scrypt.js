let nomeAtacante = prompt("Escreva o nome do atacante")
let poderAtaque = +prompt("Escreva a força do ataque de 0 a 100")

while(poderAtaque > 100 || poderAtaque <= 0){
    alert(`Vamos lá ${nomeAtacante}, ISTO NÃO É UMA BRINCADEIRA`)
    poderAtaque = +prompt("Escreva a força do ataque de 0 a 100")
}
alert(`Muito bem ${nomeAtacante} vamos conhecer seu oponente`)

let vidaDefensor = 80
let vidainicial = vidaDefensor
let nomeDefensor = prompt("Escreva o nome do Defensor")
let escudoDefensor = prompt(`Olá ${nomeDefensor}, você deseja usar um escudo? Sim ou Não?`)

if(escudoDefensor == "Sim" || escudoDefensor == "sim" || escudoDefensor == "SIM"){
    escudoDefensor = Math.floor(Math.random() * 40) + 1
    vidaDefensor = vidaDefensor + escudoDefensor
    
    if(poderAtaque <= vidaDefensor){

        alert(`Nenhum dano causado ao ${nomeDefensor}, resultando em uma violenta e vergonhosa derrota ao ${nomeAtacante}`)

        alert(`
            ------------------Estatisticas------------------

            ATACANTE                                    
            Nome do atacante: ${nomeAtacante}.          
            Dano proferido: ${poderAtaque}.

            DEFENSOR
            Nome do Defensor: ${nomeDefensor}.
            Vida inicial de ${nomeDefensor}: ${vidainicial}.
            Vida do ${nomeDefensor} com o escudo: ${vidaDefensor}. 
            Escudo recebido por ${nomeDefensor}: ${escudoDefensor}.
        `)
        /* alert(`${nomeDefensor} aceitou o escudo que o deu ${escudoDefensor} de poder de defesa, resultando em uma enorme e vergonhosa derota de ${nomeAtacante}`) */
    }else if(poderAtaque > vidaDefensor){
        let res = (poderAtaque - vidaDefensor) / 2
        /* alert(escudoDefensor)
        alert(vidaDefensor)
        alert(res) */
        vidaDefensor = vidaDefensor - res

        alert(`
            Um escudo com ${escudoDefensor} de defesa não foi o suficente para agentar o ataque de ${nomeAtacante}... ${nomeDefensor} foi ferido durante o ataque...    
        `)
        alert(`
            ------------------Estatisticas------------------
                
            ATACANTE                                    
            Nome do atacante: ${nomeAtacante}.          
            Dano proferido: ${poderAtaque}.

            DEFENSOR
            Nome do Defensor: ${nomeDefensor}.
            Vida inicial de ${nomeDefensor}: ${vidainicial}.
            Escudo recebido por ${nomeDefensor}: ${escudoDefensor}.
            Vida de ${nomeDefensor} após ataque: ${vidaDefensor}.
            Dano recebido em ${nomeDefensor}: ${res}.
        `)

        /* alert(`Infelizmente um escudo com ${escudoDefensor} de poder não foi o suficiente para segurar o ataque violento de ${nomeAtacante} resultando em um chão sujo de blood`) */
    }
}else if(escudoDefensor == "Não" || escudoDefensor == "não" || escudoDefensor == "NÃO"){

    if(poderAtaque > vidaDefensor){

        alert(`
            Vejam, o ${nomeDefensor} está se gabando.
            "Todos riram no coliseu"
        `)
    
        if (Math.random() < 0.5) {
            alert(`O gabar de ${nomeDefensor} não foi em vão, desviou e proferiou um golpe poderoso em ${nomeAtacante}, o levando para o altíssimo`)
            alert(`
                ------------------Estatisticas------------------
                    
                ATACANTE                                    
                Nome do atacante: ${nomeAtacante}.          
                Dano proferido: ${poderAtaque}.
                Condição: Sete palmos a baixo da terra.
    
                DEFENSOR
                Nome do Defensor: ${nomeDefensor}.
                Vida inicial de ${nomeDefensor}: ${vidainicial}.
                Vida de ${nomeDefensor} após ataque: ${vidaDefensor}.
                Dano recebido em ${nomeDefensor}: 0.
            `)
    
        }else {
            alert(`${nomeAtacante} ceifou a vida de ${nomeDefensor} com apenas um golpe...`)
            vidaDefensor = 0
            alert(`
                ------------------Estatisticas------------------
                    
                ATACANTE                                    
                Nome do atacante: ${nomeAtacante}.          
                Dano proferido: ${poderAtaque}.
                Condição: Extremamente feliz.
    
                DEFENSOR
                Nome do Defensor: ${nomeDefensor}.
                Vida inicial de ${nomeDefensor}: ${vidainicial}.
                Vida de ${nomeDefensor} após ataque: ${vidaDefensor}.
                Dano recebido em ${nomeDefensor}: ${poderAtaque}
            `)
            
        }
    }else if(poderAtaque < vidaDefensor){
        vidaDefensor = vidaDefensor - poderAtaque
        alert(`
            ${nomeAtacante} achou que um peteleco seria o suficiente 
            para derrubar ${nomeDefensor}, mas se arrependeu amargamente depois...
        `)

        alert(`
            ------------------Estatisticas------------------
                
            ATACANTE                                    
            Nome do atacante: ${nomeAtacante}.          
            Dano proferido: ${poderAtaque}.
            Condição: Sete palmos a baixo da terra.

            DEFENSOR
            Nome do Defensor: ${nomeDefensor}.
            Vida inicial de ${nomeDefensor}: ${vidainicial}.
            Vida de ${nomeDefensor} após ataque: ${vidaDefensor}.
            Dano recebido em ${nomeDefensor}: ${poderAtaque}.
        `)
    }

}



/* while(poderAtaque > 100 || poderAtaque == 0){
    poderAtaque = prompt("Escreva a força do ataque de 0 a 100")
        alert(`Vamos lá ${nomeAtacante}, aqui a parada é séria`)

    if(poderAtaque == 1 || poderAtaque <=100)
    console.log(`Tudo bem ${nomeAtacante}, você vai atacar com ${poderAtaque} de poder.`) 
}*/

