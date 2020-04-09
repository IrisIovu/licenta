const router = require("express").Router();
const userController = require('../controllers/user');
const userAccount = require('../controllers/Account');
const Transaction = require('../controllers/Transaction');

router.post('/register', userController.registerUser);
router.post('/login', userController.login);
router.put('/resetpassword', userController.resetPassword);


router.post('/createAccount', userAccount.createAccount);
router.put('/changeAccountBalance',userAccount.changeAccountBalance);
router.delete('/deleteAccount',userAccount.deleteAccount);
router.get('/getAccountForTransaction',userAccount.GetAccountForTransaction);

router.post("/createTransaction",Transaction.createTransaction);
router.delete("/destroyTransaction",Transaction.destroyTransaction);
router.get("/getAllTransactionForOneAccount",Transaction.getAllTransactionForOneAccountByAccoundID)

module.exports =router
