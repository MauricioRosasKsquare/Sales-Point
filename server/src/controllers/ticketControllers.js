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

module.exports = {
    getAllTickets
};