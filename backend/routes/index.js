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
router.get("/getTranzactii",Transaction.getTranzactii)
router.get("/getSold",Transaction.getSold)
router.get("/getTranzactiiDupaCont/:id",Transaction.getTranzactiiDupaCont)

router.get("/getcurrencyJSon",function (){
    let demo = () => {
        let rate = fx(1).from("GBP").to("USD")
        console.log("£1 = $" + rate.toFixed(4))
      }
      
      fetch('https://api.exchangeratesapi.io/latest')
        .then((resp) => resp.json())
        .then((data) => fx.rates = data.rates)
        .then(demo)
})
module.exports =router
