const presstoplay = document.querySelector('buttom.buttom')
const tituloOculto = document.querySelector('h1.page-title')
const mes = document.getElementById('resultado1')
const quiz1 = document.querySelector('div.playGamequiz1')
const quiz2 = document.querySelector('div.playGamequiz2')
const parabens = document.querySelector('div.ocultarparabens')


// botão que da play ao jogo
function playGame() {
  presstoplay.className = "botaoOculto"
  tituloOculto.className = "page-title-oculto"
  quiz1.className = "mostrarplayGamequiz1"
  
}

//Primer round de perguntas !
function botaonaoquiz1() {
    mes.innerHTML = geradornumeroaMeses()
}

function botaosimquiz1() {
    quiz1.className = "ocultarplayGamequiz1"
    quiz2.className = "mostrarPlayGamequiz2"

}

//Segundo round de perguntas !

function botaonaoquiz2() {
    mes.innerHTML = geradornumeroaMeses()
}

function botaosimquiz2() {
    quiz2.className = "ocultarplayGamequiz2"
    parabens.className = "mostrarparabens"
}

//Reiniciar jogo
function reiniciarJogo() {
    parabens.className = "ocultarparabens"
    presstoplay.className = "mostrarbuttom"
    tituloOculto.className = "page-title"
}

//Gerador de numeros que retorna os meses
function geradornumeroaMeses() {
    const numeroRandom = parseInt(Math.random() * 12)
    switch (numeroRandom) {
        case 0:
            return 'Janeiro'
        case 1: 
            return 'Fevereiro'
        case 2: 
            return 'Março'
        case 3: 
            return 'Abril'
        case 4: 
            return 'Maio'
        case 5: 
            return 'Junho'
        case 6: 
            return 'Julho'
        case 7: 
            return 'Agosto'
        case 8: 
            return 'Setembro'
        case 9: 
            return 'Outubro'
        case 10: 
            return 'Novembro'
        case 11: 
            return 'Dezembro'
    } 
   
}



