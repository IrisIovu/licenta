const Cont = require("../models").Cont;

const findAccountById = async (ContId) => {
    let Contgasit;
    await Cont.findOne({
        where: {
            ContIdContId: ContId
        }
    }).then((Cont) => Contgasit = Cont);

    return Contgasit;
}


module.exports = {
    findAccountById
}