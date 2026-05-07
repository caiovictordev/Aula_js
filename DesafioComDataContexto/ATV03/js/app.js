const botoes = document.querySelectorAll(".assinatura[data-plano]")
const message = document.querySelector(".planos")

botoes.forEach(itens =>{
    itens.addEventListener('click', ()=>{
        let contexto = itens.dataset.plano
        planosAssinaturas(contexto)
    })
})

function planosAssinaturas(contexto) {
    switch (contexto) {
        case "assinaturaGratis":
            message.innerHTML = "Plano Gratuito"
        break;
        case "assinaturaBasica":
            message.innerHTML = "PEGUE ESTE... Plano Basico"
        break;
        case "assinaturaPro":
            message.innerHTML = "O Plano Pro é ideal para você"
        break;
        case "assinaturaPremium":
            message.innerHTML = "Aproveite o Plano Premium"
        break;

    }
}