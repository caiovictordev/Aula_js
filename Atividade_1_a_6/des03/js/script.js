let numero = 20;

for (let cont = 0; cont <= numero; cont++) {
  alert(`Saída esperada: ${cont}`);

  if (cont == 9) {
    alert("Número proibido encontrado! Encerrando...");
    break;
  }
}
