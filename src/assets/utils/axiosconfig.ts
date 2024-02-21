import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7258'
});

// Interceptador para adicionar o token aos cabeçalhos de todas as solicitações
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;