import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { api } from "../../../config";

export const Cadastrar = () => {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [servico, setServico] = useState({
    nome: "",
    descricao: "",
  });

  const valorInput = (e) =>
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
    });

  const cadServico = async (e) => {
    e.preventDefault();
    console.log(servico);

    const headers = {
      "Content-Type": "application/json",
    };
    await axios
      .post(api + "/servicos", servico, { headers })
      .then((response) => {
        //console.log(response.data.message);
        if (response.data.error) {
          setStatus({
            type: "error",
            message: response.data.message,
          });
        } else {
          setStatus({
            type: "success",
            message: response.data.message,
          });
        }
      })
      .catch((e) => {
        console.log("ERRO: Sem conexão com a API.", e);
      });
  };

  return (
    <Container>
      <div className="d-flex">
        <div className="m-auto p-2">
          <h1>Cadastrar serviço</h1>
        </div>
        <div className="p-2">
          <Link to="/listar-servico" className="btn btn-outline-success btn-sm">
            Serviços
          </Link>
        </div>
      </div>
      <hr className="m-1" />

      {status.type === "error" ? (
        <Alert color="danger">{status.message}</Alert>
      ) : (
        ""
      )}

      {status.type === "success" ? (
        <Alert color="success">{status.message}</Alert>
      ) : (
        ""
      )}

      <Form className="p-2" onSubmit={cadServico}>
        <FormGroup className="p-2">
          <Label>Nome</Label>
          <Input
            onChange={valorInput}
            type="text"
            name="nome"
            placeholder="Nome do serviço"
          />
        </FormGroup>

        <FormGroup className="p-2">
          <Label>Descrição</Label>
          <Input
            onChange={valorInput}
            type="text"
            name="descricao"
            id="examplePassword"
            placeholder="Descrição do serviço"
          />
        </FormGroup>

        <Button type="submit" outline color="success">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};
