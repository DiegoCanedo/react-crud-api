import React, {useState} from "react";
import  { Redirect } from 'react-router-dom';

import "./style.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faKey } from "@fortawesome/free-solid-svg-icons"

const Login = () => {
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');

    const login = () => {
        if (username == 'teste' && password == '123456') {
            localStorage.setItem('@categoria-app/username', username);
        } else {
            console.log('falha na autenticação');
        }
    }

    return (
        <>
            <Navbar className="navbar navbar-dark mb-5 bg-header bg-breadcrumb" expand="lg">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/"><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item active>Login</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </Navbar>

            <Container>
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Por favor, efetue o login</h1>
                    <label for="username" className="sr-only">Usuário</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="icon-password"><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Usuário" aria-label="Usuário" aria-describedby="icon-user" value={username} onChange={e=> setUser(e.target.value)} required />
                    </div>
                    <label for="inputPassword" className="sr-only">password</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="icon-password"><FontAwesomeIcon icon={faKey} /></span>
                        </div>
                        <input type="password" className="form-control" placeholder="password" aria-label="password" aria-describedby="icon-password" value={password} onChange={e=> setPass(e.target.value)} required />
                    </div>
                    <div className="mb-3 custom-control custom-checkbox text-left">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" value="remember-me" />
                        <label className="custom-control-label" for="customCheck1">Manter conectado</label>
                    </div>
                    <button type="button" className="btn btn-lg btn-block btn-standard" onClick={login}>Acessar</button>
                </form>
            </Container>
        </>
    );
}

export default Login;