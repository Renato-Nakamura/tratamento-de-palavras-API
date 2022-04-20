const verificar = () => {
  let words = document.querySelector("#words").value;
  const resposta = document.querySelector("#resposta");
  const onlyValidWords = document.querySelector("#onlyValidWords").checked;
  const onlySingular = document.querySelector("#onlySingular").checked;
  const random = document.querySelector("#random").checked;
  const removeBadWords = document.querySelector("#removeBadWords").checked;
  words = words.split(",");
  let body = {
    filters: {
      onlyValidWords: onlyValidWords,
      onlySingular: onlySingular,
      random: random,
      removeBadWords: removeBadWords,
    },
    words: words,
  };
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
