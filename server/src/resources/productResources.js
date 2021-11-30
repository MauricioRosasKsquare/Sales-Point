const { ProductControllers } = require('../controllers');
const { ProductsMiddlewares } = require('../middlewares');
const express = require('express');
const ProductResources = express.Router();

ProductResources.get('/products', ProductControllers.getAllProducts);
ProductResources.post('/products', ProductsMiddlewares.noEmpty, ProductControllers.createProduct);
ProductResources.put('/products/:id', ProductControllers.updateProduct);
ProductResources.delete('/products/:id', ProductControllers.deleteProduct);

module.exports = ProductResources;