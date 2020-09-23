import React, { useState } from 'react'
import { Input, Salvar, Form } from './styles';

import Container from "react-bootstrap/Container";
import CategoriaService from '../../../services/CategoriaService';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Alert from "react-bootstrap/Alert";


const Index = () => {

    const [categoria, setCategoria] = useState();
    const [mensagem, setMensagem] = useState("");
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            nome: categoria.nome,
            descricao: categoria.descricao,
        };

        CategoriaService.incluir(data)
            .then((response) => {

                if (response.status === 201) {
                    setVariant("success")
                    setMensagem("Categoria criada com sucesso!")
                    setShow(true);
                }
            })
            .catch((error) => {
                setVariant("danger")
                setMensagem("Erro ao cadastrar!")
                setShow(true);
            })

        setTimeout(() => {
            setShow(false);
        }, 4000);

        console.log(data);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCategoria({ ...categoria, [name]: value })
        console.log(categoria)
    };

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>

            <Container>
                <Alert show={show} variant={variant}>{mensagem}</Alert>
                <Form onSubmit={handleSubmit}>
                    <label for="fname">Nome da Categoria:</label>
                    <Input name="nome" onChange={e => handleInputChange(e)} />
                    <label for="fname">Descricao:</label>
                    <Input name="descricao" onChange={e => handleInputChange(e)} />
                    <Salvar type="submit">Salvar</Salvar>
                </Form>
            </Container>
        </>
    )
};

export default Index;