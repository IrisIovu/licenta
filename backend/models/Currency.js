module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('Currency', {
        'CurrencyId':{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        'CurrencyName': DataTypes.STRING,
    });
}