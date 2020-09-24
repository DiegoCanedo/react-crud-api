import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./NavApp.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import CategoriaService from "../../services/CategoriaService";

import ListarCategoria from "../../pages/categoria/Listar/Listar";
import Cadastrar from "../../pages/categoria/Cadastrar/index";
import Atualizar from "../../pages/categoria/Atualizar/index";
import Home from "../../pages/home/index";
import Login from "../../pages/login/index";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Welcome from "../Welcome/Welcome";

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="mr-2" viewBox="0 0 448 512" focusable="false">
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
                                            {c.nome.toUpperCase()}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                        <Welcome/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route path="/listar">
                    <ListarCategoria />
                </Route>
                <Route path="/atualizar/:id">
                    <Atualizar />
                </Route>
                <Route path="/Cadastrar">
                    <Cadastrar />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
}
