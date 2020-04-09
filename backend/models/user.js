module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        'userId': {type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4},
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
        'ClientType': DataTypes.STRING
       
    }
    )
}