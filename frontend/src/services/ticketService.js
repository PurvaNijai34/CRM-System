

import api from "../api/axios";

export const createTicket = async (data) => {
  const response = await api.post(
    "/tickets",
    data
  );

  return response.data;
};

export const getMyTickets = async () => {
  const response = await api.get(
    "/tickets/my-tickets"
  );

  return response.data;
};