const cors = require("cors");
const express = require("express");
const routes = require("./src/routes/routes");
const port = process.env.port || 3000;
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const controller = require("./src/controller/controller");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.static(__dirname + "/front"));
app.use("/doc", express.static(__dirname + "/insomnia"));
app.use(routes);

io.on("connection", (socket) => {
  console.log("conectou");
  socket.on("verifyWords", async(msg) => {
    console.log("msg", msg);
    let palavras = await controller.verifyWordsSocket(msg,'banana')
    io.emit('verifyWords',palavras)
  });
  socket.on("disconnect", () => {
    console.log("desconectou");
  });
});

server.listen(port, () => console.log("ativo"));
