let carros = []
for(let cont = 0; cont < 5; cont++){
    let modelos = prompt("Digite até modelos de carros")
    carros.push(modelos)
}

alert(`Carros adicionados:
${carros.join("\n")}
`)