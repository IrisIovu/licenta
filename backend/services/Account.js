const Account = require("../models").Account;

const findAccountById = async (AccountId) => {
    let Accountfound;
    await Account.findOne({
        where: {
            AccountId: AccountId
        }
    }).then((Account) => AccountFound = Account);

    return AccountFound;
}


module.exports = {
    findAccountById
}