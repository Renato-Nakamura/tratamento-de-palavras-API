const services = require("../services/services");

const teste = (req, res) => {
  res.send("teste final");
};

const verifyWords = async (req, res) => {
    console.log(req.body)
  const words = req.body;
  let response = await services.verifyWords(words)
  let verifiedWords =  await Promise.all(response)
  verifiedWords = verifiedWords.filter((a)=> a != false)
  res.send(verifiedWords)
};

module.exports = {
  teste,
  verifyWords
};
