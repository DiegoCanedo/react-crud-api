import React, { useState, useEffect } from "react";

import "./BuscaCategoria.css";

import CategoriaService from "../../services/CategoriaService";

const BuscaCategoria = () => {
    const [lista, setLista] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        CategoriaService.listarTodos()
            .then((response) => {
                setLista(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleOnChange = (e) => {
        setSelectedValue(e)
    }

    return (
        <div>
            <section className="search-category py-5">
                <div className="container d-flex justify-content-center">
                    <div className="col-12 col-md-10">
                        <div className="input-group input-group-lg">
                            <input value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} type="text" className="form-control" aria-label="Search" />
                            <div className="input-group-append">
                                <select  defaultValue="" onChange={e => handleOnChange(e.target.value)} className="custom-select custom-select-lg">
                                    <option value="" >Todas as categorias</option>
                                    {lista.map((c, index) => (
                                        <option key={index} value={c.nome}>{c.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <input type="button" className="ml-3 btn btn-lg btn-standard" value="Buscar" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BuscaCategoria;