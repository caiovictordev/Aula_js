const botoes = document.querySelectorAll(".Turno[data-contexto]")
const saudacoes = document.querySelector(".saudacao")

botoes.forEach(item => {
    item.addEventListener('click', ()=>{
        let contexto = saudacoes.dataset.contexto
        alterarTexto(contexto)
    })
})

    contexto.dataset.contexto = contexto

function alterarConteudos(contexto){
    switch (contexto) {
        case "manha":
            saudacoes.innerHTML = "Bom dia"
        break;
        case "tarde":
            saudacoes.innerHTML = "Boa Tarde"
        break;
        default:
            break;
    }
}