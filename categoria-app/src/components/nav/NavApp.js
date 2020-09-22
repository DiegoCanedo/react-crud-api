import React from "react";

import "./NavApp.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card } from "../Card/Card";
import ListarCategoria from "../Categoria/Listar/Listar";
import Cadastrar from "../../pages/categoria/Criar/index";
import Home from "../../pages/home/index";
import Atualizar from "../../pages/categoria/Atualizar/index";
import { Button } from "react-bootstrap";

export default function NavApp() {
	return (
	<Router>
		<Navbar className="navbar navbar-dark bg-header" expand="lg">
			<Container>
				<Navbar.Brand className="navbar-brand d-flex align-items-center" as={Link} to="/">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 448 512" focusable="false">
						<path d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z" />
						<path d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z" />
					</svg>
					<strong>Marketplace</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
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
          <Link className='store' to="/login">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </Container>
      </Navbar>
        <Switch>
          <Route path="/listar">
              <Card>
                  <Card.Image src="https://metroui.org.ua/images/book_lover.svg"/>
                  <Card.Form>
                    <Card.Button onClick=""/>
                   <ListarCategoria/>
                  </Card.Form>
              </Card>
          </Route>
          <Route path="/atualizar">
            <Card>
                  <Card.Image src="https://metroui.org.ua/images/book_lover.svg"/>
                  <Card.Form>
                   <Atualizar/>
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

function Deletar() {
  return <h2>Deletar</h2>;
}
