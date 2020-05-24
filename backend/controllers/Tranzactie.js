const Tranzactie = require("../models").Tranzactie;
const Cont = require("../models").Cont;
const uuidv1 = require('uuid/v4');
const {findAccountById} = require("../services/Cont");
const {findClientById} = require("../services/Client");

var uuid1 = uuidv1()

const createTranzactie = async (req,res) =>{
    console.log(uuid1)
    if(findAccountById (req.body.ContPrimitorId) == null  )
    {
        return res.status(500).send({ message: "Cont Primitor nu e gasit" });
    }
    if(findAccountById(req.body.ContId) == null)
    {
        console.log("ContId nu e gasit")
    }    
    try{
    await Tranzactie.create({
        TranzactieId:uuid1,
        Suma:req.body.Suma,
        ContId:req.body.ContId,
        ContPrimitorId:req.body.ContPrimitorId
    }) .then(result => res.send(result));
}
catch(error){
res.status(500).send({message:error})
}
}

const destroyTransaction = async (req,res)=>{
    await Transaction.destroy({
        where:
        {
            TransactionId:req.body.TransactionId
        }
    })
    .then (res.status(204).send({message:"Transaction with the id:"+req.body.TransactionId+"has been deleted"}))
    .catch(err => resp.status(500).send({
        message:"Transaction could not be deleted"
    }))
}

const getSold = async (req,res)=>{
    try{
        if(findAccountById(req.body.ContId) !== null)
        {
            let ContGasit = findAccountById(req.body.ContId)
            console.log(ContGasit)
        }
    }
    catch(error){
        return res.status(500).send({message:error})
    }
        
    }
    

    const getTranzactii = async (req, res) => {
        let ConturiGasite;
        try {
            await Tranzactie.findAll().then((toateConturile) => ConturiGasite = toateConturile);
        }
        catch (err) {
            return res.status(409).send({ message: "No elements found in the database" });
        }
        return res.send(ConturiGasite);
    };

    const getTranzactiiDupaCont = async (req, res) => {
        console.log("FII ATENTA LA CE SCRIU CU CAPS TE ROG")
        console.log(req.params.id)
        let  user = await findClientById(req.params.id);
        console.log(user)
        console.log("afiseaza id din get tranzactiii dupa cont "+user)
        await Tranzactie.findOne(
            {
                where: { ContIdContId:req.params.id}
            }).then(result => res.send(result))
            .catch(err => res.status(500).send({
                message: "Error"
            })
            )
        }

module.exports={
    createTranzactie,
    destroyTransaction,
    getTranzactii,
    getSold,
    getTranzactiiDupaCont
    
}
