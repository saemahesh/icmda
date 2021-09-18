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

//Update Registeration
router.put("/event-update", (req, res) => {
    // console.log('Update ',req.body);
    UserService.updateEventRegister(req.body, (err, result) => {
        if (err) {
            res.json(err);
        } else {
          let status;
          if (result.changedRows > 0){
            status = "Successfully Updated"
          }else{
            status = "Could Not Update"
          }
            res.json({
                auth: true,
                token: result,
                status: status
            });
        }
    });
});

//Upload Video Link
router.put("/submit-video", (req, res) => {
    // console.log(' req ', req);
    UserService.submitVideo(req.body, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            let video;
            if (result.changedRows > 0){
                video = "Successfully Uploaded"
            }else{
                video = "Could Not Upload"
            }
            res.json({
                auth: true,
                token: result,
                status: video
            });
        }
    });
});

//Upload Winners
router.post("/upload-winnings", (req, res) => {
    // console.log(' req ', req);
    UserService.uploadWinnings(req.body, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json({
                auth: true,
                token: result,
                message: "success"
            });
        }
    });
});


router.post("/send-prize-mail", (req, res) => {
    // console.log(' req ', req);
    req.body.id = req.body.id.trim();
    req.body.name = req.body.name.trim();
    req.body.artForm = req.body.artForm.trim();
    req.body.category = req.body.category.trim();
    req.body.level = req.body.level.trim();
    req.body.prize = req.body.prize.trim();
    let isFormValid = true;
    Object.values(req.body).forEach(item => {
        if (!item) {
            isFormValid = false;
        }
    })
    if (!isFormValid) {
        res.send({ err: 'Form is invalid' });
        return;
    }
    UserService.getDecEventProfile(req.body.id, (err, DecEventProfile) => {
        if (err) {
            res.send({ err, data: null })
        } else {
            if (!DecEventProfile.length) {
                res.send({ err: 'User id does not exists', data: null })
                return
            }
            console.log('data >> ', DecEventProfile[0].email);
            req.body.email = DecEventProfile[0].email;
            UserService.sendPrizeMail(req.body, (err, result) => {
                if (err) {
                    res.json({ err: err, data: null });
                } else {
                    res.json({
                        err: null,
                        data: result
                    });
                }
            });
        }
    })

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

//Get Member Details With Email-id
router.get("/get-details/:email", (req, res) => {
    var emailId = req.params.email;
    console.log('email ', emailId);
    UserService.getDetailsByEmailId(emailId, (err, result) => {
        if (err) {
            res.status(500);
            res.send({ err: "no users found", result: null });
        } else {
            res.send(result);
        }
    });
});

//Get members with filters
router.post("/get-details", (req, res) => {
    UserService.getDetailsByFilters(req.body, (err, result) => {
        if (err) {
            res.status(500);
            res.send({ err: "no users found", result: null });
        } else {
            res.send(result);
        }
    });
});

//Update members details 
router.put("/get-details", (req, res) => {
    // console.log("HI");
    UserService.updateDetails(req.body, (err, result) => {
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

//July2021 Competition Registeration
router.post("/getNewRegistrationProfiles", (req, res) => {
    UserService.getNewRegistrationProfiles(req.body, (err, result) => {
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
                if (data[element.art_form]) {
                    data[element.art_form].push(element)
                } else {
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