let senha = prompt("Digite sua senha")
let verificarSenha = ""
alert(`Caracteres em números: ${senha.length}`)

for(let c = 0; c < senha.length; c++){
    verificarSenha += senha[c] + "\n"
}
alert(`
-------------Sua senha descriptografada--------------
${verificarSenha}
`)