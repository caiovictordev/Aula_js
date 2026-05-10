export default function initButtonTemp(){
    const banner = document.querySelector('.app__image')
    const titulos = document.querySelector('.app__title')
    const html = document.documentElement
    const botoes = document.querySelectorAll('.app__card-button[data-contexto]')
    const exit_modal = document.querySelector('.modal__exit')
    const modal = document.querySelector('.modal')
    const resetar = document.querySelector("#start-reset")

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

        resetar.addEventListener('click', ()=>{
            switch(contexto){
                case "foco":
                tempoDecorrido = 15
                mostrarTimer()
                pararTimer()
                imageBotao.src = 'imagens/play_arrow.png'
                btnInicioPause.innerText = 'Iniciar'
                break;

                case "descanso-curto":
                tempoDecorrido = 5
                mostrarTimer()
                pararTimer()
                imageBotao.src = 'imagens/play_arrow.png'
                btnInicioPause.innerText = 'Iniciar'
                break;

                case "descanso-longo":
                tempoDecorrido = 10
                mostrarTimer()
                pararTimer()
                imageBotao.src = 'imagens/play_arrow.png'
                btnInicioPause.innerText = 'Iniciar'
                break;
            }
        })

        switch (contexto) {
            case "foco":
                titulos.innerHTML = 'Otimize sua produtividade, <strong style= "font-weight: bold;"> mergulhe no que importa.</strong>'
                tempoDecorrido = 15
                mostrarTimer()
                break;
            case "descanso-curto":
                titulos.innerHTML = 'Simplifique o caminho, <strong style = "font-weight: bold;">avance com eficiência</strong>'
                tempoDecorrido = 5
                mostrarTimer()
                break;
            case "descanso-longo":
                titulos.innerHTML = 'Direcione seu tempo ao que<strong style = "font-weight: bold;"> realmente faz diferença.</strong>'
                tempoDecorrido = 10
                mostrarTimer()
                break;
        }
    }
    // Inicio codificação Temporizador
    const exibirTimerApp = document.querySelector('#timer')
    const btnStart = document.querySelector('#start-pause')
    //Variável de referencia para guardar o timer
    let tempoDecorrido = 1500

    function mostrarTimer(){
        const tempo = new Date(tempoDecorrido * 1000)
        const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
        exibirTimerApp.innerHTML = `${tempoFormatado}`
    }
    mostrarTimer()



    btnStart.addEventListener('click', iniciarPausaTimer)
    //Variável do aúdio beep
    const som = new Audio ('sons/beep.mp3')

    function decrementarTimer(){
    
        if(tempoDecorrido <= 0){
            som.play()
            /* setTimeout(()=> alert('tempoDecorrido!'), 100) */
            pararTimer()
            modal.style.display ="flex"
            return
        }
        tempoDecorrido -= 1
        mostrarTimer()
    }

    let idTimer
    let rodando = false

    const btnInicioPause = document.querySelector('.app__card-primary-button span')
    const imageBotao = document.querySelector('.app__card-primary-butto-icon')

    function iniciarPausaTimer(){
        const audioIniciar = new Audio('sons/play.wav')
        const audioPausar = new Audio('sons/pause.mp3')

        if (rodando) {
            imageBotao.src = 'imagens/play_arrow.png'
            btnInicioPause.innerText = 'Iniciar'
            audioPausar.play()
            pararTimer()
            return
        }
        imageBotao.src= 'imagens/pause.png'
        btnInicioPause.innerText = 'Pausar'
        audioIniciar.play()
        idTimer = setInterval(decrementarTimer, 1000)
        rodando = true
    }
 
    function pararTimer(){
        clearInterval(idTimer)
        rodando = false
    }

    exit_modal.addEventListener('click', ()=>{
        modal.style.display = "none"
        som.pause()
    })

}