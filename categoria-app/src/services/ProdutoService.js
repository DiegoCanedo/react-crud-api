import http from '../httpCommon';

const listarTodos = () => {
    return http.get("/produto");
};

export default {
    listarTodos
}