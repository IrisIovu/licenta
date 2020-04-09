module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('ContBeneficiar', {
        'ContBeneficiarId':{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
       'IBANBeneficiar':DataTypes.STRING,
        'date': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        'AccountBalanceBeneficiar':DataTypes.FLOAT
    });
}