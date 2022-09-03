function teste() {
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    if (num % 2  == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número que foi digitado: ${num}...</p>`
    res.innerHTML += `<p>${num} é um número ${tipo}!</p>`
}