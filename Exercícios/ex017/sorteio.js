function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc( dif * aleatorio)

    let res = document.querySelector('section#result')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
    document.getElementById('cls').style="visibility: visible;"
}

function limpar() {
    let res = document.querySelector('section#result')
    res.innerHTML = '<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</p>'
    document.getElementById('cls').style="visibility: hidden;"
}