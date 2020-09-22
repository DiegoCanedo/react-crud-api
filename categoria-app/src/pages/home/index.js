
import React from "react";

import "./style.css";

import Container from "react-bootstrap/Container";
import Banner from "../../components/Banner/Banner";
import Busca from "../../components/BuscaCategoria/BuscaCategoria"

const index = () => {
	return (
        <div>
        <Banner/>
        <Busca/>
        <Container className='pt50'>
            <h1>Home</h1>
        </Container>
        </div>
    )
};

export default index;