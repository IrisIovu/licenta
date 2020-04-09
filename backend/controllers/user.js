const Users = require("../models").User;
const { findUserByUsername } = require('../services/user');
const secret = 'sdfsascfv';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uuidv1 = require('uuid/v1')

var uuid1 = uuidv1()

const registerUser = async (req, res) => {
    if (req.body.username === "" || req.body.password === "") {
        return res.status(500).send({ message: "User or password empty" });
    }
    let userFound = await findUserByUsername(req.body.firstname);

    if (userFound) {
        return res.status(409).send({ message: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    let ePassword = bcrypt.hashSync(req.body.password, salt);
await Users.create({
            userId:uuid1,
            password: ePassword,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            address1:req.body.address1,
            address2:req.body.address2,
            CNP:req.body.CNP,
            PhoneNB:req.body.PhoneNB,
            Email:req.body.Email,
            ClientType:req.body.ClientType},
            {
                where:
                    { userId: uuid1 }
            })
            .then(res.status(201).send({ message: "The user with username: '" + req.body.firstname + "' has been created" }))
            .catch(err => res.status(500).send({
                message: "The user could not be created"
            }))
};




const login = async (req, res) => {
    if (req.body.firstname === "" || req.body.password === "") {
        return res.status(500).send({ message: "User or password empty" });
    }
    let userFound = await findUserByUsername(req.body.firstname);

    if (!userFound) {
        return res.status(404)
            .send({ message: "No email related to an accout was found" });
    }

    const validPass = bcrypt.compareSync(req.body.password, userFound.password);
    if (!validPass) {
        return res.status(400).send({ message: "Wrong password" });
    }

    const token = jwt.sign({ id: userFound.id }, secret,
        {
            expiresIn: "3h"
        });

    res.send({ userId: userFound.id, token: "Bearer " + token, message: "V-ati logat cu success" })
};

const resetPassword = async (req, resp) => {
    let userFound = await findUserByUsername(req.body.firstname);

    if (!userFound) {
        return resp.status(404).send({ message: "No user found for this username" })
    } else {
         const salt = bcrypt.genSaltSync(10);
        let ePassword = bcrypt.hashSync(req.body.password, salt);
        await Users.update(
            {
                
                password: ePassword
            },
            {
                where:
                    { username: req.body.firstname }
            })
            .then(resp.status(201).send({ message: "The user with username: '" + req.body.username + "' has been updated" }))
            .catch(err => resp.status(500).send({
                message: "Error"
            }))
    }

}

module.exports = {
    registerUser,
    login,
   resetPassword
}
