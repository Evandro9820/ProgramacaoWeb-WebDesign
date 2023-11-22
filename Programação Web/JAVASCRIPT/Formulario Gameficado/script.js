/* //LIGAÇÕES 
let htmlPontuacao = document.getElementById("pontucao")

//VARIAVEIS GLOBAIS

let pontos = 0



function pontuar() {
    pontos +=10
    htmlPontuacao.innerHTML = pontos
    
    const progresso = document.getElementById('progresso')
    const largura = Math.min(pontos,100);

    progresso.style.width=largura+'%';

    progresso.innerHTML = largura+'%';
} */


let pontuacao = 0;
function pontuar() {
    pontuacao+=10;
    let htmlElement = document.getElementById('pontucao');
    if (htmlElement) {
        htmlElement.innerHTML = 'Pontuação: ' + pontuacao;
    }

    const progresso = document.getElementById('progresso')
    const largura = Math.min(pontuacao,100);

    progresso.style.width=largura+'%';

    progresso.innerHTML = largura+'%';
}


// MOVER PÁGINAS
function proximaEtapa() {
    moverEtapa(1);
}

function etapaAnterior() {
    moverEtapa(-1);
}

function moverEtapa(direcao) {
    var elementoEtapaAtual = document.querySelector('.pagina-formulario:not([style="display: none;"])');
    if (!elementoEtapaAtual) {
        document.getElementById('pagina-1').style.display = "block";
        return;
    }

    var numeroEtapaAtual = parseInt(elementoEtapaAtual.getAttribute('data-etapa'));
    elementoEtapaAtual.style.display = 'none';

    var numeroProximaEtapa = numeroEtapaAtual + direcao;
    var elementoProximaEtapa = document.getElementById('pagina-' + numeroProximaEtapa);

    if (elementoProximaEtapa) {
        elementoProximaEtapa.style.display = 'block';
    } else {
        elementoEtapaAtual.style.display = 'block';
        if (direcao > 0) {
            alert("Você completou o formulário!");
        }
    }

    var botaoSalvar = document.getElementById('btn-salvar');
    if (numeroProximaEtapa == 2) {
        botaoSalvar.style.display = 'inline-block';
    } else {
        botaoSalvar.style.display = 'none';
    }
}


/* function confete() {
    for (let i = 0; i < 20; i++) {
        let confetti = document.createElement('div');phone)
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        document.body.appendChild(confetti);
    }
} */

document.getElementById('btn-salvar').addEventListener('click', function () {
    for (let i = 0; i < 50; i++){ confete();}
});

function confete() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 1000);
}
// Validação de um telefone 

function validarCelularBrasil(numero) {
    var re = /^0?[1-9]{2}9?[0-9]{8}$/;
    return re.test(numero);
}

function validarTelefone() {
    var numero = document.getElementById('telefone').value;
    if (!validarCelularBrasil(numero)) {
        alert('Por favor, insira um número de celular válido.');
        return false;
    }
    return true;
}