export default function initButtonTemp(){
    const banner = document.querySelector('.app__image')
    const titulos = document.querySelector('.app__title')
    const html = document.documentElement
    const botoes = document.querySelectorAll('.app__card-button[data-contexto]')
    const exit_modal = document.querySelector('.modal__exit')
    const modal = document.querySelector('.modal')


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
                tempoDecorrido = 20
                mostrarTimer()
                break;
            case "descanso-curto":
                titulos.innerHTML = 'Simplifique o caminho, <strong style = "font-weight: bold;">avance com eficiência</strong>'
                tempoDecorrido = 5
                mostrarTimer()
                break;
            case "descanso-longo":
                titulos.innerHTML = 'Direcione seu tempo ao que<strong style = "font-weight: bold;"> realmente faz diferença.</strong>'
                tempoDecorrido = 15
                mostrarTimer()
                break;
        }
        /*if(contexto == "foco"){// Codição para modificar o fundo
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
    // Inicio codificação Temporizador
    const exibirTimerApp = document.querySelector('#timer')
    const btnStart = document.querySelector('#start-pause')
    const btnPause = document.querySelector('.app__card-primary-butto-icon')

    //Variável de referencia para guardar o timer
    let tempoDecorrido = 0

    function mostrarTimer(){
        const tempo = new Date(tempoDecorrido * 1000)
        const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
        exibirTimerApp.innerHTML = `${tempoFormatado}`
    }
    mostrarTimer()

    btnStart.addEventListener('click', iniciarTimer)

    function iniciarPausaTimer(){
        const audioIniciar = new Audio('./sons/play.wav')
        const audioPausar = new Audio('./sons/pause.mp3')
        if(rodando){
            audioIniciar.play()
        }
    }

    function decrementarTimer(){
        const som = new Audio ('sons/beep.mp3')
        
        if(tempoDecorrido == 0){
            alert("Tempo Finalizado!")
            som.play()
            pararTimer()
            return
        }
        tempoDecorrido -= 1,0
        mostrarTimer()
    }
    let idTimer
    let rodando = false

    function iniciarTimer(){
        if(rodando){
            pararTimer()
            return
        }
        idTimer = setInterval(decrementarTimer, 1000)
        rodando = true
        btnStart.innerHTML = `
        <img src="imagens/play_arrow.png">
        <span>Começar</span>`
    }

    function pararTimer(){
        clearInterval(idTimer)
        rodando = false
        btnStart.innerHTML = `
        <img src="imagens/pause.png">
        <span>Pausa</span>`
    }

    exit_modal.addEventListener('click', ()=>{
        modal.style.display = 'none'
    })

    modal.style.display = 'none'

    if(tempoDecorrido == 0){
        modal.style.display = "block" 
    }

}