const controls = document.querySelectorAll(".control");
let ItemAtual = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

//Criei um foreach para quando o usuario clicar na barra de scroll
controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("botao-left");

    if (isLeft) {
      ItemAtual -= 1;
    } else {
      ItemAtual += 1;
    }

    if (ItemAtual >= maxItems) {
      ItemAtual = 0;
    }

    if (ItemAtual < 0) {
      ItemAtual = maxItems - 1;
    }

    items[ItemAtual].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

  });
});
