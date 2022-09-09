function calc() {
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>Calculando</h2>`
    // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
    switch (op) {
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break

        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3:
            saida.innerHTML += `<p>${n1} X ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${n1/n2}</strong></p>`
            break
        default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
            saida.innerHTML += `<p>OPÇÂO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`
    }
}