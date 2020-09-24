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

const Listar = ({id}) => {
  const [lista, setLista] = useState([]);
  useEffect(() => {
      Service.listarTodos().then((response) => {
        if(id == "")
        {
        setLista(response.data);
        }
        else{
          setLista(response.data.filter(e => e.idCategoria == id))
        }
      });
    },[id]);

  return (
    <Container>
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
