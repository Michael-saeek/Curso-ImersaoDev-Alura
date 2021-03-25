function convertir() {
    let taxa = document.querySelector("input#input1").value
    let reaisExchange = document.querySelector("input#input2").value
    let moeda = document.querySelector(".selects").value

    let valorfinal = taxa * reaisExchange
   //console.log(`${taxa} ${reaisExchange} ${moeda}`)
   console.log(valorfinal)

    if (moeda == 'Dolar') {
        let resultado = document.querySelector("h1.numerofinal")
        resultado.innerHTML = valorfinal + ' $'
        resultado.style.color = 'white'
    } else if (moeda == 'Euro') {
        let resultado = document.querySelector("h1.numerofinal")
        resultado.innerHTML = valorfinal + ' €'
        resultado.style.color = 'white'
    } else {
        alert('Ingrese um valor valido')
    }

}
