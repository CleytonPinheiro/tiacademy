import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { Listarcliente } from "./views/Cliente/lista";
import { Menu } from "./components/Menu";
import { Listarservico } from "./views/Servico/lista";

import { Item } from "./views/Servico/Item";
import { Cadastrar } from "./views/Servico/Cadastrar";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clientes" component={Listarcliente} />
          <Route path="/servicos" component={Listarservico} />
          <Route path="/listar-pedido/:id" component={Item} />
          <Route path="/cadastrarservicos" component={Cadastrar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
