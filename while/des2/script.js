let velocidadeMedia = 0
let resultados = 0
let pare = ""
let multados = 0

while(pare != 'x' || pare != 'X'){
    pare = prompt("Precione qualquer tecla para proseguir ou aperte a tecla 'X' para parar o programa")
    let velocidadeVeiculo = prompt("Informe a velocidade do veículo")
    if(velocidadeVeiculo > 120){
        alert("VEÍCULO MUTADO")
        multados ++
    }else{
        alert("Velocidade permitida!")
        velocidadeMedia ++
    }
}
alert(`
    Quantidade de Veículos em alta velocidade : ${multados}
    Quantidade de Veículos em velocidade padrão: ${velocidadeMedia}    
`)