import React, { useRef,useState, useEffect } from "react";
import {
  Card,
  CardAction,
  Baner,
  NomeProduto,
  ButtonPoduto,
  DescricaoProduto,
  CardContainer,
} from "./Styles";
import Container from "react-bootstrap/Container";
import Service from "../../services/ProdutoService";

const Listar = (props) => {
  const { id } = props;
  const [lista, setLista] = useState([]);
  const [idCat, setIdCat] = useState(id);

  console.log(id)

  useEffect(() => {
      Service.listarTodos().then((response) => {
        setLista(response.data);
      });
    },[]);

  return (
    <Container fluid>
      <CardContainer>
        {lista.map((p, index) => (
          <Card key={index}>
            <Baner src={p.fotoLink}></Baner>
            <NomeProduto>{p.nome}</NomeProduto>
            <DescricaoProduto>{p.descricao}</DescricaoProduto>
            <CardAction>
              <ButtonPoduto>Comprar</ButtonPoduto>
            </CardAction>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Listar;
