const Currency = require("../models").Currency;
const uuidv1 = require('uuid/v1');


var uuid1 = uuidv1()
const createCurrency= async(req,res) =>{
    await Currency.create({
        CurrencyId:uuid1,
        CurrencyName:req.body.CurrencyName

    })
    .then(res.status(201).send({ message: "The currency"+req.body.CurrencyName+ " has been created" }))
    .catch(err => res.status(500).send({
        message: "The currency could not be created"
    }))
}

module.exports ={
    createCurrency
}