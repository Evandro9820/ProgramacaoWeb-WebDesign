//LIGAÇÕES 
let htmlPontuacao = document.getElementById("pontucao")

//VARIAVEIS GLOBAIS

let pontos = 0



function pontuar(){
    pontos +=10
    htmlPontuacao.innerHTML = pontos
    
    const progresso = document.getElementById('progresso')
    const largura = Math.min(pontos,100);

    progresso.style.width=largura+'%';

    progresso.innerHTML = largura+'%';
}

function limparFormulario() {
  const camposForm = document.querySelectorAll('#formulario input, #formulario select'); // seleciona todos os campos de input e select no form

  const fomrulario = document.getElementById('form')
  const camposform = fomrulario.querySelectorAll('input, textarea')
  camposform.forEach(function (campos){
    campos.value="";
  });

  // Restabelece a pontuação e a barra de progresso para 0
  pontos = 0;
  document.getElementById("pontucao").innerText = pontos;
  
  progresso.style.width=largura=0+'%'
  progresso.innerHTML = largura=0+'%';

}

function proximaEtapa() {
  moverEtapa(1);
}

function etapaAnterior() {
  moverEtapa(-1);
}

function moverEtapa(direcao) {
  var elementoEtapaAtual = document.querySelector('.pagina-formulario:not([style="display: none;"])');
  if (!elementoEtapaAtual) {
      document.getElementById('pagina-1').style.display = 'block';
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
}


