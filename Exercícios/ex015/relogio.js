function info() {
    let meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
    let semana = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `<p style="font-size: 3em; padding: 0px; margin: 0px;">
    <mark>${hora}:${min}:${seg}</mark>
</p>`
    saida.innerHTML += `<p style="padding-bottom: 3px; margin-top: 3px;">
        <mark>${semana[sem]}, ${dia} de ${meses[mes]} de ${ano}</mark>
    </p>`
}