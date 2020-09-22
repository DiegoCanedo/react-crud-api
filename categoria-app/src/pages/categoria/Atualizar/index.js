import React from 'react';
//import Service from '../../../services/CategoriaService';
import { Container, Form, Input, Salvar } from './styles';


const index = () => {

    return (
        <Container>
            <Form>
                <label for="fname">ID:</label>
                <Input placeholder="1" />
                <label for="fname">Nome:</label>
                <Input placeholder="escritório" />
                <label for="fname">Descricao:</label>
                <Input placeholder="cadeiras, mesas.." />
                <Salvar>Salvar</Salvar>
            </Form>
        </Container>
    )
}

export default index;