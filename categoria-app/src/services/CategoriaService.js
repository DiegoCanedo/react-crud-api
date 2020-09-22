import http from '../httpCommon';

const listarTodos = () => {
    return http.get("/categoria");
};

const incluir = (data) => {
    return http.post(`/categoria`, data);
};

export default {
    listarTodos
};