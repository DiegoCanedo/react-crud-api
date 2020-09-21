import http from '../httpCommon';

const listarTodos = () => {
    return http.get("/categoria");
};

export default {
    listarTodos
};