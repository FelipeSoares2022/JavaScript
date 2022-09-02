let contador = 0
let res = document.querySelector('section#result')
// As variáveis declaradas aqui fora são considerada GLOBAIS e funcionam dentro do programa inteiro

function contar() {
    contador++
    // É o mesmo que contador = contador + 1
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
    document.getElementById('botaoZ').style="visibility: visible; " 
}

function zerar() {
    contador = 0
    res.innerHTML = '<p>O contador está com <mark>0</mark> cliques.</p>'

    document.getElementById('botaoZ').style="visibility: hidden;"
}