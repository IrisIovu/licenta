const Users = require("../models").User;

const findClientByUsername = async (username) => {
    let userFound;
    await Users.findOne({
        where: {
            Username: sername
        }
    }).then((user) => userFound = user)
    
    return userFound;
}

const findClientById = async (id) => {
    let userFound;
    await Users.findOne({
        where: {
            id: id
        }
    }).then(user => {if(userFound)userFound = user});
    return userFound;
}
module.exports = {
    findClientByUsername,
    findClientById
}