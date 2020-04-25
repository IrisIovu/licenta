const Cont = require("../models").Cont;
const uuidv1 = require('uuid/v1');
var uuid1 = uuidv1()
const MOMENT= require( 'moment' );
let datetime = MOMENT().format( 'YYYY-MM-DD  HH:mm:ss.000' );

const createCont = async (req, res) => {
    if(!req.body){
        res.status(400).json({
            status:'error',
            error:'req body can not be empty'
        })
    }
await Cont.create({
            ContId:uuid1,
            IBAN: req.body.IBAN,
            Sold:req.body.Sold,
            ClientId:req.body.ClientId,
            MonedaId:req.body.MonedaId

            })
            .then(res.status(201).send({ message: "The Cont for the  user   has been created" }))
            .catch(err => res.status(500).send({
                message: "The Cont could not be created"
            }))
};

const updateSold = async (req, resp) => {
        await Cont.update(
            {
                
                Sold: req.body.Sold
            },
            {
                where:
                    { ContId: req.body.ContId }
            })
            .then(resp.status(201).send({ message: "The  Sold has been updated" }))
            .catch(err => resp.status(500).send({
                message: "Error"
            })
            )
    }

const deleteCont = async (req,resp)=>
    {
    await Cont.destroy({
        where:
        { ContId: req.body.ContId }
    })
    .then(resp.status(201).send({ message: "The Cont Sold has been deleted" }))
            .catch(err => resp.status(500).send({
                message: "Error"
            }))
    }

const GetContForTransaction = async (req,resp)=>
    {
        let ContFound
        await Cont.findOne({
            where:{
            IBAN:req.body.IBAN
            }
        })
            .then((Cont) => {if (ContFound)ContFound = Cont})
        return ContFound;
    }

module.exports={
    createCont,
    updateSold,
    deleteCont,
    GetContForTransaction
}