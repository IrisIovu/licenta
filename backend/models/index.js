let sequelize = require('./db.js');
const express= require('express');
const bodyParser=require('body-parser');
//const exprHBS=require('express-handlebars');
const path = require('path');

//define objects
const Client = sequelize.import('./Client.js');
const Tranzactie = sequelize.import('./Tranzactie.js');
const Moneda = sequelize.import('./Moneda.js')
const Beneficiar = sequelize.import('Beneficiar.js')
const Cont =sequelize.import('./Cont.js')
const TranzactieCursDeSchimb = sequelize.import('./TransactieCursDeSchimb.js')

//the relationships
Client.hasMany(Cont,{onDelete:'cascade'},{foreignKey: 'ClientId'})

Tranzactie.belongsTo(Cont, {as: 'ContPrimitorId'});
Tranzactie.belongsTo(Cont, {as: 'ContId'});

Cont.hasOne(Moneda,{onDelete:'cascade'},{foreignKey:'MonedaId'})

TranzactieCursDeSchimb.belongsTo(Cont, {as: 'ContPrimitorId'});
TranzactieCursDeSchimb.belongsTo(Cont, {as: 'ContId'});

Beneficiar.hasOne(Cont,{onDelete:'cascade'},{foreignKey:'ContId'})

module.exports = {
    sequelize,
    Client,
    Tranzactie,
    Moneda,
    Cont,
    TranzactieCursDeSchimb,
    Beneficiar
}





