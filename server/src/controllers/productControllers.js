const  Product  = require('../models/Product');

const getAllProducts = (req, res) => {
  Product.find({}, (error, products) => {
    if (error){
      return res.status(500).json({
        message: 'Error getting products'
      })
    }
    if(products.length === 0){
      return res.status(200).send("There are no products yet")
    }
    return res.status(200).json(products)
  })
};

const createProduct = (req, res) => {
  const { body } = req;
  const newProduct = new Product(body);
  newProduct.save(function(error, newProduct){
    if (error){
      return res.status(500).json({
        message: 'Error creating products'
      })
    }
  });
  return res.send({
    message: 'Product successfully created!!!'
  });
  
};


const updateProduct = (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const price = req.body.price
  if(id.length > 24){
    return res.status(500).json({
      message: 'Invalid id'
    })
  }

  Product.findOneAndUpdate( {_id: {$eq : id} },{name: name, price: price}, (error, match) => {
    
    if (error){
      return res.status(500).json({
        message: 'Error updating product'
      })
    }
    
    if(match === null){
      return res.status(200).send({
        message: 'Product not found'
      });
    }
    return res.status(201).send({
      message: 'Product successfully Updated!!!'
    });
  })
}


const deleteProduct = (req, res) => {
  const { id } = req.params;

  if(id.length > 24){
    return res.status(500).json({
      message: 'Invalid id'
    })
  }
  
  Product.findOneAndRemove( {_id: {$eq : id} }, (error, match) => {
    if (error){
      return res.status(500).json({
        message: 'Error deleting products'
      })
    }
    
    if(match === null){
      return res.status(200).send({
        message: 'Product not found'
      });
    }
    return res.status(201).send({
      message: 'Product successfully deleted'
    });
  })
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
