module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('Cont', {
        'ContId': {type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4},
       'IBAN':DataTypes.STRING,
        'date': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        'Sold':DataTypes.FLOAT,
        
    });
}