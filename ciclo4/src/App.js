import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Home } from "./views/Home";
import { ListarCliente } from "./views/Cliente/lista";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clientes" component={ListarCliente} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
