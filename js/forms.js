document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Envia o formulario sem recarregar a página
  const formData = new FormData(event.target);

  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  const json = JSON.stringify(formObject); // Converte em JSON
  console.log(json);
});
