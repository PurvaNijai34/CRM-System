import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      subject,
      description,
    } = req.body;

    // Validation
    if (
      !customerName ||
      !customerEmail ||
      !subject ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Generate Ticket ID
    const count = await Ticket.countDocuments();

    const ticketId = `TKT-${String(count + 1).padStart(3, "0")}`;

    const ticket = await Ticket.create({
      ticketId,
      customerName,
      customerEmail,
      subject,
      description,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      ticketId: ticket.ticketId,
      createdAt: ticket.createdAt,
      data: ticket,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllTickets = async (req, res) => {
  try {
    const { search, status } = req.query;

    let query = {};

    // Search functionality
    if (search) {
      query.$or = [
        { ticketId: { $regex: search, $options: "i" } },
        { customerName: { $regex: search, $options: "i" } },
        { customerEmail: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Status filter
    if (status) {
      query.status = status;
    }

    const tickets = await Ticket.find(query)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTicketById = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const ticket = await Ticket.findOne({
      ticketId,
    });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      success: true,
      data: ticket,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const { status, note } = req.body;

    const ticket = await Ticket.findOne({
      ticketId,
    });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    if (status) {
      ticket.status = status;
    }

    if (note && note.trim() !== "") {
      ticket.notes.push({
        text: note,
      });
    }

    await ticket.save();

    res.status(200).json({
      success: true,
      message: "Ticket updated successfully",
      updatedAt: ticket.updatedAt,
      data: ticket,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyTickets = async (req, res) => {
  try {

    const tickets = await Ticket.find({
      createdBy: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};