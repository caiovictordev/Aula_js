const input = document.getElementById('texto')
const divConteudo = document.getElementById('conteudo')

input.addEventListener('keydown', (event)=>{
    let tecla = event.key

    if(tecla == 'Enter'){ // "Backspace" foi pego através do código
        divConteudo.innerText = input.value //puxando valor do input
        divConteudo = input.value = ''
    }
    
    /* divConteudo.innerText = `A tecla apertada foi ${tecla}` */
})