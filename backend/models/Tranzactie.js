module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('Tranzactie', {
        'TranzactieId':{type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4},
        'Suma':DataTypes.INTEGER,
        'idCont':DataTypes.UUID,
        'idContPrimitor':DataTypes.UUID
    });
}