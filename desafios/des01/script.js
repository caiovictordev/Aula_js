let pontuacao = 0
let fases = 0
let p1, p2, p3, p4, p5

for(let qtdfases = 1; qtdfases <=5; qtdfases++){

    alert(`
        Você está na fase ${qtdfases}
        clique para ir para a próxima fase.    
    `)
    
    if(qtdfases == 1){
        p1 = Math.floor(Math.random() * 200) + 1
        alert(`Você ganhou ${p1} pontos nesta fase`)

    }else if(qtdfases == 2){
        p2 = Math.floor(Math.random() * 200) + 1
        alert(`Você ganhou ${p2} pontos nesta fase`)

    }else if(qtdfases == 3){
        p3 = Math.floor(Math.random() * 200) + 1
        alert(`Você ganhou ${p3} pontos nesta fase`)

    }else if(qtdfases == 4){
        p4 = Math.floor(Math.random() * 200) + 1
        alert(`Você ganhou ${p4} pontos nesta fase`)

    }else if(qtdfases == 5){
        p5 = Math.floor(Math.random() * 200) + 1
        alert(`Você ganhou ${p5} pontos nesta fase`)
    }

}

let soma = (p1 + p2 + p3 + p4 + p5) / 5

alert(`
    Parabéns, você conseguiu ganhou!!
    -------------Estatísticas-------------
    Pontos por fase:

    Fase 1: ${p1}
    Fase 2: ${p2}
    Fase 3: ${p3}
    Fase 4: ${p4}
    Fase 5: ${p5}

    Fases acima de 100 pontos: ${fases}
    Media total de pontos (${soma})
`)