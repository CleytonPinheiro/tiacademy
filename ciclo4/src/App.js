import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { Listarcliente } from "./views/Cliente/lista";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clientes" component={Listarcliente} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
