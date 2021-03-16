let express = require("express");
let router = express.Router();
let kuchipudiService = require("../services/kuchipudiService");

router.post("/registration", (req, res) => {
  kuchipudiService.kuchipudiRegistration(req.body, (err, result) => {
    if (result == 'payment code is already used') {
      res.send({ status: { code: "ERROR", message: result } });
    } else if (result == 'payment code is invalid!') {
      res.send({ status: { code: "ERROR", message: result } });
    } else if (result == 'slot is not avaliable') {
      res.send({ status: { code: "ERROR", message: result } });
    } else {
      console.log('data >> ', result);
      req.body.id = result.insertId;
      req.body.slot_type = result.slot_type;
      req.body.slot_time = result.slot_time;
      kuchipudiService.sendSlotConfirmationMail(req.body, (err, result) => {
        if (err) {
          res.json({ err: err, data: null });
        } else {
          res.json({
            primary: result,
            status: { code: "SUCCESS", message: "Slot is booked successfully" }
          });
        }
      });

    }
  });
});

router.post("/create-payment-code", (req, res) => {
  
  if(!req.body.payment_code){
    res.send({ status: { code: "ERROR", message: 'Form is invalid' } });
    return;
  }
  kuchipudiService.insertPaymentHistory(req.body, (err, data) => {
    // console.log("error",err)
    // console.log("data",data)
    if(data === "Already Existed Payment Code") {
      res.send({ status: { code: "ERROR", message: data } });
    } else {
      res.json({
        primary: data,
        status: { code: "SUCCESS", message: "Payment code is booked successfully" }
      });
    }
  });
});

router.get("/getAvaliableSlot/:slotType", (req, res) => {
  var id = req.params.slotType;
  // console.log('id ', id);
  kuchipudiService.getAvaliableSlot(id, (err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: "no users found", result: null });
    } else {
      res.send({ primary: result });
    }
  });
});


router.get("/getslotType", (req, res) => {
  kuchipudiService.getSlotTypes((err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: "no users found", result: null });
    } else {
      res.send({ primary: result });
    }
  });
});

router.get("/getPaymentHistoryList", (req, res) => {
  kuchipudiService.getPaymentHistoryList((err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: "no users found", result: null });
    } else {
      res.send({ primary: result });
    }
  });
});

router.get("/getDecemberEventById/:id", (req, res) => {
  kuchipudiService.getDecemberEventById(req.params.id,(err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: "no users found", result: null });
    } else {
      res.send({ primary: result });
    }
  });
});


module.exports = router;
