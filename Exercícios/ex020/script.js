function estação() {
    let mês = prompt('Digite o mês em extenso ou seu nº (ex: Setembro ou 9)')
    let saida = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': case '1': case '2': case '3': case '01': case '02': case '03':
            estação = 'INVERNO'            
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO': case '4': case '5': case '6': case '04': case '05': case '06':
            estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO': case '7': case '8': case '9': case '07': case '08': case '09':
            estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO': case '10': case '11': case '12':
            estação = 'OUTONO'
            break    
        default:
            estação = 'INDEFINIDA'
            break            
        } if (mês > 0, mês < 13) {
        saida.innerHTML = `<p>No Mês <mark>${mês}</mark>, a estação é <mark><strong>${estação}</strong></mark>.</p>`    
        } else {
            saida.innerHTML = `<p>No Mês de <mark>${mês}</mark>, a estação é <mark><strong>${estação}</strong></mark>.</p>`
        }    
    
}

// } else if (estação = "INDEFINIDA") { 
    // saida.innerHTML = `<p>Erro mês Indefinido</p>`