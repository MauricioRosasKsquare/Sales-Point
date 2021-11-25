// Modules
const express = require('express');
const router = express.Router();

// Resources
const { ProductResources } = require('../resources');

// All routes
router.use('/products', ProductResources);

module.exports = router;
