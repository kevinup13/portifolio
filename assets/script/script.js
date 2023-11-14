// Initial data
const changeThemeBtn = document.querySelector("#change-theme");
const $html = document.querySelector("html");

// Functions
function toggleTheme() {
    $html.classList.toggle("light");
}
function verifyTheme() {
    let textSpan = document.getElementById("textTheme")
    if ($html.classList.contains("light")) {
        textSpan.innerHTML = "Light";
    } else {
        textSpan.innerHTML = "Dark";
    }
}
function loadTheme() {
    let theme = localStorage.getItem("html");
    $html.classList.add(theme);
    verifyTheme();
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
})
loadTheme();