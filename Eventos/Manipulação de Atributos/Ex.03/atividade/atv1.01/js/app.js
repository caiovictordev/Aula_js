const input = document.querySelector('[type = "text"]')
const buttonType = document.getElementById('type')
const img = document.getElementById('imagem')

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

if(input.value.length == 0){
    buttonType.style.display = 'none'
}else{

    buttonType.style.display = 'block'
}