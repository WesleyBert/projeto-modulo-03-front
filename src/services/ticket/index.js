import { api } from "../api";

export const TicketService = {
  buyTicket: (valor, dataCompra, usuario) => api.post('/comprapassagem', { valor, dataCompra, usuario }),
  deleteTicket: (ticketId) => api.delete(`/comprapassagem/${ticketId}`),
  updateTicket: (ticketId) => api.put(`/comprapassagem/${ticketId}`),
  updateTicketStatus: (ticketId) => api.put(`/comprapassagem/${ticketId}/atualizar-status`),
  searchTicket: (userId) => api.get(`/comprapassagem?usuario=${userId}`),
}
