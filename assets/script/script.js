/* -------------ANIMAÇÕES---------------*/

/* Animação da profissão */
document.addEventListener("DOMContentLoaded", function () {
    const profissaoElement = document.getElementById("profissao");
    const profissoes = ["Engenheiro de Software", "Desenvolvedor Web"];
    let profissaoIndex = 0;
    let charIndex = 0;
    let apagando = false;

    function typeEffect() {
        const textoAtual = profissoes[profissaoIndex];

        if (!apagando && charIndex < textoAtual.length) {
            profissaoElement.innerHTML = textoAtual.substring(0, charIndex + 1) + "<span class='cursor'>|</span>";
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (apagando && charIndex > 0) {
            profissaoElement.innerHTML = textoAtual.substring(0, charIndex - 1) + "<span class='cursor'>|</span>";
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            apagando = !apagando;
            if (!apagando) {
                profissaoIndex = (profissaoIndex + 1) % profissoes.length;
            }
            setTimeout(typeEffect, 1000);
        }
    }

    typeEffect();
});

// Seleciona todos os elementos com a classe 'animate'
const animatedElements = document.querySelectorAll('.animate');

// Verifica se o elemento está visível na janela
function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight - 100;
}

// Adiciona a classe 'show' para ativar a animação
function handleScroll() {
    animatedElements.forEach(el => {
        if (isVisible(el)) {
            el.classList.add('show');
        }
    });
}

// Escuta o evento de rolagem
window.addEventListener('scroll', handleScroll);

// Inicializa animações ao carregar a página
handleScroll();


/* -------------VIDEO--------------- */
const video = document.getElementsByTagName('iframe');
video.autoplay = false;

/* -------------TROCA DE VÍDEO---------------*/
const videoUrls = {
    pt: "./assets/midia/video-pt.mp4", // URL do vídeo em Português
    en: "./assets/midia/video-en.mp4", // URL do vídeo em Inglês
  };
  
  // Seleciona o iframe e os botões
  const videoFrame = document.getElementById("video-frame");
  const btnPt = document.getElementById("btn-pt");
  const btnEn = document.getElementById("btn-en");
  
  // Função para trocar o vídeo
  function changeVideo(language) {
    videoFrame.src = videoUrls[language]; // Altera o atributo 'src' do iframe
  }
  
  // Eventos de clique para os botões
  btnPt.addEventListener("click", () => changeVideo("pt"));
  btnEn.addEventListener("click", () => changeVideo("en"));
  /* -------------FIM TROCA DE VÍDEO---------------*/