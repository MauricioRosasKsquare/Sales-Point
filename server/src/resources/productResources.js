// Modules
const express = require('express');
const ProductResources = express.Router();

// Controllers
const { ProductControllers } = require('../controllers');

// Middlewares

//const { Middlewares } = require('../middlewares');

// All book resources
ProductResources.get('/', ProductControllers.getAll);
ProductResources.post('/', ProductControllers.createProduct);
ProductResources.put('/:id', ProductControllers.updateProduct);
ProductResources.delete('/:id', ProductControllers.deleteProduct);

module.exports = ProductResources;


//TaskResources.post('/', Middlewares.noEmpty, Middlewares.duplicated, TaskControllers.createTask);
//TaskResources.put('/:id', Middlewares.noEmpty, Middlewares.duplicated, TaskControllers.updateTask);