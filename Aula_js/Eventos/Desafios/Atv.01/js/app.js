/* Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:
- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
 */
const div = document.getElementById('box-container')

const jogadores = []

/* for(let i = 0; i < 5; i++){
    jogadores[i] = prompt('...')
}
console.log(jogadores) (Teste de Array) */
//objeto jogador

//Escalar Jogador
const nameJogador = document.createElement('input')
const numberJogador = document.createElement('input')
const positionJogador = document.createElement('input')
const buttonEscalar = document.getElementById('escalarJogador')


buttonEscalar.addEventListener('click', ()=>{
    div.append(nameJogador, numberJogador, positionJogador, buttonConfirm)
    nameJogador.setAttribute('placeholder', 'Digite o nome do jogador')
    numberJogador.setAttribute('placeholder', 'Digite o número do jogador')
    positionJogador.setAttribute('placeholder', 'Digite a posição do Jogador')

    buttonConfirm.innerText = 'Confirmar jogador'

})

//Confirmar seleção
const buttonConfirm = document.createElement('button')
const span = document.createElement('span')

buttonConfirm.addEventListener('click', ()=>{
    let time = {
        jogador : nameJogador.value,
        camisa : numberJogador.value,
        posicao: positionJogador.value
    }

    div.appendChild(span)
    span.innerHTML =  JSON.stringify(time)

})
