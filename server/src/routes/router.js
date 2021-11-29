// Modules
const express = require('express');
const router = express.Router();

// Resources
const { ProductResources, TicketResources } = require('../resources');

// All routes
router.use('/', ProductResources, TicketResources);

module.exports = router;
