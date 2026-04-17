let temperaturaIdeal = +prompt("Digite a temperatura ideal para o funcionamento da máquina:")
let temperatura = 0;
let temporizador = 0;
alert(`A temperatura ideal da máquina é: ${temperaturaIdeal}`)

for(let cont = 1; cont <= temperaturaIdeal; cont++){
  alert(`Temperatura aumentando ${cont}`)
  temporizador ++
  if(cont == temperaturaIdeal){
    alert("Temperatura atual atingida")
  }
}
  alert("Por medida de seguança. Iremos adicinar mais 5 segundos")
while(temperatura < 5){
  temperatura++
  temporizador++
  alert(`Segundos extras: ${temperatura}`)
}
alert(`Tempo de funcionalidade da máquina: ${temporizador} segundos`)
