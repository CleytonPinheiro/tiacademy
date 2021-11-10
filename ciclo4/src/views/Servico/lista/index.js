import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";

import { api } from "./../../../config";

export const Listarservico = () => {
  const [data, setData] = useState([]);

  const getServico = async () => {
    await axios
      .get(api + "/listaservicos")
      .then((response) => {
        console.log(response.data.servicos);
        setData(response.data.servicos);
      })
      .catch((erro) => {
        console.log("Erro: sem conexão com a API", erro);
      });
  };

  useEffect(() => {
    getServico();
  }, []);

  return (
    <div>
      <Container>
        <h1>Visualizar informações do serviço. </h1>
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
                <td className="text-center/">Botão</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
