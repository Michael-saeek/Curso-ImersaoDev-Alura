let listadeAnimes = ['https://cdn.jkanime.net/assets/images/animes/image/naruto-shippuden.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/shingeki-no-kyojin-the-final-season.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/death-note.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/jujutsu-kaisen-tv.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/dr-stone.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/hunter-x-hunter-greed-island.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/bleach.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/yakusoku-no-neverland.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/code-geass-hangyaku-no-lelouch.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/sword-art-online.jpg',
]

//nome do anime
let titulosdeanimes = [
    'Naruto Shippuden', 'Shingeky no Kyojin', 'Death note', 'Jujutsu Kaisen', 'Dr. Stone', 'Hunter x Hunter', 'Bleach', 'Yakusoku no Neverland', 'Code Geass', 'Swort Art Online'
]

let elementoOnClicks = []

function criarElementosDiv() {

    for (let i = 0; i < titulosdeanimes.length; i++) {
        let onClicks = `AdicionarTrailer${i}()`
        elementoOnClicks.push(onClicks)
        console.log(onClicks)
    }
}
criarElementosDiv()

// Ordenar itens Alfabeticamente 
function OrdenarItens() {
    titulosdeanimes.sort()
    console.log(titulosdeanimes)
}
// Menu de animes
let listaAnimes = document.querySelector('.container-pai')
let trailer = document.querySelector("#trailer")
//Validacao de Anime - Desafio do Guilherme 

function AdicioneaLista() {
    validaAnime()
}

function validaAnime() {
    let adicionar = document.querySelector("input.input").value
    if (adicionar.endsWith('jpg') || adicionar.endsWith('png')) {
        let nomedoitem = prompt('Qual é o nome deste item?')
        titulosdeanimes.push(nomedoitem)
        listadeAnimes.push(adicionar)
        elementoOnClicks.push(`botaonovo`)
        alert('Conteudo adicionado com Sucesso !')
        document.querySelector("input.input").value = ""
        listarAnimeNaTela(adicionar, nomedoitem, elementoOnClicks)

    } else {
        alert('Você esta tentando inserir uma imagem errada')
        alert('Tente novamente buscar uma imagem em formato jpg ou png')
        document.querySelector("input.input").value = ""
    }
}


// mostrartrailer ao clickar o poster
function AdicionarTrailer0() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/kJCMQXNvADk" title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
   
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}


function AdicionarTrailer1() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/M_OauHnAFc8" title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
 
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}

function AdicionarTrailer2() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/BHUPZpSKkhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
 
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}


function AdicionarTrailer3() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/pkKu9hLT-t8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
 
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}


function AdicionarTrailer4() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/vHtZhVtEu04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
 
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}

function AdicionarTrailer5() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/x2Tw0gKHLPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
 
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}

function AdicionarTrailer6() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/45rrwI-wUEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
 
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}

function AdicionarTrailer7() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/48WkJZme5hY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
 
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}

function AdicionarTrailer8() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/O9Rdqm_74C0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
 
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}

function AdicionarTrailer9() {
    let trailerYoutube = `
    <iframe width="560" height="315" id="trailer" src="https://www.youtube.com/embed/4S1horOmDEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    if (document.getElementById('trailer')) {
        document.getElementById('trailer').remove()
 
    } else {
        listaAnimes.innerHTML = listaAnimes.innerHTML + trailerYoutube 
    }
}

// Opções para mostrar imagens !
function listarAnimeNaTela(anime, nome) {
    let elemento = `<div id= "${nome}" class="containerpai-top10" onclick="" >
                    <h2>${nome}</h2>
                    <img src="${anime}" height="250px" width="auto" />
                    </div>`
    listaAnimes.innerHTML = listaAnimes.innerHTML + elemento
}

function mostrarmeutop10() {
    for (let i = 0; i < listadeAnimes.length; i++) {
        listaAnimes.innerHTML = listaAnimes.innerHTML +
            `<div id="${titulosdeanimes[i]}" class="containerpai-top10" onclick="${elementoOnClicks[i]}" >
        <h2>${titulosdeanimes[i]}</h2>
        <img src="${listadeAnimes[i]}" height="250px" width="auto" />
        </div>`
    }
}


function totaldeAnimes() {
    let listagem = listadeAnimes.length
    alert(`Total de animes adicionados: ${listagem}`)
}

// Testando janela pop up - abrindo e fechando
function abrirPopup() {
    let abrir = document.getElementById('popuplista').style.display = "block"
}

function fecharPopup() {
    let fechar = document.getElementById('popuplista').style.display = "none"
}

