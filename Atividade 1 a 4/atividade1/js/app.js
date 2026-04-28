let opcao = ""
while(opcao != 6){
    opcao = +prompt(`
        Escolha a conta que você quer executar.
        1 - Área do Tringulo
        2 - Área do Retangulo
        3 - Área do Quadrado
        4 - Área do Trapezio
        5 - Área do Circulo
        6 - Sair
    `)
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
    if(opcao == 1){
        areaTriangulo()
    }else if(opcao == 2){
        areaRetangulo()
    }else if(opcao == 3){
        areaQuadrado()
    }else if(opcao == 4){
        areaTrapezio()
    }else if(opcao == 5){
        calculoCirculo()
    }else if(opcao == 6){
        alert("O programa será fechado")
        sair()
    }
}