import { Container } from "reactstrap";

export const Home = () => {
  return (
    <div>
      <Container>
        <div className="d-flex">
          <h1> Home </h1>
        </div>
        <div className="p-3">
          <a href="/clientes" className="btn-outline-success btn-sm m-3">
            Cliente
          </a>
          <a href="/clientes" className="btn-outline-success btn-sm m-3">
            Pedido
          </a>
          <a href="/clientes" className="btn-outline-success btn-sm m-3">
            Serviço
          </a>
        </div>
      </Container>
    </div>
  );
};
