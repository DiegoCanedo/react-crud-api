import React, { useState, useEffect } from "react";
import CategoriaService from "../../../services/CategoriaService";
import { Info, ContainerTitle, ContainerButtons, Title, Descricao, Action } from "./styles";

import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/NavBar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { Card } from "../../Card/Card";

const Listar = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        CategoriaService.listarTodos()
            .then((response) => {
                setLista(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Navbar className="navbar navbar-dark mb-5 bg-header bg-breadcrumb" expand="lg">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/"><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Categorias
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Listar categorias</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </Navbar>

            <Container>
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
                                        <Action as={Link} to={`deletar/${c.id}`}>
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
