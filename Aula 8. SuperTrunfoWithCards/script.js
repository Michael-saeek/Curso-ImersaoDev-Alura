const Hisoka = {
    nome: 'Hisoka',
    imagem: 'https://cdn141.picsart.com/337154016023211.png?type=webp&to=min&r=640',
    atributos: {
    ataque: 75,
    defesa: 70, 
    magia: 90,
    }
}

const Gon = {
    nome: 'Gon Freecs',
    imagem: 'https://i.pinimg.com/originals/df/0c/57/df0c57e7e818e2ba83226c7de4020450.png',
    atributos: {
    ataque: 81,
    defesa: 80, 
    magia: 40
    }
}

const Itadori  = {
    nome: 'Juji Itadori',
    imagem: 'https://external-preview.redd.it/MN4zATGKbZR8jXGwwUdqu-fyPTnB9_pDBYfD2xUQY_o.png?auto=webp&s=a2c8dfbecef6fcb5d3d95b27114781c8a6fe0369',
    atributos: {
    ataque: 90,
    defesa: 85, 
    magia: 70
    }
}

const Satoru = {
    nome: 'Satoru Gojo',
    imagem: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/e/ef/Satoru_Gojo_%28Anime_2%29.png/revision/latest/scale-to-width-down/336?cb=20201025013634',
    atributos: {
    ataque: 95,
    defesa: 86, 
    magia: 90
    }
}

const Mirio = {
    nome: 'Mirio Lemillion',
    imagem: 'https://img-monst.appbank.net/images/monster/big/5003.png?cb=20190104.01',
    atributos: {
    ataque: 84,
    defesa: 80, 
    magia: 65
    }
}

const Midoriya = {
    nome: 'Midoriya',
    imagem: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/05/Deku_Vol._12_Cover_Art.png/revision/latest/scale-to-width-down/137?cb=20200228175927',
    atributos: {
    ataque: 79,
    defesa: 55, 
    magia: 55
    }
}

const Ichigo = {
    nome: 'Ichigo Kurosaki',
    imagem: 'https://2.bp.blogspot.com/-cw_pOaSVYgw/UKp7CYdoDSI/AAAAAAAAlr8/At5EYqZISPg/s320/ichigo_hell_form_by_xedor993-d39h3h7.png',
    atributos: {
    ataque: 90,
    defesa: 81, 
    magia: 85
    }
}

const Naruto = {
    nome: 'Naruto Uzumaki',
    imagem: 'https://4.bp.blogspot.com/-cgf6-E-rh5k/XGiXd-TBCdI/AAAAAAAAHuU/WE_N3mzjajkTMB7W9QWNSvQ1Ko-W23gcACLcBGAs/s1600/2884_render_rendernarutosennin.png',
    atributos: {
    ataque: 90,
    defesa: 85, 
    magia: 78
    }
}


const Sasuke = {
    nome: 'Sasuke Uchiha',
    imagem: 'https://i.pinimg.com/originals/93/28/cd/9328cdcfe1d08ab940cc739aea1ae1fc.png',
    atributos: {
    ataque: 90,
    defesa: 85, 
    magia: 78
    }
}

const Asuna = {
    nome: 'Asuna',
    imagem: 'https://steamuserimages-a.akamaihd.net/ugc/419188961965417069/1C1AD2018A2B48696BA7F759F08C0A845F1DC5AD/',
    atributos: {
    ataque: 82,
    defesa: 81, 
    magia: 80
    }
}


const Kirito = {
    nome: 'Kirito',
    imagem: 'https://thumbs.gfycat.com/MerryShorttermKarakul-small.gif',
    atributos: {
    ataque: 84,
    defesa: 82, 
    magia: 80
    }
}

const GokuLegendario = {
    nome: 'Goku Legendario',
    imagem: 'https://i.pinimg.com/originals/ef/41/08/ef410813496eee964cae98c95e165a14.png',
    atributos: {
    ataque: 100,
    defesa: 100, 
    magia: 100
    }
}

let cards = [Hisoka, Gon, Itadori, Satoru, Mirio, Midoriya, Ichigo, Naruto, Sasuke, Asuna, Kirito, GokuLegendario]
let machinecard
let playercard
let pontosJogador = 0
let pontosMaquina = 0
let flipAudio = document.getElementById('flipcard')
let winAudio = document.getElementById('win')
let loseAudio = document.getElementById('lose')
let drawAudio = document.getElementById('draw')

function sortearCarta() {
    document.querySelector('.sortear').style.display = "none"
    var cartadaMaquina = parseInt(Math.random() * cards.length)
    machinecard = cards[cartadaMaquina]
    cards.splice(cartadaMaquina, 1)
    
    var cartadoJogador = parseInt(Math.random() * cards.length)
    while (cartadaMaquina == cartadoJogador) {
        console.log('Houve cartas repetidas')
        cartadoJogador = parseInt(Math.random() * cards.length)
    }
    

    playercard = cards[cartadoJogador]
    cards.splice((cartadoJogador),1 )
    /*console.log('Carta da Maquina')
    console.log (machinecard)
    console.log('Carta do jogador')
    console.log(playercard)
    console.log(cards) */
    
    exibirOpcoesNaTela()
    exibirCartadoJogador()
    UpdateCartasnoDeck()

}

