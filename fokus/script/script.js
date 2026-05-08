import initButtonTemp from "./module/ativabuttonTemp.js";
import initAudio from "./module/som.js";

initAudio()
initButtonTemp()

console.log(initAudio)

/* 
btnStart.innerHTML = `
    <img src="imagens/pause.png">
    <span>Pausa</span>`
 */










































































/* let banner = document.querySelector('.app__image')
let titulos = document.querySelector('.app__title')
let body = document.querySelector('body')
let foco = document.querySelector('.active')
let pausaC = document.querySelector('.pausaCurta')
let pausaL = document.querySelector('.pausaLonga')

foco.addEventListener('click', focado)
function focado(){
    titulos.innerHTML = 'Otimize sua produtividade, <strong style= "font-weight: bold;"> mergulhe no que importa.</strong>'
    body.style.background = 'linear-gradient(180deg, #8B1FF8 0%, #041832 48.44%, #01080E 100%)'
    banner.src = 'imagens/foco.png'
    foco.classList.add('active')
    pausaC.classList.remove('active')
    pausaL.classList.remove('active')
}
pausaC.addEventListener('click', pausaCurta)
function pausaCurta(){
    titulos.innerHTML = 'Simplifique o caminho, <strong style = "font-weight: bold;">avance com eficiência</strong>'
    body.style.background = 'linear-gradient(180deg, #0F725C 0%, #041832 48.44%, #01080E 100%)'
    banner.src = 'imagens/descanso-curto.png'
    foco.classList.remove('active')
    pausaC.classList.add('active')
    pausaL.classList.remove('active')
}
pausaL.addEventListener('click', pausaLonga)
function pausaLonga(){
    titulos.innerHTML = 'Direcione seu tempo ao que<strong style = "font-weight: bold;"> realmente faz diferença.</strong>'
    body.style.background = 'linear-gradient(180deg, #1875E9 0%, #041832 48.44%, #01080E 100%)'
    banner.src = 'imagens/descanso-longo.png'
    foco.classList.remove('active')
    pausaC.classList.remove('active')
    pausaL.classList.add('active')
} */