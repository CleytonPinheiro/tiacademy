const express = require("express");
const cors = require("cors");

const models = require("./models");

const app = express();
app.use(cors());

let cliente = models.cliente;
let pedido = models.pedido;
let itemPedido = models.itemPedido;
let servico = models.Servico;

app.get("/servicos", async (req, res) => {
  await servico.create({
    nome: "HTML/CSS",
    descricao: "Paginas estáticas estilizadas",
    createAt: new Date(),
    updateAt: new Date(),
  });
  res.send("Serviço criado com sucesso.");
});

app.get("/", function (req, res) {
  res.send("Ola mundo");
});
app.get("/clientes", function (req, res) {
  res.send("Ola clientes");
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
  console.log("Servidor ativo: http://localhost:3001");
});