function exibirCartadoJogador() { 
    let divPlayerCard = document.querySelector('.playerCards')
    divPlayerCard.style.transform = "rotateY(180deg)";
    let divFrontCard = document.querySelector('#frontcard-player')
    flipAudio.play()

	// flipCardAudio.play();
    divFrontCard.innerHTML = `
    <div class="frontcard-title"><h4>${playercard.nome}</h4></div>

    <div class="frontcard-personagem">
    <img src="${playercard.imagem}" height="190px" width="auto">
    </div>

    <div class="frontcard-atributos">
        <p>Ataque: ${playercard.atributos.ataque}</p>
        <p>Defesa: ${playercard.atributos.defesa}</p>
        <p>Magia: ${playercard.atributos.magia}</p>
    </div>
    `
}

function exibirCartadaMaquina() {
    let divFrontCard = document.querySelector('#frontcard-enemy')
    divFrontCard.innerHTML = `
    <div class="frontcard-title"><h4>${machinecard.nome}</h4></div>

    <div class="frontcard-personagem">
    <img src="${machinecard.imagem}" height="190px" width="auto">
    </div>

    <div class="frontcard-atributos">
        <p>Ataque: ${machinecard.atributos.ataque}</p>
        <p>Defesa: ${machinecard.atributos.defesa}</p>
        <p>Magia: ${machinecard.atributos.magia}</p>
    </div>
    `
}

function exibirOpcoesNaTela() {
    let opcoes = document.querySelector('.paineldecomandos')
    //let botaoSortear = document.querySelector(".sortear").disabled = true
    opcoes.innerHTML += `
    <div class="opcoes">
    <h2>Escolha o seu atributo</h2>
    <button type="button" id="btnAtaque" class="btnJogar" >ataque</button>
    <button type="button" id="btnDefesa" class="btnJogar" >defesa</button>
    <button type="button" id="btnMagia" class="btnJogar" >magia</button>
    </div>
    ` 
    obtendoAtributo()
}


UpdateCartasnoDeck()
function UpdateCartasnoDeck() {
    let etiquetaSpan = document.getElementById('cartasnodeck')
    let contagemBaralho = cards.length
    etiquetaSpan.innerHTML = contagemBaralho

}

function obtendoAtributo() {
    var btns = document.querySelectorAll('.btnJogar');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            jogar(btn.innerText) 
        })
    })

    
}

function mostrarResultado(resultado) {
    document.querySelector('.opcoes').style.display = "none"
    let opcoes = document.querySelector('.paineldecomandos')
    opcoes.innerHTML = `
    <div class="resultado">
    <h2>${resultado}</h2>
    <button type="button" class="reiniciar" onclick="reiniciarJogo()" >Jogar Novamente</button>
    </div>
    `

}

function jogar(btninnerText) {
    let atributoSeleccionado = btninnerText
    let enemyCards = document.querySelector('.enemyCards')
    let ptsJogador = document.getElementById('pontosJogador')
    let ptsMaquina = document.getElementById('pontosMaquina')
	enemyCards.style.transform = "rotateY(180deg)";
    exibirCartadaMaquina()
    console.log(btninnerText)
   
   
    if (playercard.atributos[atributoSeleccionado] > machinecard.atributos[atributoSeleccionado]) {
        ptsJogador.innerHTML = ++pontosJogador
        mostrarResultado("Parabens, você ganhou!")
        winAudio.play()

    } else if (machinecard.atributos[atributoSeleccionado] > playercard.atributos[atributoSeleccionado]) {
        ptsMaquina.innerHTML = ++pontosMaquina
        mostrarResultado("Perdeu !!")
        loseAudio.play()

    } else if (playercard.atributos[atributoSeleccionado] == machinecard.atributos[atributoSeleccionado]) {
       mostrarResultado("Empatou !!")
       drawAudio.play()
    } 
}

function reiniciarJogo() {
    let opcoes = document.querySelector('.paineldecomandos')
    let contagemBaralho = cards.length
    if (contagemBaralho == 0) {
        if(pontosJogador > pontosMaquina) {
            document.querySelector(".resultado").style.display = "none"
            opcoes.innerHTML = `
            <h1 id="msgfinal">Voçe Ganhou o Jogo Parabens !!</h1>
            `
        } else if (pontosJogador < pontosMaquina) {
            document.querySelector(".resultado").style.display = "none"
            opcoes.innerHTML = `
            <h1 id="msgfinal>Infelizmente vc PERDEU HA HA !</h1>
            `
        } else if (pontosJogador == pontosMaquina) {
            document.querySelector(".resultado").style.display = "none"
            opcoes.innerHTML = `
            <h1 id="msgfinal>EMPATOU !</h1>
            `
        }
    
    } else {
        document.querySelector(".resultado").style.display = "none"
        let playerCards = document.querySelector('.playerCards')
        let enemyCards = document.querySelector('.enemyCards')
        playerCards.style.transform = "rotateY(0deg)"
        enemyCards.style.transform = "rotateY(0deg)"

        let opcoes = document.querySelector('.paineldecomandos')
        opcoes.innerHTML = `<button type="button" class="sortear" onclick="sortearCarta()" >Sortear carta</button>`
    }

}

/*
function olharoDeck() {
    
    let deck = document.querySelector('.containerCards')
    document.querySelector('#paineldeJogo').style.display = "none"
    for(let i = 0; i < cards.length; i++) {
        deck.innerHTML += 
        `<div id="card${[i]}" class="container-baralho">
            <div class="cartas">
                <div class="frontcard-title"><h4>${cards[i].nome}</h4></div>

                <div class="frontcard-personagem">
                <img src="${cards[i].imagem}" height="190px" width="auto">
                </div>

                <div class="frontcard-atributos">
                    <p>Ataque: ${cards[i].atributos.ataque}</p>
                    <p>Defesa: ${cards[i].atributos.defesa}</p>
                    <p>Magia: ${cards[i].atributos.magia}</p>
                </div>
            </div>
        </div>`
    } 
}
*/
    


















