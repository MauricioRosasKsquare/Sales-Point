const mongoose = require('mongoose');
const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  image: { type: String, required: true },
  inventory: { type: Number, required: true },

});

 const Product = mongoose.model('Product', schema);

 module.exports = Product