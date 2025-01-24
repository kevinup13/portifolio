
const videoUrls = {
    pt: "./assets/midia/video-01.mp4", // URL do vídeo em Português
    en: "./assets/midia/video-02.mp4", // URL do vídeo em Inglês
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
  