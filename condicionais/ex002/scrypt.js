let sabor = prompt(`
    Cadápio de Sucos
L - Laranja
M - Morango
A - Acerola
U - Uva
    De acordo com a letra, escolha o sabor do seu suco
    `)

    if(sabor == 'l' || sabor == 'L'){
        alert("Você o suco de laranja, uma delícia")
    } else if(sabor == 'm' || sabor == 'M'){
        alert("Você escolheu o suco de morango, aquela safada")
    } else if(sabor == 'a' || sabor == 'A'){
        alert("Você escolheu o suco de Acelo... Acelora... Acerola kkk")
    } else if(sabor == 'u' || sabor == 'U'){
        alert("Tu já tomou ele sem ser de pacote? suco de uva é bom demais")
    }else{
        alert("Só olha, mas não compra, tu é o pior cliente")
    }