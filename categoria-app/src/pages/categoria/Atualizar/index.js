import React, {useState} from 'react';
import { Container, Form, Input, Salvar } from './styles';
import CategoriaService from '../../../services/CategoriaService';
import Alert from "react-bootstrap/Alert";


const Index = (id, data) => {

    const [categoria, setCategoria] = useState();
    const [mensagem, setMensagem] = useState("");
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState("")

    const handleSubmit =(event) => {
        event.preventDefault();
        var identificacao = {
            id: categoria.id,
            
        };
        
        var data = {
            nome: categoria.nome,
            descricao: categoria.descricao,
        };

        CategoriaService.atualizar(identificacao, data)
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
        
        console.log(identificacao, data);
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setCategoria({...categoria, [name]: value})
        console.log(categoria)
    };


    return (
        <Container>
            <Alert show={show} variant={variant}>{mensagem}</Alert>
            <Form onSubmit={handleSubmit}>
                <label for="fname">Id:</label>
                <Input name="id" onChange={e => handleInputChange(e)} />
                <label for="fname">Nome:</label>
                <Input name="nome" onChange={e => handleInputChange(e)} />
                <label for="fname">Descricao:</label>
                <Input name="descricao" onChange={e => handleInputChange(e)}/>
                <Salvar type="submit">Atualizar</Salvar>
            </Form>
        </Container>
    )
}

export default Index;