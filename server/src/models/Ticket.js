const mongoose = require('mongoose');
const Schema = mongoose.Schema

const schema = new Schema({
  products: { type: Array, required: true },
  total: { type: Number, required: true },
  date :{ type: Date, required: true},
  status: { type: String, required: true} 
});

 const Ticket = mongoose.model('Ticket', schema);

 module.exports = Ticket