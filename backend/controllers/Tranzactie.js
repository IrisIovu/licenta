const Transaction = require("../models").Transaction;
const uuidv1 = require('uuid/v1');


var uuid1 = uuidv1()

const createTransaction = async (req,res) =>{
    

    await Transaction.create({
        TransactionId:uuidv1,
        Suma:req.body.Suma,
        TransactionType:req.body.TransactionType,
        idAccount:req.body.idAccount,
        idAccountReceiver:req.body.idAccountReceiver
    })
    .then(res.status(201).send({ message: "The TRansaction has been created" }))
    .catch(err => resp.status(500).send({
        message: "Error, Transaction could not be created"
    })
    )
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

const getAccoutnBalance = async (req,res)=>{
    const findAccountById = async (AccountId) => {
        let Accountfound;
        await Users.findOne({
            where: {
                AccountId: AccountId
            }
        }).then((Account) => AccountFound = Account);
    
        return AccountFound;
    }
    
}

const getAllTransactionForOneAccountByAccoundID = async (req,res)=>{
    let transactionsFound;
    try {
        await Transaction.findAll({
            where: { AccountId:req.body.AccountId }
        }).then((allTransactionForOneAccountByAccoundID) => transactionsFound = allTransactionForOneAccountByAccoundID);
    }
    catch (err) {
        return res.status(409).send({ message: "No elements found in the database" });
    }
    return res.send(reviewsFound);
}
module.exports={
    createTransaction,
    destroyTransaction,
    getAllTransactionForOneAccountByAccoundID
}
