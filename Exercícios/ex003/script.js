function inicio() {
    let nom = window.prompt('Qual é o seu nome? ')
    let res = document.querySelector('section#result')

    res.innerHTML = `Olá, ${nom}! É um prazer te conhecer!<hr>`
    res.innerHTML += `<p>Seu nome tem ${nom.length} letras</p>`
    res.innerHTML += `<p>Seu nome em maiúsco; ` + nom.toUpperCase `.</p>`
    res.innerHTML += `<p>Seu nome em minúsculo; ` + nom.toLowerCase `.</p>`
}
