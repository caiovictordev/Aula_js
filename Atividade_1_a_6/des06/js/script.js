let tentativas = 3;
let senha = prompt("Digite sua senha");
const verificacao = senha;

alert("Prove que é você mesmo!");

do {
  senha = prompt("Digite sua senha");
  if(verificacao === senha){
    alert("senha correta");
    break;

  }else{
    tentativas--;
    alert(`Senha incorreta. Tentativas restantes ${tentativas}`);
  }
  
  if (tentativas == 0) {
    alert("Acesso bloqueado. Número máximo de tentativas atingido");
  }
} while (tentativas > 0);
