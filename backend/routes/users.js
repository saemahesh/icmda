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

router.post("/event-register", (req, res) => {
  // console.log(' req ', req);
  UserService.eventRegister(req.body, (err, result) => {
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

router.post("/send-prize-mail", (req, res) => {
  // console.log(' req ', req);
  UserService.sendPrizeMail(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: 'Mail sent successfully'
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
router.get("/get-member/:id", (req, res) => {
  var id = req.params.id;
  console.log('id ', id);
  UserService.getMember(id, (err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: "no users found", result: null });
    } else {
      res.send(result);
    }
  });
});

router.get("/getRegistrationProfiles", (req, res) => {
  var id = req.params.id;
  console.log('id ', id);
  UserService.getRegistrationProfiles((err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: "no users found", result: null });
    } else {
      res.send(result);
    }
  });
});


router.get("/getProfiles", (req, res) => {
  UserService.getProfiles(req.body, (err, result) => {
    if (err) {
      res.status(500);
      res.send({ err: err, result: null });
    } else {
      var data = {};
      result.forEach(element => {
        if(data[element.art_form]){
          data[element.art_form].push(element)
        }else{
          data[element.art_form] = [];
          data[element.art_form].push(element)

        }
      });
      res.send(data);
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
