import React from "react";

import "./NotFoundPage.css";

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="col-12 col-md-8 my-5 text-center notfound">
                    <h1>404</h1>
                    <h2>Página não encontrada!</h2>
                    <p>A página que você procura não foi encontrada ou não está mais disponível.</p>
                    <Link to="/">Voltar para Página Inicial</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;