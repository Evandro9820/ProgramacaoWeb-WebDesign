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
