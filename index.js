const cors = require("cors");
const express = require("express");
const routes = require("./src/routes/routes");
const port = process.env.port || 3000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static(__dirname + "/front"));
app.use('/doc',express.static(__dirname + "/insomnia"));
app.use(routes);
app.listen(port, () => console.log("ativo"));
