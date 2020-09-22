import React, { useState, useEffect} from "react";
import CategoriaService from "../../../services/CategoriaService";
import Alert from "react-bootstrap/Alert";
import {useLocation} from "react-router-dom";

function Index() {

  let id = useLocation().state;

  const [categoria, setCategoria] = useState();
  const [mensagem, setMensagem] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");

  useEffect(() => {
    CategoriaService.deletar(id)
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
