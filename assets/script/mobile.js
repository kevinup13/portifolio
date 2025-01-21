document.addEventListener("DOMContentLoaded", () => {
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuShow = document.querySelector(".menu-show");
    const menuClose = document.querySelector(".menu-close");
  
    // Exibir o menu ao clicar no ícone de abrir
    menuShow.addEventListener("click", () => {
      menuOverlay.classList.add("active"); // Adiciona a classe para ativar a animação
    });
  
    // Fechar o menu ao clicar no ícone de fechar
    menuClose.addEventListener("click", () => {
      menuOverlay.classList.remove("active"); // Remove a classe para ocultar
    });
  
    // Fechar o menu ao clicar fora do menu
    menuOverlay.addEventListener("click", (event) => {
      if (event.target === menuOverlay) {
        menuOverlay.classList.remove("active"); // Remove a classe para ocultar
      }
    });
  });
  