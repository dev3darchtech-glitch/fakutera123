import http from "../utils/http";

const baseUrl = "/product";

export const getProducts = () => http.get(baseUrl);

export const updateProduct = (id, data) => http.put(`${baseUrl}/${id}`, data);
