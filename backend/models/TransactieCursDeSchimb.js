module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('TransactieCursDeSchimb', {
        'TransactieId':{type: DataTypes.UUID,
            primaryKey: true},
        'SumaInLei':DataTypes.INTEGER,
        'SumainMonedaDeSchimb':DataTypes.INTEGER,
    });
}