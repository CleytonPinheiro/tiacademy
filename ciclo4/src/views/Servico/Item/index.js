import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const Item = (props) => {
  //console.log(props.match.params.id);

  const [id, setId] = useState(props.match.params.id);

  const [data, setData] = useState([]);

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const getItems = async () => {
    await axios
      .get(api + "/servico/" + id + "/pedidos")
      .then((response) => {
        console.log(response.data.item);
        setData(response.data.item);
      })
      .catch((erro) => {
        setStatus({ type: "error", mensagem: " Erro:Sem conexão com a API." });
        console.log("Erro: sem conexão com a API", erro);
      });
  };

  useEffect(() => {
    getItems();
  }, [id]);

  return (
    <div>
      <Container>
        <div>
          <h1>Pedidos do serviço. </h1>
        </div>
        {status.type === "error" ? (
          <Alert color="danger">{status.mensagem}</Alert>
        ) : (
          ""
        )}
        <Table striped>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Visualizar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.ServicoId}>
                <th>{item.PedidoId}</th>
                <td>{item.quantidade}</td>
                <td>{item.valor}</td>
                <td className="text-center/">
                  <Link
                    to={"/listar-pedido/"}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Consultar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
