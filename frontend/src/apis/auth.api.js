import http from "../utils/http";

const baseUrl = "/auth";

export const login = (data) => http.post(`${baseUrl}/login`, data);
