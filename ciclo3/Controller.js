const express = require("express");
const cors = require("cors");

const models = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let pedido = models.Pedido;
let itemPedido = models.Itempedido;
let servico = models.Servico;

app.post("/itempedido", async (req, res) => {
  await itemPedido
    .create(req.body)
    .then(function () {
      return res.json({
        error: false,
        message: "Item pedido cadastrado com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Erro ao cadastrar o item",
      });
    });
});

app.post("/pedidos", async (req, res) => {
  await pedido
    .create(req.body)
    .then(function () {
      return res.json({
        error: false,
        message: "Pedido cadastrado com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Erro ao cadastrar o pedido",
      });
    });
});

app.post("/clientes", async (req, res) => {
  await cliente
    .create(req.body)
    .then(function () {
      return res.json({
        error: false,
        message: "Cliente cadastrado com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Erro ao cadastrar o cliente",
      });
    });
});

app.post("/servicos", async (req, res) => {
  await servico
    .create(req.body)
    .then(function () {
      return res.json({
        error: false,
        message: "Serviço criado com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Impossível se conectar",
      });
    });
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