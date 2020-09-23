import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
    // localStorage.setItem('@categoria-app/username', 'romulo');
    // localStorage.removeItem('@categoria-app/username');
    const username = localStorage.getItem('@categoria-app/username');

    const Sair = () => {
        localStorage.removeItem('@categoria-app/username');
    }

    if (username !== null) {
        return (
            <Nav className="navbar-nav my-2 my-lg-0">
                <NavDropdown title={`Olá ${username}`} id="basic-nav-dropdown">
                    <Dropdown.Header>Categoria</Dropdown.Header>
                    <NavDropdown.Item as={Link} to="/listar">
                        Listar
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/cadastrar">
                        Cadastrar
                    </NavDropdown.Item>

                    <Dropdown.Divider />

                    <NavDropdown.Item as={Link} to={Sair}>
                        Sair
                    </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/lista-de-desejos">
                    <FontAwesomeIcon icon={faHeart} className="mr-1" />
                    Lista de Desejos
                </Nav.Link>
                <Nav.Link as={Link} to="/carrinho">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </Nav.Link>
            </Nav>
        );
    } else {
        return (
            <Nav className="navbar-nav my-2 my-lg-0">
                <Nav.Link as={Link} to="/login">
                    <FontAwesomeIcon icon={faUser} className="mr-1" />
                    Entrar
                </Nav.Link>
            </Nav>
        );
    }
}

export default Welcome;