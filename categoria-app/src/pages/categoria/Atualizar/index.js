import React, {useState, useEffect} from 'react';
import { Container, Form, Input, Salvar } from './styles';
import CategoriaService from '../../../services/CategoriaService';
import Alert from "react-bootstrap/Alert";
import {useLocation} from "react-router-dom";


const Index = () => {

    var id = useLocation().state;

    const [categoria, setCategoria] = useState({});
    const [mensagem, setMensagem] = useState("");
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState("");
    

    useEffect(() => {
        CategoriaService.listarID(id)
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


    const handleSubmit =(event) => {
        event.preventDefault();

        console.log(categoria);
        CategoriaService.atualizar(id, categoria)
        .then((response) => {
           
            if(response.status === 200)
            {
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
        const {name, value} = event.target;
        setCategoria({...categoria, [name]: value})
    };


    return (
        <Container>
            <Alert show={show} variant={variant}>{mensagem}</Alert>
            <Form onSubmit={handleSubmit}>
                <label for="fname">Id:</label>
                <Input disabled value={categoria.id} name="id" onChange={e => handleInputChange(e)} />
                <label for="fname">Nome:</label>
                <Input value={categoria.nome} name="nome" onChange={e => handleInputChange(e)} />
                <label for="fname">Descricao:</label>
                <Input value={categoria.descricao} name="descricao" onChange={e => handleInputChange(e)}/>
                <Salvar type="submit">Atualizar</Salvar>
            </Form>
        </Container>
    )
}

export default Index;