let idade 
let qtdmaiorIdade = 0
let qtdmenorIdade = 0

for(let cont = 1; cont <= 3; cont ++){

    idade = +prompt("Informe sua idade:")
    if(idade >=18){

        qtdmaiorIdade += 1

    }else{

        qtdmenorIdade += 1

    }

}

alert(`
    Pessoas maiores de idade: ${qtdmaiorIdade}
    Pessoas menores de idade: ${qtdmenorIdade}    
`)
