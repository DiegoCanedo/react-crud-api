import React, { useState, useEffect} from "react";
import CategoriaService from "../../../services/CategoriaService";
import Alert from "react-bootstrap/Alert";
import {useRouteMatch} from "react-router-dom";

function Index() {

  const {params} = useRouteMatch();
  const [categoria, setCategoria] = useState();
  const [mensagem, setMensagem] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");

  useEffect(() => {
    console.log(params.id)
    CategoriaService.deletar(params.id)
      .then((response) => {
        if (response.status === 200) {
          setVariant("success");
          setMensagem("Categoria deletada com sucesso!");
          setShow(true);
        }
      })
      .catch((error) => {
        setVariant("danger");
        setMensagem("Erro ao deletar!");
        setShow(true);
        console.log(error);
      });

    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);

  return (
    <Alert show={show} variant={variant}>
      {mensagem}
    </Alert>
  );
}

export default Index;
