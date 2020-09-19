import React from "react";

import styles from "./NavApp.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

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
            <Nav.Link as={Link} to="/produtos">
              Produtos
            </Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
        <Link className={styles.store} to="/carrinho">
          <FontAwesomeIcon icon={faStore} />
        </Link>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/produtos"></Route>
          <Route path="/carrinho">
            <Produtos />
          </Route>
          <Route path="/categorias">
            <Categorias />
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

function Produtos() {
  return <h2>Produtos</h2>;
}

function Categorias() {
  let { path, url } = useRouteMatch();
}
