module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('Beneficiar', {
        'BeneficiarId':{type: DataTypes.UUID,
            primaryKey: true},
        'idContBeneficiar':DataTypes.UUID,
        'idCont':DataTypes.UUID
    });
}