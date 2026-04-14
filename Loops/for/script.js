/* for(let i=1; i<10; i++){

    alert(i)

} */

/* for(let i=10; i>=1; i--){

    alert(i)

} */

//callbackfn ou callbackfunction
/* ['a','b'].forEach(function(item){
    console.log(item)
}) */

//Tabuada
let ul = document.querySelector('#taboada') //Selecionar a tag do html
let numero = prompt("Digite um número para ver a taboada")

let i = 0

while(i<=10){

    let resultado = numero * i
    console.log(resultado)
    exibirNoHTML(numero, i, resultado)
/*     let li = document.createElement('li') //criar um elemento dentro do Html
    li.innerText = `${numero} * ${i} = ${resultado}`;
    ul.appendChild(li); //Criar um filho da tag ul atravez do js */
    i++
}

function exibirNoHTML(numero, i, resultado){
    let li = document.createElement('li')
    li.innerText = `${numero} x ${i} = ${resultado}`
    ul.appendChild(li)

}