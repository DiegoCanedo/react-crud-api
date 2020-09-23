import React, { useState, useEffect } from 'react';
import CategoriaService from '../../../services/CategoriaService';

import { Form, Input, Salvar } from './styles';
import Alert from "react-bootstrap/Alert";
import { useRouteMatch } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { Card } from "../../../components/Card/Card";

const Index = () => {

    const { params } = useRouteMatch();
    const [categoria, setCategoria] = useState({});
    const [mensagem, setMensagem] = useState("");
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState("");


    useEffect(() => {
        CategoriaService.listarID(params.id)
            .then((response) => {
                setCategoria(response.data);
                console.log(response.data);
            })

            .catch((error) => {
                setMensagem("Erro ao atualizar!");
                setShow(true);
                console.log(error);
            });
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(categoria);
        CategoriaService.atualizar(params.id, categoria)
            .then((response) => {

                if (response.status === 200) {
                    setVariant("success")
                    setMensagem("Categoria atualiza com sucesso!")
                    setShow(true);
                }
            })
            .catch((error) => {
                setVariant("danger")
                setMensagem("Erro ao atualizar!")
                setShow(true);
                console.log(error);
            })

        setTimeout(() => {
            setShow(false);
        }, 4000);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCategoria({ ...categoria, [name]: value })
    };

    return (
        <>
            <Navbar className="navbar navbar-dark mb-5 bg-header bg-breadcrumb" expand="lg">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/"><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Categorias
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Atualizar categoria</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </Navbar>

            <Container>
                <Alert show={show} variant={variant}>{mensagem}</Alert>
                <Card>
                    <Card.Image src="https://metroui.org.ua/images/code_development.svg" />
                    <Card.Form>
                        <Form onSubmit={handleSubmit}>
                            <label for="fname">Id:</label>
                            <Input disabled value={categoria.id} name="id" onChange={e => handleInputChange(e)} />
                            <label for="fname">Nome:</label>
                            <Input value={categoria.nome} name="nome" onChange={e => handleInputChange(e)} />
                            <label for="fname">Descricao:</label>
                            <Input value={categoria.descricao} name="descricao" onChange={e => handleInputChange(e)} />
                            <Salvar type="submit">Atualizar</Salvar>
                        </Form>
                    </Card.Form>
                </Card>
            </Container>
        </>
    )
}

export default Index;