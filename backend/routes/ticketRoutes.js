import express from "express";

import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  getMyTickets,
} from "../controllers/ticketController.js";

import protect from "../middleware/authMiddleware.js";

import { adminOnly, customerOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, customerOnly, createTicket);

router.get("/my-tickets", protect, customerOnly, getMyTickets);

router.get("/", protect, adminOnly, getAllTickets);

router.get("/:ticketId", protect, adminOnly, getTicketById);

router.put("/:ticketId", protect, adminOnly, updateTicket);

export default router;
