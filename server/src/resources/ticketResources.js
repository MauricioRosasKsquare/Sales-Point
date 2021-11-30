const { TicketControllers } = require('../controllers');
const express = require('express');
const TicketResources = express.Router();

TicketResources.get('/tickets', TicketControllers.getAllTickets);
TicketResources.post('/tickets', TicketControllers.createTicket);
TicketResources.patch('/tickets/:id', TicketControllers.patchTicket);

module.exports = TicketResources;