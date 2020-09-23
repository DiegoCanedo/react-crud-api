import React, { useState, useEffect } from "react";
import CategoriaService from "../../../services/CategoriaService";
import {
  Info,
  ContainerTitle,
  ContainerButtons,
  Title,
  Descricao,
  Action,
} from "./styles";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/NavBar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { Card } from "../../../components/Card/Card";

const Listar = () => {
  const [lista, setLista] = useState([]);

  const [mensagem, setMensagem] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");
  useEffect(() => {
    CategoriaService.listarTodos()
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleDeletar = (id) => {
    console.log(id);
    CategoriaService.deletar(id)
      .then((response) => {
        if (response.status === 200) {
          setVariant("success");
          setMensagem("Categoria deletada com sucesso!");
          setShow(true);
          CategoriaService.listarTodos()
		  	.then((response) => {
            setLista(response.data);
          });
        }
      })
      .catch((error) => {
        setVariant("danger");
        setMensagem("Erro ao deletar!");
        setShow(true);
        console.log(error);
      });
    setTimeout(() => {
      setShow(false);
    }, 4000);
  };

  return (
    <>
      <Navbar
        className="navbar navbar-dark mb-5 bg-header bg-breadcrumb"
        expand="lg"
      >
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Categorias</Breadcrumb.Item>
            <Breadcrumb.Item active>Listar categorias</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </Navbar>

      <Container>
        <Alert show={show} variant={variant}>
          {mensagem}
        </Alert>
        <Card>
          <Card.Image src="https://metroui.org.ua/images/book_lover.svg" />
          <Card.Form>
            {lista.map((c, index) => (
              <Info key={index}>
                <ContainerTitle>
                  <ContainerButtons>
                    <Action as={Link} to={`atualizar/${c.id}`}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Action>
                    <Action onClick={() => handleDeletar(c.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Action>
                  </ContainerButtons>
                  <Title>{c.nome}</Title>
                </ContainerTitle>
                <Descricao>{c.descricao}</Descricao>
              </Info>
            ))}
          </Card.Form>
        </Card>
      </Container>
    </>
  );
};

export default Listar;
