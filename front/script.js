const verificar = () => {
  let words = document.querySelector("#words").value;
  const resposta = document.querySelector("#resposta");
  words = words.split(",");
  let body = {
    random: true,
    words: words,
  };
  console.log(words);
  fetch("/verificar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((r) => r.json())
    .then((a) => {
      console.log(a);
      resposta.innerText = JSON.stringify(a.filteredWords);
    });
};
