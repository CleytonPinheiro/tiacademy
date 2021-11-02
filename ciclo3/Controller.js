const express = require("express");
const cors = require("cors");

const { Sequelize } = require("./models");

const models = require("./models");
const itempedido = require("./models/itempedido");

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let pedido = models.Pedido;
let itemPedido = models.ItemPedido;
let servico = models.Servico;

app.delete("/cliente/:id/deleta", async (req, res) => {
  await cliente
    .destroy({
      where: { id: req.params.id },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Cliente excluído com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Erro ao excluir o cliente.",
      });
    });
});

app
  .put("/pedidos/:id/editaritem", async (req, res) => {
    const item = {
      quantidade: req.body.quantidade,
      valor: req.body.valor,
    };
    if (!(await pedido.findByPk(req.params.id))) {
      return res.status(400).json({
        error: true,
        message: "Pedido não encontrado.",
      });
    }
    if (!(await servico.findByPk(req.body.ServicoId))) {
      return res.status(400).json({
        error: true,
        message: "Serviço não encontrado.",
      });
    }

    let selector = {
      where: { ServicoId: req.body.ServicoId, PedidoId: req.params.id },
    };

    await itempedido.update(item, {
      where: Sequelize.and(
        {
          ServicoId: req.body.ServicoId,
        },
        { PedidoId: req.params.id }
      ),
    });
  })
  .then(function (itens) {
    return res.json({
      error: false,
      message: "Pedido alterado com sucesso.",
      itens,
    });
  })
  .catch(function (erro) {
    return res.status(400).json({
      error: true,
      message: "Erro ao alterar o item.",
    });
  });

app.get("/pedidos/:id", async (req, res) => {
  await pedido
    .findByPk(req.params.id, { include: [{ all: true }] })
    .then((ped) => {
      return res.json({ ped });
    });
});

app.put("/atualizaservico", async (req, res) => {
  await servico
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Serviço atualizado com sucesso!",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Erro ao atualizado o serviço.",
      });
    });
});

app.get("/clientes/:id", async (req, res) => {
  await cliente
    .findByPk(req.params.id)
    .then((client) => {
      return res.json({
        error: false,
        client,
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Erro: Não conectado.",
      });
    });
});

app.get("/clientes", async (req, res) => {
  await cliente
    .findAll({
      //raw: true,
      order: [["nome", "ASC"]],
    })
    .then(function (clientes) {
      res.json({
        clientes,
      });
    });
});

app.get("/listaservicos", async (req, res) => {
  await servico
    .findAll({
      //raw: true,
      order: [["nome", "ASC"]],
    })
    .then(function (servicos) {
      res.json({
        servicos,
      });
    });
});

app.get("/servico/:id", async (req, res) => {
  await servico
    .findByPk(req.params.id)
    .then((serv) => {
      return res.json({
        error: false,
        serv,
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Erro: Não conectado.",
      });
    });
});

app.get("/ofertaservico", async (req, res) => {
  await servico.count("id").then(function (servicos) {
    res.json({ servicos });
  });
});

app.post("/itenspedido", async (req, res) => {
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
