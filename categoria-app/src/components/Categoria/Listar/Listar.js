import React, { useState, useEffect } from "react";
import CategoriaService from "../../../services/CategoriaService";
import Table from "react-bootstrap/Table";

import "./style.css"

const Listar = () => {
  
  const [lista, setLista] = useState([]);

  useEffect(() => {
      CategoriaService.listarTodos()
      .then(response => {
          setLista(response.data);
      })
      .catch(error => console.log(error));
  },[]);

  return(
  <div className="tableFixHead">
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        {lista.map((c, index) => (
            <tr key={index}>
                <td>{c.id}</td>
                <td>{c.nome}</td>
            </tr>
        ))}
      </tbody>
    </Table>
  </div>);
};

export default Listar;
