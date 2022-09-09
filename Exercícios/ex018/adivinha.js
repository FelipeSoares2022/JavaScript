let res = document.querySelector('section#result')
let computador = 0
let jogador = 0

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(window.prompt('Qual é seu palpite?'))
    if (jogador < computador){
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong class="hot">MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong class="Cold">MENOR</strong>!</p>`
    } else if (computador == jogador){
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
        document.getElementById('botao2').style.visibility = 'visible'
    }
}

function cls() {
    sortear()
    document.getElementById('botao').style.visibility = 'visible'
    res.innerHTML = `<p>Já pensei em outro valor de 1 a 100...</p>`
    document.getElementById('botao2').style.visibility = 'hidden'
    
}