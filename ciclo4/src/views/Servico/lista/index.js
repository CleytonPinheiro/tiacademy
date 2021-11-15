import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const Listarservico = () => {
  const [data, setData] = useState([]);

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const getServico = async () => {
    await axios
      .get(api + "/listaservicos")
      .then((response) => {
        console.log(response.data.servicos);
        setData(response.data.servicos);
      })
      .catch((erro) => {
        setStatus({ type: "error", mensagem: " Erro:Sem conexão com a API." });
        console.log("Erro: sem conexão com a API", erro);
      });
  };

  useEffect(() => {
    getServico();
  }, []);

  return (
    <div>
      <Container>
        <div className="d-flex">
          <div>
            <h1>Visualizar informações do serviço. </h1>
          </div>
          <div className="m-auto p-2">
            <Link
              to="/cadastrarservico"
              className="btn btn-outline-primary btn-sm"
            >
              Cadastrar
            </Link>
          </div>

          {status.type === "error" ? (
            <Alert color="danger">{status.mensagem}</Alert>
          ) : (
            ""
          )}
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.nome}</td>
                <td>{item.descricao}</td>
                <td className="text-center/">
                  <Link
                    to={"/listar-pedido/" + item.id}
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
