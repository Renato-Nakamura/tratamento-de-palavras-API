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
app.use(routes);
// app.get('/',(req,res)=> res.send('oioi'))
app.listen(port, () => console.log("ativo"));
