const  Task  = require('../models/Task');

// All middelwares
function duplicated(req, res, next) {
    
    let task; 
    Task.find({ description: req.body.description}, function (err, task) {

        if(task.length === 0){
            next();
        }else{
            return res.status(404).send({
                message:  'Task already exist'
            });
        }
        
    }); 
}


function noEmpty(req, res, next){

    const description = req.body.description.trim();
    
    if(!description == " "){
        req.body.description = description;
        next();
    }else{
        res.status(404).send({
            message:  'No task description given'
        });
    }
    
    
}

module.exports = {
    duplicated,
    noEmpty
};
