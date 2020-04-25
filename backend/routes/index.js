const router = require("express").Router();
const userController = require('../controllers/Client');
const Cont = require('../controllers/Cont');
const Transaction = require('../controllers/Tranzactie');
const Moneda = require('../controllers/Moneda');

router.post('/register', userController.registerClient);
router.post('/login', userController.login);
router.put('/resetpassword', userController.resetPassword);


router.post('/createCont', Cont.createCont);
router.put('/updateSold',Cont.updateSold);
router.delete('/deleteCont',Cont.deleteCont);
router.get('/GetContForTransaction',Cont.GetContForTransaction);


router.post("/creareMoneda",Moneda.creareMoneda)


router.post("/createTransaction",Transaction.createTranzactie);
router.delete("/destroyTransaction",Transaction.destroyTransaction);
router.get("/getAllTransactionForOneAccount",Transaction.getAllTransactionForOneAccountByAccoundID)



module.exports =router
