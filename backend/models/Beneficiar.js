module.exports = (sequelize, DataTypes) => {
    //TODO isAdmin for users/boolean
    return sequelize.define('Beneficiar', {
        'BeneficiarId':{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        'firstname': DataTypes.STRING,
        'lastname': DataTypes.STRING,
        'address1': DataTypes.STRING,
        'address2': DataTypes.STRING,
        'CNP': DataTypes.STRING,
        'PhoneNB': DataTypes.STRING,
        'Email': DataTypes.STRING,
        'password': DataTypes.STRING,
        'date': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        'BeneficiarType': DataTypes.STRING,
    });
}