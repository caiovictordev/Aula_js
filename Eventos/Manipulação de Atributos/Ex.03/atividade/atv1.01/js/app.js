const input = document.querySelector('[type = "text"]')
const buttonType = document.getElementById('type')
const img = document.getElementById('imagem')

//Para deixar o botão apagado
buttonType.style.display = 'none'

buttonType.addEventListener('click', ()=>{
    let valor = input.getAttribute('type')

    if(valor == 'text'){
        input.setAttribute('type', 'password')
        img.src = "images/eye.png"
    }else if(valor == 'password'){
        input.setAttribute('type', 'text')
        img.src = "images/hidden.png"
    }  
})

input.addEventListener('input', ()=>{
    if(input.value.length > 0){
        buttonType.style.display = 'flex'
    }else{
        buttonType.style.display = 'none'
    }
})