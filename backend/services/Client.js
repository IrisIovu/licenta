const Client = require("../models").Client;

function isUsernameUnique (username) {
    Client.count({ where: { username: username } })
      .then(count => {
        if (count != 0) {
          return false;
        }
        return true;
      });
  }

const findClientByUsername = async (username) => {
    let userFound;
    await Client.findOne({
        where: {
            Username: username
        }
    }).then((user) => userFound = user)
    
    if(userFound !== undefined)
    return userFound;
}

const findClientById = async (id) => {
    let userFound;
    console.log("din functie client id:" +id)
    await Client.findOne({
        where: {
            ClientId: id
        }
    }).then(user => {userFound = user})
    .catch(err => resp.status(500).send({
        message: "Error"
    })
    )
    return userFound;
}
module.exports = {
    findClientByUsername,
    findClientById,
    isUsernameUnique
}