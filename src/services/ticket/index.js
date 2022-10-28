import { api } from "../api";

export const TicketService = {
  buyTicket: (valor, dataCompra, usuario) => api.post('/passagem', { valor, dataCompra, usuario }),
  deleteTicket: (ticketId) => api.delete(`/passagem/${ticketId}`),
  updateTicket: (ticketId) => api.put(`/passagem/${ticketId}`),
  updateTicketStatus: (ticketId) => api.put(`/passagem/${ticketId}/atualizar-status`),
  searchTicket: (userId) => api.get(`/passagem?usuario=${userId}`),
}
