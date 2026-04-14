//Enquando a condição for verdadeira, ela vai ser executada.
/* let i = 0
while(i < 10){
    console.log(i)
    i++;
}
 */

//Executa o código pelo menos uma vez
/* let i = 10 
do {
    console.log(i)
    i++;
}while(i <10); */

// Exemplo na prática do While
let resposta = ''
do{
    resposta = prompt("Você é maior de idade?")
}while(resposta.toLowerCase() != 'sim')

