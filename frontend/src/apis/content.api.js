import http from "../utils/http";

const baseUrl = "/content";

export const getContent = () => http.get(baseUrl);
