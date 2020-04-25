const Users = require("../models").Client;

function isUsernameUnique (username) {
    Users.count({ where: { username: username } })
      .then(count => {
        if (count != 0) {
          return false;
        }
        return true;
      });
  }

const findClientByUsername = async (username) => {
    let userFound;
    await Users.findOne({
        where: {
            Username: username
        }
    }).then((user) => userFound = user)
    
    if(userFound !== undefined)
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
    findClientById,
    isUsernameUnique
}