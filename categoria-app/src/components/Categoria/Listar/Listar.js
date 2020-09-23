import React, { useState, useEffect } from "react";
import CategoriaService from "../../../services/CategoriaService";
import { Info, ContainerTitle, ContainerButtons, Title, Descricao, Action } from "./styles";

import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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
            {lista.map((c, index) => (
                <Container>
                    <Info key={index}>
                        <ContainerTitle>
                            <ContainerButtons>
                                <Action as={Link} to={{ pathname: '/atualizar', state: c.id }}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </Action>
                                <Action as={Link} to={{ pathname: '/deletar', state: c.id }}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Action>
                            </ContainerButtons>
                            <Title>{c.nome}</Title>
                        </ContainerTitle>
                        <Descricao>{c.descricao}</Descricao>
                    </Info>
                </Container>
            ))}
        </>
    );
};

export default Listar;
