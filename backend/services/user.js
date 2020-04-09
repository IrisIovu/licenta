const Users = require("../models").User;

const findUserByUsername = async (username) => {
    let userFound;
    await Users.findOne({
        where: {
            firstname: username
        }
    }).then((user) => userFound = user);

    return userFound;
}

const findUserById = async (id) => {
    let userFound;
    await Users.findOne({
        where: {
            id: id
        }
    }).then(user => {if(userFound)userFound = user});
    return userFound;
}
module.exports = {
    findUserByUsername,
    findUserById
}