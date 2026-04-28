const titulo = document.getElementById('titulo')
const clickNoBotao = document.getElementById('button')
let dark = "Dark"
let light = "Light"

clickNoBotao.addEventListener('click', darkandlight)
function darkandlight(){
    if(clickNoBotao.innerText == dark){
        clickNoBotao.innerText = light
        document.body.style.backgroundColor = "#000000"
        titulo.style.color = "#fff" 
    }else{
        clickNoBotao.innerText = dark
        document.body.style.backgroundColor = "#fff"
        titulo.style.color = "#000000"
    }
}