import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export const Cadastrar = () => {
  const cadServico = (async) => {
    console.log("cadastrar");
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

      <Form className="p-2" onSubmit={cadServico}>
        <FormGroup className="p-2">
          <Label>Nome</Label>
          <Input type="text" name="nome" placeholder="Nome do serviço" />
        </FormGroup>

        <FormGroup className="p-2">
          <Label>Descrição</Label>
          <Input
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
