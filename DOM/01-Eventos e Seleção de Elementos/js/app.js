let texto1 = "Clique para a revelação"
let texto2 = "Roger is Gay"
let id = ""
function manipulaTitulo(){
    id = document.getElementById("titulo")
    /* id.innerText = "Roger is gay" */
    if(id.innerText == texto1){
        id.innerText = texto2
    }else{
        id.innerText = texto1
    }
}

function mover(){
    id.style.cursor = "pointer"
    id.style.backgroundColor = "#f15f15f5"
}

function tirarMouse(){
    id.style.backgroundColor = "#ffff"
}

/* ---------------------------------Diferença do INNERTEXT E TEXTCONTENT-------------------------------------- */


//innerText
//textContent
