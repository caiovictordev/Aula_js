const botoes = document.querySelectorAll('.Turno[data-contexto]')
const saudacoes = document.querySelector('.saudacao')

botoes.forEach(item => {
    item.addEventListener('click', ()=>{
        let contexto = item.dataset.contexto
        alterarTexto(contexto)
    })
})

function alterarTexto(contexto){
    switch (contexto) {
        case "Matutino":
            saudacoes.innerHTML = "Bom dia"
        break;
        case "Vespertino":
            saudacoes.innerHTML = "Boa Tarde"
        break;
        case "Noturno":
            saudacoes.innerHTML = "Boa noite"
        break;
    }
}