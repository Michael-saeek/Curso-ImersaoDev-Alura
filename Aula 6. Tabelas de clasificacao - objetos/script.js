//Clubs Liga da espanha
const Barcelona = {
    nome: 'Barcelona',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    logotipo: 'https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png'
}

const RealMadrid = {
    nome: 'Real Madrid',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    logotipo: 'https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png'
}

let clubes = [Barcelona, RealMadrid]

//Função revisada na Aula 06
function exibirLigadaEspanha(clubes){
    var html = ""
    for (i = 0; i < clubes.length; i++) {
    html += `<tr><td><img src="${clubes[i].logotipo}" height="30px" width="auto"></td>` 
    html += "<td>" + clubes[i].nome + "</td>"
    html += "<td>" + clubes[i].vitorias + "</td>"
    html += "<td>" + clubes[i].empates + "</td>"
    html += "<td>" + clubes[i].derrotas + "</td>"
    html += "<td>" + clubes[i].pontos + "</td>"
    html += "<td><button class='' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button class='' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button class='' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var corpodatabela = document.querySelector(".table-body")
    corpodatabela.innerHTML = html
} 

//Funcões da tabela
function AdicionarNovoClub() {
    let nomedoclub = document.getElementById("inputNome").value
    let imagem = document.getElementById("inputImagem").value
    
    if (imagem.endsWith("jpg") || imagem.endsWith("png")) {
        var club = {
            nome: nomedoclub,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0,
            logotipo: imagem
        }
        clubes.push(club)
        exibirLigadaEspanha(clubes)
        document.getElementById("inputNome").value = ""
        document.getElementById("inputImagem").value = ""
    } else {
        alert(`O valor que você esta inserindo é errado
Tente novamente !! `)
        document.getElementById("inputNome").value = ""
        document.getElementById("inputImagem").value = ""
    }
}

function RemoverClub() {
    
}

// Ações Vitoria Empate e Derrota

function calcularPontos(club) {
    let pontos = (club.vitorias * 3) + club.empates
    return pontos
}

function adicionarVitoria(i) {
    console.log("clicou botao vitoria")
    let equipeFutebol = clubes[i]
    equipeFutebol.vitorias++
    equipeFutebol.pontos = calcularPontos(equipeFutebol)
    exibirLigadaEspanha(clubes)
}

function adicionarEmpate(i) {
    console.log("clicou botao empate")
    let equipeFutebol = clubes[i]
    equipeFutebol.empates++
    equipeFutebol.pontos = calcularPontos(equipeFutebol)
    exibirLigadaEspanha(clubes)
}

function adicionarDerrota(i) {
    console.log("clicou botao derrota")
    let equipeFutebol = clubes[i]
    equipeFutebol.derrotas++
    exibirLigadaEspanha(clubes)
}





