module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('Tranzactie', {
        'TranzactieId':{type: DataTypes.UUID,
            primaryKey: true},
        'Suma':DataTypes.INTEGER,
        
    });
}