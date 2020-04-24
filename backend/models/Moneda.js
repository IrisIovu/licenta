module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('Moneda', {
        'MonedaId':{type: DataTypes.UUID,
            primaryKey: true},
        'NumeMoneda': DataTypes.STRING,
        'ValoareaMoneziiInLei':DataTypes.FLOAT
    });
}