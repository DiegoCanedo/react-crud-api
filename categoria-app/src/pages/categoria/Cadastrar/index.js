import React, { useState } from 'react'
import { Input, Salvar, Form } from './styles';

import Container from "react-bootstrap/Container";
import CategoriaService from '../../../services/CategoriaService';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Alert from "react-bootstrap/Alert";

import Navbar from "react-bootstrap/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";

import { Card } from "../../../components/Card/Card";

  
const Index = () => {

    const [categoria, setCategoria] = useState();
    const [mensagem, setMensagem] = useState("");
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState("");
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

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

        setNome("")
        setDescricao("")
    
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCategoria({ ...categoria, [name]: value })
        if(name == "nome")
        {setNome(value)}
        else {setDescricao(value)}
        
        console.log(categoria)      
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
                        <Breadcrumb.Item active>Cadastrar categoria</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </Navbar>

            <Container>
                <Alert show={show} variant={variant}>{mensagem}</Alert>
                <Card>
                    <Card.Image src="https://metroui.org.ua/images/user_interface.svg" />
                    <Card.Form>
                        <Form onSubmit={handleSubmit}>
                            <div class="form-group text-left">
                                <label for="nome">Nome:</label>
                                <Input name="nome" id="nome" placeholder={"Digite o nome da categoria"} value={nome} onChange={e => handleInputChange(e)} />
                            </div>
                            <div class="form-group text-left">
                                <label for="descricao">Descrição:</label>
                                <Input name="descricao" id="descricao" placeholder={"Digite a descrição da categoria"} value={descricao} onChange={e => handleInputChange(e)} />
                            </div>
                            <Salvar type="submit"><FontAwesomeIcon icon={faSave} /> Salvar</Salvar>
                        </Form>
                    </Card.Form>
                </Card>
            </Container>
        </>
    );

    

};

export default Index;