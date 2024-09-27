const blackList = [];
async function getJoke() {
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${sortCatego()}`);
    const jokeData = await response.json();
    return jokeData.value;
}
function sortCatego() {
    const catego = ["animal", "career", "celebrity", "dev", "fashion", "food", "history", "money", "movie", "music", "political", "science", "sport", "travel"]
    let num = parseInt(Math.random() * catego.length);
    return catego[num];
}

// async function traduzirTexto(texto, idiomaOrigem, idiomaDestino) {
//     const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=${idiomaOrigem}|${idiomaDestino}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Erro na requisição da api MyMemory`);
//         }
//         const data = await response.json();


//         if (data && data.responseData && data.responseData.translatedText) {
//             return data.responseData.translatedText;
//         } else {
//             throw new Error("Tradução não disponível");
//         }
//     } catch (error) {
//         console.error("Erro:", error);
//         return "Erro ao traduzir a piada.";
//     }
//     console.log(data);
// }

const h1 = document.getElementsByClassName('piada')[0];

getJoke().then(async joke => {
    // const traducaoPiada = await traduzirTexto(joke, 'en', 'pt');
    // h1.textContent = `${traducaoPiada}`;
    h1.textContent = joke
});
