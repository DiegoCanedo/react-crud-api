import http from '../httpCommon';

const listarTodos = () => {
    return http.get("/categoria");
};

const listarID = (id) => {
    return http.get(`/categoria/${id}`);
};

const incluir = (data) => {
    return http.post(`/categoria`, data);
};

const deletar = (id) => {
    return http.delete(`/categoria/${id}`);
};

export default {
    listarTodos,
    incluir,
    deletar,
    listarID,
};