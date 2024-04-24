let pontos = 0;
let resultado = document.getElementById("resultado")
let body = document.getElementById("body");
let chances = 10;
let letras_erradas = document.getElementById("letras-erradas");
let erros = [];
let form = document.getElementById("form");
let jogada = document.getElementById("jogada")
let main = document.querySelector(".container");
let pontuacao = document.getElementById("pontos");
let dica = document.getElementById("dica");
let tentativas = document.getElementById("tentativas");
let palavra = document.getElementById("palavra");

let tema = ["esporte", "fruta", "animal"];
let esportes = ["futebol", "basquete", "tênis", "vôlei", "handebol", "boxe", "golfe", "esgrima", "badminton", "ciclismo", "cricket", "rugby", "surfe", "boliche", "atletismo", "beisebol", "canoagem", "dardos"];
let frutas = ["uva", "banana", "manga", "morango", "abacate", "maçã", "graviola", "abacaxi", "damasco", "goiaba", "laranja", "maracujá", "caju", "laranja", "cereja", "melancia", "ameixa", "coco"];
let animais = ["tartaruga", "macaco", "zebra", "cachorro", "rato", "cavalo", "crocodilo", "urso", "girafa", "mosquito", "foca", "raposa", "canguru", "coala", "panda", "castor", "aranha", "borboleta"];

//let randomTema = Math.floor(Math.random() * tema.length);
//let randomPalavra = Math.floor(Math.random() * 16);
let randomTema = 2
let randomPalavra = 0
let cont = 0;
let isPlaying = false;

function CriandoCards() {
    if (tema[randomTema] === "esporte") {
    for (let i = 0; i < esportes[randomPalavra].length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "letra");
        palavra.appendChild(div);
    }
    
    
    }
    
    else if (tema[randomTema] === "fruta") {
    for (let i = 0; i < frutas[randomPalavra].length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "letra");
        palavra.appendChild(div);
    }
    
    }
    else {
    for (let i = 0; i < animais[randomPalavra].length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "letra");
        palavra.appendChild(div);
    }
    }
    }

CriandoCards();

let letras = document.querySelectorAll(".letra");

function LetrasErradas(erro) {
    erro.push(jogada.value);
    letras_erradas.innerHTML = "Letras erradas: " + erro;
    chances--;
    tentativas.innerHTML = "Você tem: " + chances + " tentativa(s)";
}

function game() {
form.addEventListener("submit", (e) => {
e.preventDefault();

let nextword = setTimeout(() => {
    for (let i = 0; i < letras.length; i++) {
        if (letras[i].textContent != "") {
            cont++;
        }
    }
    if (cont === letras.length) {
        erros = [];
        letras_erradas.innerHTML = "";
        pontos = pontos + 25;
        pontuacao.innerHTML = "Pontuação: " + pontos;
        randomTema = Math.floor(Math.random() * tema.length);
        dica.innerHTML = "Dica sobre a palavra: " + tema[randomTema];
        randomPalavra = Math.floor(Math.random() * 16);
    
        cont = 0;

        for (let i = 0; i < letras.length; i++) {
            letras[i].remove();
        }

        CriandoCards();

        letras = document.querySelectorAll(".letra");

    }
    else {
        cont = 0;

    }


}, 1000)

if (tema[randomTema] === "esporte") {
    if (esportes[randomPalavra].includes(jogada.value) === true) {
        for (let i = 0; i < esportes[randomPalavra].length; i++) {
            if (esportes[randomPalavra][i] === jogada.value) {
        letras[i].textContent = jogada.value.toUpperCase();
            }

        }
    }
    else {
        LetrasErradas(erros, chances);
    }

}

else if (tema[randomTema] === "fruta") {
    if (frutas[randomPalavra].includes(jogada.value) === true) {
        for (let i = 0; i < frutas[randomPalavra].length; i++) {
            if (frutas[randomPalavra][i] === jogada.value) {
        letras[i].textContent = jogada.value.toUpperCase();
            }

        }
    }
    else {
        LetrasErradas(erros, chances);
    }
}

else {
    if (animais[randomPalavra].includes(jogada.value) === true) {
        for (let i = 0; i < animais[randomPalavra].length; i++) {
            if (animais[randomPalavra][i] === jogada.value) {
            letras[i].textContent = jogada.value.toUpperCase();
            }

        }
    }
    else {
        LetrasErradas(erros, chances);
    }
}
jogada.value = "";
            })
        }

game();
    
let over = setInterval(() => {
if (chances === 0) {
    chances = 0;
    let url = "score.html?" + pontos;
    window.location.href = url;
    clearInterval(over);
}
}, 0.1)

pontuacao.innerHTML = "Pontuação: " + pontos;
dica.innerHTML = "Dica sobre a palavra: " + tema[randomTema];
tentativas.innerHTML = "Você ainda tem: " + chances + " tentativa(s)";
