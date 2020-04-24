module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Client', {
        'ClientId': {type: DataTypes.UUID,
            primaryKey: true},
        'Username':DataTypes.STRING,
        'Prenume': DataTypes.STRING,
        'Nume': DataTypes.STRING,
        'Adresa1': DataTypes.STRING,
        'Adresa2': DataTypes.STRING,
        'CNP': DataTypes.STRING,
        'NumarTelefon': DataTypes.STRING,
        'Email': DataTypes.STRING,
        'parola': DataTypes.STRING,
        'data': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        'TipClient': DataTypes.STRING
       
    }
    )
}