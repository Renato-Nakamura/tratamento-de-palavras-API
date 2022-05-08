let mode = "text";
let apiWords;
// let socket = io()

// socket.on('verifyWords',(words)=>{
//   apiWords = words;
//   printFilteredWords();
// })
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
  // socket.emit('verifyWords',body)
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
      apiWords = a;
      printFilteredWords();
    });
};

const printFilteredWords = () => {
  if (apiWords == undefined && apiWords == null) return;
  if (mode == "array")
    resposta.innerText = JSON.stringify(apiWords.filteredWords);
  if (mode == "text") resposta.innerText = apiWords.filteredWords;
};

const toggle = () => {
  // mode = mode == "text" ? "array" : "text";
  if (mode == "text") {
    document.querySelector(".toggleSwap").style.left = "62px";
    document.querySelector("#array").style.color = "#f2f2f3";
    document.querySelector("#text").style.color = "#ea4c89";
    mode = "array";
    printFilteredWords();
  } else {
    document.querySelector(".toggleSwap").style.left = "1px";
    document.querySelector("#text").style.color = "#f2f2f3";
    document.querySelector("#array").style.color = "#ea4c89";
    mode = "text";
    printFilteredWords();
  }
};
