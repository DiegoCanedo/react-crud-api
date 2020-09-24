import React, { useState, useEffect } from "react";
import {
  Card,
  Baner,
  NomeProduto,
  ButtonPoduto,
  DescricaoProduto,
} from "./Styles";
import Container from "react-bootstrap/Container";
import Service from "../../services/ProdutoService";

const Listar = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    Service.listarTodos().then((response) => {
      setLista(response.data);
    });
  }, []);

  return (
    <Container>
      {lista.map((p, index) => {
        <Card key={index}>
          <Baner>
            <img src={p.fotoLink} />
          </Baner>
          <NomeProduto>{p.nome}</NomeProduto>
          <DescricaoProduto>{p.descricao}</DescricaoProduto>
          <ButtonPoduto>Comprar</ButtonPoduto>
        </Card>;
      })}
    </Container>
  );
};

export default Listar;
