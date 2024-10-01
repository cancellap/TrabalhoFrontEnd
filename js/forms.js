document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Envia o formulario sem recarregar a página
  const formData = new FormData(event.target);

  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  fetch("https://66fc43b4c3a184a84d169976.mockapi.io/mensagem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  })
    .then(() => {
      console.log("Adicionado com sucesso!");
      feedback();
    })
    .catch((error) => {
      console.error("Erro ao adicionar contribuição:", error);
    });
});

function feedback() {
  document.querySelector(".card-footer").innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/></svg>';
  document.querySelector(".card-footer").innerHTML += " Enviado com sucesso!";
  document.querySelector("form .form-control").value = "";
  document.querySelector("form textarea").value = "";
}
