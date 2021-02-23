let express = require("express");
let router = express.Router();
let kuchipudiService = require("../services/kuchipudiService");

router.post("/registration", (req, res) => {
  console.log(' req ', req);
  kuchipudiService.kuchipudiRegistration(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        auth: true,
        primary: result
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
