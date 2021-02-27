let express = require("express");
let router = express.Router();
let kuchipudiService = require("../services/kuchipudiService");

router.post("/registration", (req, res) => {
  kuchipudiService.kuchipudiRegistration(req.body, (err, result) => {
    if (result == 'code is already used') {
      res.send({ status: { code: "ERROR", message: result } });
    } else if (result == 'payment code is invalid!') {
      res.send({ status: { code: "ERROR", message: result } });
    } else if (result == 'slot is not avaliable') {
      res.send({ status: { code: "ERROR", message: result } });
    } else {
      res.json({
        primary: result,
        status: { code: "SUCCESS", message: "Slot is booked successfully" }
      });
    }
  });
});

router.post("/create-payment-code", (req, res) => {
  kuchipudiService.insertPaymentHistory(req.body, (err, data) => {
    if(err){
      res.send({err})
    }else{
      res.send({data})
    }
  });
});

router.get("/getAvaliableSlot/:slotType", (req, res) => {
  var id = req.params.slotType;
  console.log('id ', id);
  kuchipudiService.getAvaliableSlot(id, (err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: "no users found", result: null });
    } else {
      res.send({ primary: result });
    }
  });
});


module.exports = router;
