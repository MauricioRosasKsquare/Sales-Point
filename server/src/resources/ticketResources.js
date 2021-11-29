const express = require('express');

const TicketResources = express.Router();

const { TicketControllers } = require('../controllers');

TicketResources.get('/tickets', TicketControllers.getAllTickets);
TicketResources.post('/tickets', TicketControllers.createTicket);

module.exports = TicketResources;