let sequelize = require('./db.js');
const express= require('express');
const bodyParser=require('body-parser');
//const exprHBS=require('express-handlebars');
const path = require('path');

//define objects
const User = sequelize.import('./user.js');
const Transaction = sequelize.import('./Transaction.js');
const Currency = sequelize.import('./Currency.js')
const ContBeneficiar=sequelize.import('./ContBeneficiar.js')
const Beneficiar = sequelize.import('Beneficiar.js')
const Account =sequelize.import('./Account.js')

//the relationships
User.hasMany(Account,{onDelete:'cascade'},{foreignKey: 'UserId'})
User.hasMany(Account, { onDelete: 'cascade' });
Account.hasMany(Transaction,{onDelete:'cascade'})
Account.hasOne(Currency,{onDelete:'cascade'})


module.exports = {
    sequelize,
    User,
    Transaction,
    Currency,
    Account
}





