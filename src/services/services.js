const cheerio = require("cheerio");
const rp = require("request-promise");
const palavroes = require("../data/palavroes");

async function verifyWords(words, onlySingular) {
  let validWords = words.map(async (word, i) => {
    let options = {
      uri: "https://www.dicio.com.br/" + sanitize(word),
      transform: (body) => {
        return cheerio.load(body);
      },
    };
    let wordInDicio = await rp(options)
      .then(($) => {
        if ($(".word-nf").text()) {
          return false;
        }
        if (onlySingular && $(".tit-significado--singular").text()) {
          return false;
        }
        if ($("h1").text()[0] == $("h1").text()[0].toUpperCase()) return false;
        return $("h1").text();
      })
      .catch(() => {
        return false;
      });

    return wordInDicio;
  });

  let verifiedWords = await Promise.all(validWords);

  return verifiedWords.filter((a) => a != false);
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function sanitize(word) {
  const wordLowerCased = word.toLowerCase();
  const wordWithoutSpaces = wordLowerCased.trim();

  return wordWithoutSpaces
    .replace(/ç/g, "c")
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u")
    .replace(/ã/g, "a")
    .replace(/õ/g, "o")
    .replace(/â/g, "a")
    .replace(/ê/g, "e")
    .replace(/ô/g, "o")
    .replace(/ü/g, "u")
    .replace(/à/g, "a")
    .replace(/[^\w\s-]/gi, "");
}

function removeBadWords(words) {
  return words.filter((word) => !palavroes.includes(sanitize(word)));
}

module.exports = {
  verifyWords,
  shuffle,
  sanitize,
  removeBadWords,
};
