let salarioBruto = 0
let valorHora = 0
let horasTrabalhadas = 0
let INSS = 0
let valeTransporte = 0
let bonus = 0
let descontado = 0
let valoraReceber = 0

function salarioLiquido(){
    valorHora = +prompt("Digite o valor da hora:")
    horasTrabalhadas = +prompt("Digite as horas trabalhadas:")
    salarioBruto = valorHora * horasTrabalhadas
    valeTransporte = salarioBruto * 0.06

    if(horasTrabalhadas >= 160){
        bonus = salarioBruto * 0.05
    }

    if(salarioBruto <= 1500){
        INSS = salarioBruto * 0.08 
    }else if(salarioBruto <=3000){
        INSS = salarioBruto * 0.09
    }else if(salarioBruto >= 3001){
        INSS = salarioBruto * 0.11
    }

    descontado = valeTransporte + INSS
    valoraReceber = salarioBruto - descontado

    alert("Ok, todos os dados foram armazenados, para acessar clique na opção 'Contra Check'")

}
function contraCheck(){

    alert(`
    Contra Check:
    Seu salário bruto : R$${salarioBruto}
    Desconto INSS: R$${INSS}
    Desconto vale transporte: R$${valeTransporte}
    Todos os descontos: R$${descontado}
    Hora extra: R$${bonus}
    Salário Líquido: R$${valoraReceber}
    `)
}

function sair(){
    alert("O programa vai ser encerrado")
    window.close()
}