import React from "react";

import styles from "./NavApp.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card } from "../Card/Card";

export default function NavApp() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          LOGO AQUI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#categorias/3.1">
                Eletrônicos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categorias/games">
                Games
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categorias/celulares">
                Celulares
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/categorias/promocoes">
                Promoções
              </NavDropdown.Item>
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
        </Navbar.Collapse>
        <Link className={styles.store} to="/login">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/listar">
              <Card>
                  <Card.Image src="listar.png"/>
                  <Card.Form>
                    <p>TESTE FORM</p>
                  </Card.Form>
              </Card>
          </Route>
          <Route path="/atualizar">
            <Atualizar />
          </Route>
          <Route path="/Deletar">
            <Deletar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Atualizar() {
  return <h2>Atualizar</h2>;
}

function Deletar() {
  return <h2>Deletar</h2>;
}
