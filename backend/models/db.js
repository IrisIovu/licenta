let Sequelize = require('sequelize');

let sequelize = new Sequelize('banca', 'iovuiris', 'iovuiris', {
   dialect: 'mssql',
   define: {
      timestamps: false
   }
});
/*
sequelize
  .sync() // create the database table for our model(s)
 
  .then(function(){
    return sequelize.drop() // drop all tables in the db
  });*/
module.exports = sequelize;