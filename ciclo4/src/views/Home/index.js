import { Container } from "reactstrap";

export const Home = () => {
  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="m-auto p-2">
            <h1> Home </h1>
          </div>
        </div>
        <div className="p-2">
          <a href="/clientes" className="btn-outline-success btn-sm">
            Cliente
          </a>
          <a href="/pedidos" className="btn-outline-success btn-sm">
            Pedido
          </a>
          <a href="/servicos" className="btn-outline-success btn-sm">
            Serviço
          </a>
        </div>
      </Container>
    </div>
  );
};
