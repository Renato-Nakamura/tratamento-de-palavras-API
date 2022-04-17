const services = require("../services/services");
const path = require("path");

const teste = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "insomnia", "index.html"));
};

const verifyWords = async (req, res) => {
  let { words, filters } = req.body;
  if (!filters) filters = {};
  const {
    onlyValidWords = true,
    onlySingular,
    random,
    removeBadWords,
  } = filters;

  if (!words || words.length == 0)
    res
      .status(400)
      .send("Para que a requisição seja válida, envie um array de palavras");

  const originalLength = words.length;
  
  if (onlyValidWords) words = await services.verifyWords(words, onlySingular);

  if (random) words = services.shuffle(words);

  if (removeBadWords) words = services.removeBadWords(words);

  res.send({
    originalLength: originalLength,
    newLength: words.length,
    filteredWords: words,
  });
};

module.exports = {
  teste,
  verifyWords,
};
