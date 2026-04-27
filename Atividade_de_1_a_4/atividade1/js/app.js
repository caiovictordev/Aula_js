function areaTriangulo(){
    let base = +prompt("Digite o valor da base aqui")
    let altura = +prompt("Digite o valor da altura")

    let conta = (base * altura) / 2
    alert(`O resultadado é: ${conta}`)
}
function areaRetangulo(){
    let base = +prompt("Digite o valor da base aqui")
    let altura = +prompt("Digite o valor da altura")

    let conta = base * altura
    alert(`O resultadado é: ${conta}`)

}
function areaQuadrado(){
    let medida = +prompt("Digite a medida aqui")
    
    let conta = medida ** 2
    alert(`O resultadado é: ${conta}`)
}
function areaTrapezio(){
    let baseMaior = +prompt("Digite a primeira medida: ")
    let baseMenor = +prompt("Digite a seguda medida:")
    let altura = +prompt("Digite a altura:")

    let conta = ((baseMaior + baseMenor) * altura) / 2
    alert(`O resultadado é: ${conta}`)
}
function calculoCirculo(){
    let pi = 3.14
    let raio = +prompt("Digite o valor do raio:")

    let conta = pi * (raio**2)
    alert(`O resultado é: ${conta}`)
}

function sair(){
    window.close()
}