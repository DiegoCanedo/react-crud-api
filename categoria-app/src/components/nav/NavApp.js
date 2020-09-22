import React, { useState, useEffect } from "react";

import "./NavApp.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import CategoriaService from "../../services/CategoriaService";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card } from "../Card/Card";
import ListarCategoria from "../Categoria/Listar/Listar";
import Cadastrar from "../../pages/categoria/Criar/index";
import Home from "../../pages/home/index";

export default function NavApp() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        CategoriaService.listarTodos()
            .then((response) => {
                setLista(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <Router>
            <Navbar className="navbar navbar-dark bg-header" expand="lg">
                <Container>
                    <Navbar.Brand className="navbar-brand d-flex align-items-center" as={Link} to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="mr-2" viewBox="0 0 448 512" focusable="false">
                            <path d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z" />
                            <path d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z" />
                        </svg>
                        <strong>Marketplace</strong>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-nav mr-auto ml-md-5">
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                {lista.map((c, index) => (
                                    <NavDropdown.Item as={Link} to="#" key={index}>
                                            {c.nome}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <Nav.Link as={Link} to="/listar">
                                Cadastrar
                            </Nav.Link>
                            <Nav.Link as={Link} to="/atualizar">
                                Atualizar
                            </Nav.Link>
                            <Nav.Link as={Link} to="/deletar">
                                Deletar
                            </Nav.Link>
                        </Nav>
                        <Nav className="navbar-nav my-2 my-lg-0">
                            <Nav.Link as={Link} to="#">
                                <FontAwesomeIcon icon={faHeart} className="mr-1" />
                                Lista de Desejos
                            </Nav.Link>
                            <Nav.Link as={Link} to="#">
                                <FontAwesomeIcon icon={faUser} className="mr-1" />
                                Entrar
                            </Nav.Link>
                            <Nav.Link as={Link} to="#">
                                <FontAwesomeIcon icon={faShoppingBasket} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route path="/listar">
                    <Card>
                        <Card.Image src="https://metroui.org.ua/images/book_lover.svg" />
                        <Card.Form>
                            <Card.Button onClick="" />
                            <ListarCategoria />
                        </Card.Form>
                    </Card>
                </Route>
                <Route path="/atualizar">
                    <Card>
                        <Card.Image src="https://metroui.org.ua/images/book_lover.svg" />
                        <Card.Form>
                            <ListarCategoria />
                        </Card.Form>
                    </Card>
                </Route>
                <Route path="/Deletar">
                    <Deletar />
                </Route>
                <Route path="/Cadastrar">
                    <Cadastrar />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

function Atualizar() {
    return <h2>Atualizar</h2>;
}

function Deletar() {
    return <h2>Deletar</h2>;
}
