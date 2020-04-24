const Client = require("../models").Client;
const { findClientByUsername } = require('../services/Client');
const secret = 'sdfsascfv';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uuidv1 = require('uuid/v1')

var uuid1 = uuidv1()

const registerClient = async (req, res) => {
    if (req.body.Username === "" || req.body.parola === "") {
        return res.status(500).send({ message: "Client or password empty" });
    }
    let ClientFound = await findClientByUsername(req.body.firstname);

    if (ClientFound) {
        return res.status(409).send({ message: "Client already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    let ePassword = bcrypt.hashSync(req.body.password, salt);
await Client.create({
            ClientId:uuid1,
            Username:req.body.Username,
            parola: ePassword,
            Prenume:req.body.Prenume,
            Nume:req.body.Nume,
            Adresa1:req.body.Adresa1,
            Adresa1:req.body.Adresa1,
            CNP:req.body.CNP,
            NumarTelefon:req.body.NumarTelefon,
            Email:req.body.Email,
            TipClient:req.body.TipClient},
            {
                where:
                    { ClientId: uuid1 }
            })
            .then(res.status(201).send({ message: "The Client with Clientname: '" + req.body.firstname + "' has been created" }))
            .catch(err => res.status(500).send({
                message: "The Client could not be created"
            }))
};




const login = async (req, res) => {
    if (req.body.Username === "" || req.body.parola === "") {
        return res.status(500).send({ message: "Client or password empty" });
    }
    let ClientFound = await findClientByUsername(req.body.firstname);
    var NumarTelefon = req.body.NumarTelefon
    
    if (!ClientFound) {
        return res.status(404)
            .send({ message: "No email related to an accout was found" });
    }

    const validPass = bcrypt.compareSync(req.body.password, ClientFound.password);
    if (!validPass) {
        return res.status(400).send({ message: "Wrong password" });
    }

    const token = jwt.sign({ ClientId: ClientFound.ClientId }, secret,
        {
            expiresIn: "3h"
        });

    res.send({ ClientId: ClientFound.id, token: "Bearer " + token, message: "V-ati logat cu success" })
};

const resetPassword = async (req, resp) => {
    let ClientFound = await findClientByUsername(req.body.firstname);

    if (!ClientFound) {
        return resp.status(404).send({ message: "No Client found for this Clientname" })
    } else {
         const salt = bcrypt.genSaltSync(10);
        let ePassword = bcrypt.hashSync(req.body.password, salt);
        await Client.update(
            {
                
                password: ePassword
            },
            {
                where:
                    { Clientname: req.body.firstname }
            })
            .then(resp.status(201).send({ message: "The Client with Clientname: '" + req.body.Clientname + "' has been updated" }))
            .catch(err => resp.status(500).send({
                message: "Error"
            }))
    }

}

module.exports = {
    registerClient,
    login,
   resetPassword
}
