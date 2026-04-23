let carros = []
let list = 0

for(let cont = 0; cont < 5; cont++){
    carros.push(prompt("Digite 5 modelos de carros"))
}


alert(`
Esses foram os carros adicionados:
${carros.join("\n")}
`)

alert("Infelizmente terá que apagar dois carros da sua lista")

for(cont = 0; cont < 2; cont++){
    let valor = +prompt("Escreva o nome do carro que quer apagar")
    --valor
    carros.splice(valor, 1, "carro apagado")

/*  let list = +prompt("Para apagar")
    switch(list){
        case 1:
        delete carros[0]
        break;
        case 2:
        delete carros[1]
        break;
        case 3:
        delete carros[2]
        break;
        case 4:
        delete carros[3]
        break;
        case 5:
        delete carros[4]
        break;
    } */
}
alert(`
Esses foram os carros adicionados:
${carros.join("\n")}
`)

for(cont = 0; cont < 3; cont++){
    carros.push(prompt("Agora adicone mais três modelos"))
}

alert(`
Carros adicionados junto com os modelos antigos:
${carros.join("\n")}
`)


