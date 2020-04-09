module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('Transaction', {
        'TransactionId':{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        'Suma':DataTypes.INTEGER,
        'TransactionType':DataTypes.BOOLEAN,
        'idAccount':DataTypes.INTEGER,
        'idAccountReceiver':DataTypes.INTEGER
    });
}