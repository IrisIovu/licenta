const router = require("express").Router();
const userController = require('../controllers/Client');
const Cont = require('../controllers/Cont');
const Transaction = require('../controllers/Tranzactie');

router.post('/register', userController.registerClient);
router.post('/login', userController.login);
router.put('/resetpassword', userController.resetPassword);


router.post('/createCont', Cont.createCont);
router.put('/updateSold',Cont.updateSold);
router.delete('/deleteCont',Cont.deleteCont);
router.get('/GetContForTransaction',Cont.GetContForTransaction);

/*
router.post("/createTransaction",Transaction.createTransaction);
router.delete("/destroyTransaction",Transaction.destroyTransaction);
router.get("/getAllTransactionForOneAccount",Transaction.getAllTransactionForOneAccountByAccoundID)
*/

module.exports =router
