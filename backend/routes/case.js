let express = require("express");
let router = express.Router();
let CaseService = require("../services/case");
let VerifyToken = require("./verifyToken");
let moment = require("moment");

router.post("/user/cases", VerifyToken, (req, res) => {
  console.log("dashboard", req.body);
  CaseService.dashboard(req.body, (err, result) => {
    console.log("/cases", err, moment().format("YYYY-MM-DD HH:mm:ss"));
    if (err) {
      console.log("dashboardErr >> ", err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


router.post("/validateReceipt", VerifyToken, (req, res) => {
  CaseService.validateReceipt(req.body, (err, result) => {
    console.log(
      "/validateReceipt",
      err,
      moment().format("YYYY-MM-DD HH:mm:ss")
    );
    if (err) {
      res.json(err);
      console.log("Receipt", err);
    } else {
      res.json(result);
    }
  });
});

router.get("/getUserId", VerifyToken, (req, res) => {
  CaseService.getUserId((err, result) => {
    console.log(
      "/getUserId err >",
      err,
      moment().format("YYYY-MM-DD HH:mm:ss")
    );
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
