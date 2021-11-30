const { ProductResources, TicketResources } = require('../resources');
const express = require('express');
const router = express.Router();

router.use('/', ProductResources, TicketResources);

module.exports = router;
