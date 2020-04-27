const Moneda = require("../models").Moneda;
const uuidv1 = require('uuid/v1');
const request = require('request');
let url = "https://api.exchangeratesapi.io/latest";
let options = {json: true};
const names = require('../services/NamesCurrencyRates.json').name;

function  getJsonData (){
    request(url, options, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
            console.log(body.rates[names[0]])
        };
    });
    }
    getJsonData()

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
    creareMoneda,
    getJsonData
}