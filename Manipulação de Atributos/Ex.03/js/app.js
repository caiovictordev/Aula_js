const input = document.querySelector('[type = "text"]')
const buttonType = document.getElementById('type')

buttonType.addEventListener('click', ()=>{
    let valor = input.getAttribute('type')

    if(valor == 'text'){
        input.setAttribute('type', 'radio')
    }else if(valor == 'radio'){
        input.setAttribute('type', 'text')
    }
    
})