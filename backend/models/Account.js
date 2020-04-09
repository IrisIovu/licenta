module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('Account', {
        'AccountId': {type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4},
       'IBAN':DataTypes.STRING,
        'date': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        'AccountBalance':DataTypes.FLOAT,
        'UserId':DataTypes.UUID,
        'CurrencyId':DataTypes.UUID
    });
}