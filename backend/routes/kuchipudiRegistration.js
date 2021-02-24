let express = require("express");
let router = express.Router();
let kuchipudiService = require("../services/kuchipudiService");

router.post("/registration", (req, res) => {
  // console.log(' req ', req);
  kuchipudiService.kuchipudiRegistration(req.body, (err, result) => {
   
    if(result == 'payment is not done') {
      res.send({ status:{code:"ERROR",message: result}});
    } else if (result == 'slot is not avaliable') {
      res.send({ status:{code:"ERROR",message: result}});
    } else {
        res.json({
        primary: result,
        status:{code:"SUCCESS",message: "Slot is book successfully"}
      });
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
      res.send({primary:result});
    }
  });
});


module.exports = router;
