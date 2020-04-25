const Moneda = require("../models").Moneda;
const uuidv1 = require('uuid/v1');


var uuid1 = uuidv1()
const creareMoneda= async(req,res) =>{
    await Moneda.create({
        MonedaId:uuid1,
        MonedaName:req.body.NumeMoneda,
        ValoareaMoneziiInLei:req.body.ValoareaMoneziiInLei

    })
    .then(res.status(201).send({ message: "The Moneda"+req.body.MonedaName+ " has been created" }))
    .catch(err => res.status(500).send({
        message: "The Moneda could not be created"
    }))
}

module.exports ={
    creareMoneda
}