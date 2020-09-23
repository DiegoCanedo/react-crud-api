import React from "react";

import "./NotFoundPage.css";

import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NotFoundPage = () => {
    return (
        <>
            <Navbar className="navbar navbar-dark mb-2 bg-header bg-breadcrumb" expand="lg">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/"><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item active>Erro 404</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </Navbar>

            <div className="container d-flex justify-content-center">
                <div className="col-12 col-md-8 mb-5 text-center notfound">
                    <h1>404</h1>
                    <h2>Página não encontrada!</h2>
                    <p>A página que você procura não foi encontrada ou não está mais disponível.</p>
                    <Link to="/">Voltar para Página Inicial</Link>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage;