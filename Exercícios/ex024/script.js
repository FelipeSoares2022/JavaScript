function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contagem regressiva de 10 a 1</h2>`
    let cont = 10
    while (cont >= 1) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont -- // o mesmo que cont = cont - 1
    }
    saida.innerHTML += ` &#x1F3C1;`
}