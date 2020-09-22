import React from 'react'

import "./Footer.css";

import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Footer = () => {
    return (
        <Router>
            <div className="fixed-bottom footer mt-auto pt-3 text-muted">  
                <Container>
                    <Link className="float-right back-to-top rounded-circle" to="#">
                        <FontAwesomeIcon icon={faChevronUp} />
                        <span class="sr-only">Voltar ao topo</span>
                    </Link>
                    <p className="text-center">&copy; 2020 - Marketplace</p>
                </Container>
            </div>
        </Router>
    )
}

export default Footer;


