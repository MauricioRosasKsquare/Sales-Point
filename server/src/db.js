const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:9FqpCWGLqBqkVZzv@prueba.nz1kw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url)


const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection error MongoDB'))

db.once('open', function callback(){
    console.log("Connection success")
})

module.exports = db