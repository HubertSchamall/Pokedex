const changingThemeButton = (document.getElementById("changing-theme-button"));

const body = document.querySelector("body");

changingThemeButton.addEventListener("click", () => {
    const darkMode = body.classList.contains("dark-mode");
  
    body.classList.toggle("dark-mode");
  
    if (darkMode) {
      changingThemeButton.setAttribute("src", "./src/imagens/sun.png");
    } else {
      changingThemeButton.setAttribute("src", "./src/imagens/moon.png");
    }
  });