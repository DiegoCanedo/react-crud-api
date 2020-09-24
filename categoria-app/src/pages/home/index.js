
import React from "react";

import "./style.css";

import Container from "react-bootstrap/Container";
import Banner from "../../components/Banner/Banner";
import Busca from "../../components/BuscaCategoria/BuscaCategoria"
import Produto from "../../components/Produtos/Listar"

import QV01 from "../../assets/images/quick-view-01.gif";
import QV02 from "../../assets/images/quick-view-02.gif";

const index = () => {
	return (
        <div>
        <Banner/>
        <Busca/>
        <Container>
            <Produto/>
        </Container>
            <section className="mt-5 quickview">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="head-title text-left">
                                <h3 className="title-page">Semijoias e acessórios</h3>
                                <p className="description">
                                    Joias folheadas a Ouro 18k, Rhodium, Rhodium Negro e Paládio, joias em Aço e Prata 925.
                                </p>
                                <img src={QV01} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="head-title text-right">
                                <h3 className="title-page">Conforto sem rótulos</h3>
                                <p className="description text-right">
                                    Tudo em moda, estilo e beleza para o seu conforto, sem sair do lugar.
                                </p>
                                <img src={QV02} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default index;