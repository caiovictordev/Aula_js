const banner = document.querySelector('.app__image')
const titulos = document.querySelector('.app__title')
const html = document.documentElement
const botoes = document.querySelectorAll('.app__card-button[data-contexto]')

botoes.forEach(itemBotoes =>  {
    itemBotoes.addEventListener('click', ()=>{
        let contexto = itemBotoes.dataset.contexto
        alterarConteudos(contexto, itemBotoes)// Chamando a função das ações
    })
})

//Função que vai executar as ações do evento de click dos botoes
function alterarConteudos(contexto, botaoClicado){
    //Removendo classe ativa dos elementos
    botoes.forEach(itemBotoes => itemBotoes.classList.remove('active'))

    //Adicionando a classe ativa dos elementos
    botaoClicado.classList.add('active')

    //Atualizando o data-contexto
    html.dataset.contexto = contexto

    banner.src= `imagens/${contexto}.png`

    switch (contexto) {
        case "foco":
            titulos.innerHTML = 'Otimize sua produtividade, <strong style= "font-weight: bold;"> mergulhe no que importa.</strong>'
            break;
        case "descanso-curto":
            titulos.innerHTML = 'Simplifique o caminho, <strong style = "font-weight: bold;">avance com eficiência</strong>'
            break;
        case "descanso-longo":
            titulos.innerHTML = 'Direcione seu tempo ao que<strong style = "font-weight: bold;"> realmente faz diferença.</strong>'
            break;
    }
/*     if(contexto == "foco"){// Codição para modificar o fundo
        titulos.innerHTML = 'Otimize sua produtividade, <strong style= "font-weight: bold;"> mergulhe no que importa.</strong>'
        banner.src = 'imagens/foco.png'
    }else if(contexto == "descanso-curto"){
        titulos.innerHTML = 'Simplifique o caminho, <strong style = "font-weight: bold;">avance com eficiência</strong>'
        banner.src = 'imagens/descanso-curto.png'
    }else if(contexto == "descanso-longo"){
        titulos.innerHTML = 'Direcione seu tempo ao que<strong style = "font-weight: bold;"> realmente faz diferença.</strong>'
        banner.src = 'imagens/descanso-longo.png'
    } */
}
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