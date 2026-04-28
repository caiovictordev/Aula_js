const buttonContent = document.querySelector(".content")
const buttonInner = document.querySelector(".inner")
const divText = document.getElementById("exemplo")

buttonContent.addEventListener('click', mostrarTexto1)
function mostrarTexto1(){
    let paragrafo = document.querySelector(".result-text-content")
    paragrafo.textContent = divText.textContent
}

buttonInner.addEventListener('click', mostrarTexto2)
function mostrarTexto2(){
    let paragrafo = document.querySelector(".result-inner-text")
    paragrafo.innerText = divText.innerText
}