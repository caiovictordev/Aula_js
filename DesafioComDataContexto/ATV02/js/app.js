const botoes = document.querySelectorAll(".botao[data-cor]")
const html = document.documentElement

botoes.forEach(itens =>{
    itens.addEventListener('click', ()=>{
        let contexto = itens.dataset.cor
        coresselecionadas(contexto)
    })
})

function coresselecionadas(contexto){
    
    html.dataset.cor = contexto

}