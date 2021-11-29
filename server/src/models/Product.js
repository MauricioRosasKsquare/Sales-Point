const mongoose = require('mongoose');
const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

 const Product = mongoose.model('Product', schema);

 module.exports = Product