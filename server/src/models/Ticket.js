const mongoose = require('mongoose');
const Schema = mongoose.Schema

const schema = new Schema({
  products: { type: Object, required: true },
  cost: { type: Number, required: true },
  cancel: { type: Boolean} 
});

 const Ticket = mongoose.model('Ticket', schema);

 module.exports = Ticket