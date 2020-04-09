const Account = require("../models").Account;
const uuidv1 = require('uuid/v1');


var uuid1 = uuidv1()
const MOMENT= require( 'moment' );
let datetime = MOMENT().format( 'YYYY-MM-DD  HH:mm:ss.000' );

const createAccount = async (req, res) => {
    if(!req.body){
        res.status(400).json({
            status:'error',
            error:'req body can not be empty'
        })
    }
await Account.create({
            AccountId:uuid1,
            IBAN: req.body.IBAN,
            AccountBalance:req.body.AccountBalance,
            date:datetime,
            UserId:req.body.UserId,
            CurrencyId:req.body.CurrencyId

            })
            .then(res.status(201).send({ message: "The account for the  user   has been created" }))
            .catch(err => res.status(500).send({
                message: "The account could not be created"
            }))
};

const changeAccountBalance = async (req, resp) => {
   
        await Account.update(
            {
                
                AccountBalance: req.body.AccountBalance
            },
            {
                where:
                    { AccountId: req.body.AccountId }
            })
            .then(resp.status(201).send({ message: "The Account Balance has been updated" }))
            .catch(err => resp.status(500).send({
                message: "Error"
            })
            )
    }

const deleteAccount = async (req,resp)=>{
    await Account.destroy({
        where:
        { AccountId: req.body.AccountId }
    })
    .then(resp.status(201).send({ message: "The Account Balance has been deleted" }))
            .catch(err => resp.status(500).send({
                message: "Error"
            }))
}
const GetAccountForTransaction = async (req,resp)=>
{
    let AccountFound
await Account.findOne({
    where:{
    IBAN:req.body.IBAN
    }
}).then((Account) => {if (AccountFound)AccountFound = Account})
return AccountFound;
}

const findUserById = async (id) => {
    let userFound;
    await Users.findOne({
        where: {
            id: id
        }
    }).then(user => {if(userFound)userFound = user});
    return userFound;
}
module.exports={
    createAccount,
    changeAccountBalance,
    deleteAccount,
    GetAccountForTransaction
}