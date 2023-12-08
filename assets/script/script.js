// Initial data
const changeThemeBtn = document.querySelector("#change-theme");
const $html = document.querySelector("html");

// Functions

function toggleTheme() {
    // muda o tema da página
    $html.classList.toggle("light");
}
function verifyTheme() {
    // verifica qual tema está ativo e muda o texto do tema
    let textSpan = document.getElementById("textTheme")
    if ($html.classList.contains("light")) {
        textSpan.innerHTML = "Light";
    } else {
        textSpan.innerHTML = "Dark";
    }
}
function loadTheme() {
    // pega o tema salvo no localstore e atualiza na pagina
    let theme = localStorage.getItem("html");
    if (theme) {
        $html.classList.add(theme);
    }
    verifyTheme();
}

function alterarVideo(novoSrc) {
    // Obtém a referência ao elemento de vídeo
    let video = document.getElementById('video--apresentacao');

    // Atualiza o atributo src com o novo caminho do vídeo
    video.src = novoSrc;
}

// Events
changeThemeBtn.addEventListener("change", () => {
    toggleTheme();
    verifyTheme();
    // save theme
    if ($html.classList.contains("light")) {
        localStorage.setItem('html', 'light');
    } else {
        localStorage.setItem('html', '');
    }

    // verifica qual tema está ativo e salva no localstore
    /* $html.classList === "light" ? localStorage.setItem('html', 'light') : localStorage.setItem('html', ''); */
})
loadTheme();

let btnVideo = document.querySelectorAll('.sobre--buttons input');
btnVideo.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn === btnVideo[0]) {
            btnVideo[0].classList.add('active');
            btnVideo[1].classList.remove('active');
        } else if (btn === btnVideo[1]) {
            btnVideo[0].classList.remove('active');
            btnVideo[1].classList.add('active');
        }
    })
})

/* scrool menu flutuante */
window.onscroll = function () { myScroll() };

function myScroll() {
    let windowWidth = window.innerWidth;
    let screenWidth = screen.Width;
    if (document.documentElement.scrollTop > 300 && windowWidth > 768 || screenWidth > 768) {
        document.getElementById("float__navbar").style.display = "block";
    } else {
        document.getElementById("float__navbar").style.display = "none";
    }

}