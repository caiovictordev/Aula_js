let dinheiro = 1;
let soma = 0;
for (let cont = 0; cont < dinheiro; cont++) {
  dinheiro++;
  soma += cont;

  alert(`Seus valores diários em um período de 10 dias: ${soma}`);
  if (cont == 10) {
    alert(`Pronto.`);
    break;
  }
}
