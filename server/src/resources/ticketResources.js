const express = require('express');

const TicketResources = express.Router();

const { TicketControllers } = require('../controllers');

TicketResources.get('/tickets', TicketControllers.getAllTickets);

module.exports = TicketResources;