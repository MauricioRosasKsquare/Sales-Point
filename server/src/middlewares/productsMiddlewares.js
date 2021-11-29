
function noEmpty(req, res, next){

    const name = (req.body.name !== undefined) ? req.body.name.trim() : " ";  
    const price = parseInt(req.body.price) 

    if(name !== " " && price !== NaN){
        req.body.name = name;
        req.body.price = price;
        next();
    }else{
        res.status(404).send({
            message:  'Name and price can not be empty'
        });
    }       
}

module.exports = {
    noEmpty
};