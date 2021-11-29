const express = require('express');

const ProductResources = express.Router();

const { ProductControllers } = require('../controllers');

ProductResources.get('/products', ProductControllers.getAllProducts);
ProductResources.post('/products', ProductControllers.createProduct);
ProductResources.put('/products/:id', ProductControllers.updateProduct);
ProductResources.delete('/products/:id', ProductControllers.deleteProduct);

module.exports = ProductResources;