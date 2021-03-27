let listadeAnimes = [
    'https://cdn.jkanime.net/assets/images/animes/image/naruto-shippuden.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/shingeki-no-kyojin-the-final-season.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/death-note.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/jujutsu-kaisen-tv.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/dr-stone.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/hunter-x-hunter-greed-island.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/bleach.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/yakusoku-no-neverland.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/code-geass-hangyaku-no-lelouch.jpg',
    'https://cdn.jkanime.net/assets/images/animes/image/sword-art-online.jpg'
]

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector("#listaFilmes")
}

function AdicioneaLista() {
    let adicionar = document.querySelector("input.input").value
    
    if (adicionar.endsWith('jpg') || adicionar.endsWith('png')){
        listadeAnimes.push(adicionar)
        alert('Conteudo adicionado com Sucesso !')
        document.querySelector("input.input").value = ""
        mostrarImagem()
    } else {
        alert('Você esta tentando inserir uma imagem errada')
        alert('Tente novamente buscar uma imagem em formato jpg ou png')
        document.querySelector("input.input").value = ""
    }
}

function mostrarImagem() {
    for (let i = 0; i <= listadeAnimes.length; i++){
        document.write("<img src=" + listadeAnimes[i] + '>')
    }
}


function totaldeAnimes() {
    let listagem = listadeAnimes.length
    alert(`Itens adicionados na lista total: ${listagem}`)
}



function contagemdoArray() {
    for (let i = 0; i <= listadeAnimes.length; i++ ) {
        this.lista = listadeAnimes[i] 
    }
    return this.lista
}


// Testando janela pop up - abrindo e fechando
function abrirPopup() {
    let abrir = document.getElementById('popuplista').style.display = "block"
}

function fecharPopup() {
    let fechar = document.getElementById('popuplista').style.display = "none"
}