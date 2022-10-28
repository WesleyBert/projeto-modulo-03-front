import { api } from "../api";

export const UserService = {
  loginUser: (email, senha) => api.post('/usuario/login', { email, senha }),
  registerUser: (email, senha) => api.post('/usuario/create', { email, senha }),
}
