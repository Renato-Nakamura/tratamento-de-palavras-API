const cheerio = require("cheerio");
const rp = require("request-promise");

async function verifyWords(words) {
  return words.map(async (a, i) => {
    let options = {
      uri: "https://www.dicio.com.br/" + sanitize(a),
      transform: (body) => {
        return cheerio.load(body);
      },
    };
    let word = await rp(options)
      .then(($) => {
        if ($(".word-nf").text()) {
          return false;
        }
        if ($(".tit-significado--singular").text()) {
          return false;
        }
        return $("h1").text();
      })
      .catch(() => {
        // console.log('erro',palavras[i])
        return false;
      });
    return word;
  });
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
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

module.exports = {
  verifyWords,
  shuffle,
  sanitize
};
