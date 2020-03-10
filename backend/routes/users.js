let express = require("express");
let router = express.Router();
let UserService = require("../services/user");

router.post("/register", (req, res) => {
  // console.log(' req ', req);
  UserService.register(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        auth: true,
        token: result
      });
    }
  });
});

router.post("/login", (req, res) => {
  UserService.loginFun(req.body, (err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: "no users found", result: null });
    } else {
      res.send(result);
    }
  });
});
router.get("/get-category", (req, res) => {
  UserService.getCategory(req.body, (err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: "no users found", result: null });
    } else {
      res.send(result);
    }
  });
});

router.post("/getProfiles", (req, res) => {
  UserService.getProfiles(req.body, (err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: err, result: null });
    } else {
      res.send(result);
    }
  });
});

router.get("/logout", (req, res) => {
  res.json({
    auth: false,
    token: null
  });
});

module.exports = router;
