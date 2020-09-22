import { Input, Salvar, Container, Form } from './styles';
import Service from '../../../services/CategoriaService';
import React from 'react'

const index = () => {
    return (
        <Container>
            <Form>
                <label for="fname">Nome:</label>
                <Input />
                <label for="fname">Descricao:</label>
                <Input />
                <Salvar />
            </Form>
        </Container>
    )
}

export default index;