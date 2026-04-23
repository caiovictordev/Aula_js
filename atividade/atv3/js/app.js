let Qcarros = []
let Qmodelos = []
for(let cont = 0; cont < 5; cont++){
    let carros = prompt("Digite o carro que quer adicionar:")
    let modelos = prompt("Digite o modelo do carros:") 
    Qcarros.push(carros)
    Qmodelos.push(modelos)
}
alert(`
${Qmodelos.join("\n"), Qcarros.join("\n")}
`)