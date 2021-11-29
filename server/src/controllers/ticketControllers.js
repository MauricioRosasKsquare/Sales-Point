const  Ticket  = require('../models/Ticket');


const getAllTickets = (req, res) => {
    Ticket.find({}, (error, tickets) => {
      if (error){
        return res.status(500).json({
          message: 'Error getting tickets'
        })
      }
      if(tickets.length === 0){
        return res.status(200).send("There are no ticket yet")
      }
      return res.status(200).json(tickets)
    })
};

const createTicket = (req, res) => {
  const { body } = req;
  const newTicket = new Ticket(body);
  newTicket.save(function(error, newTicket){
    if (error){
      return res.status(500).json({
        message: 'Error creating Ticket'
      })
    }
  });
  return res.send({
    message: 'Ticket successfully created!!!'
  });
  
};

module.exports = {
    getAllTickets,
    createTicket
};