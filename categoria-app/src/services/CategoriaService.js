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

const atualizar = (id, data) => {
    return http.put(`/categoria/${id}`, data);
};

const deletar = (id) => {
    return http.delete(`/categoria/${id}`);
};

export default {
    listarTodos,
    incluir,
    atualizar,
    deletar,
    listarID,
};
