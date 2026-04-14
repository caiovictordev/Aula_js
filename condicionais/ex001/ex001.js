let nacionalidade = prompt(`
    Você tem nacionalidade Brasileira?
    Informe "Sim" ou 'Não'
`)

if(nacionalidade == "Sim" || nacionalidade == "sim" || nacionalidade == "SIM"){
    let rg = +prompt("Nos iforme seu RG")
    alert(`
        Rg informado: ${rg}
    `)
}

if(nacionalidade == "Não" || nacionalidade == "não" || nacionalidade == "NÃO"){
    let passaporte = prompt("Nos informe seu passaporte")
    alert(`
        Passaporte informado: ${passaporte}
    `)
}