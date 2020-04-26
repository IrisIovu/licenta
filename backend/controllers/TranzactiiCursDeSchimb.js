const TrazactieCursDeSchimb = require("../models").TranzactieCursDeSchimbCursDeSchimb;
const Cont = require("../models").Cont;
const uuidv1 = require('uuid/v4');
const {findAccountById} = require("../services/Cont");

var uuid1 = uuidv1()

const createTranzactieCursDeSchimb = async (req,res) =>{
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
    await TranzactieCursDeSchimb.create({
        TranzactieCursDeSchimbId:uuid1,
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

const getSoldCS = async (req,res)=>{
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
            await TranzactieCursDeSchimb.findAll().then((toateConturile) => ConturiGasite = toateConturile);
        }
        catch (err) {
            return res.status(409).send({ message: "No elements found in the database" });
        }
        return res.send(ConturiGasite);
    };

    const getTranzactiiDupaCont = async (req, res) => {
        let tranzactiiGasite;
        try{
        await Cont.findOne(
            {
                where: { ContId: req.params.id }
            }
        ).then((result) => tranzactiiGasite = result);
        await TranzactieCursDeSchimb.findAll(
            {
                where: { ContIdContId: tranzactiiGasite.ContId }
            }).then(result => res.send(result));
        }
        catch(err)
        {
            return res.status(404).send({ message: "No elements found in the database" });
        }
    };

module.exports={
    createTranzactieCursDeSchimb,
    destroyTransaction,
    getTranzactii,
    getSoldCS,
    getTranzactiiDupaCont
    
}
