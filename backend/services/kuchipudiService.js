let moment = require("moment");

exports.kuchipudiRegistration = (data, callback) => {
  let creationdate = getDefaultLongFormattedDate(new Date())
  let updationdate = getDefaultLongFormattedDate(new Date())
  var coupon = "1"
  try {
    executeQuery.queryForAll(
      sqlQueryMap["crossCheckingRegistration"],
      [data.code],
      (err, result) => {
        // console.log("crossCheckingRegistration", err, result, result.length > 0)
        if (result.length > 0) {
          return callback(err, "payment code is already used");
        } else {
          executeQuery.queryForAll(
            sqlQueryMap["getPaymentHistoryById"],
            [data.code,data.slot_type],
            (err, result) => {
              console.log("getPaymentHistoryById", err, result)
              if (result.length == 0) {
                return callback(err, "payment code is invalid!");
              } else {
                {
                  try {
                    executeQuery.queryForAll(
                      sqlQueryMap["getAvaliableSlotById"],
                      [data.slot_id],
                      (err, slotResult) => {
                        // console.log("getAvaliableSlotById", err, result)
                        if (slotResult.length == 0) {
                          return callback(err, "slot is not avaliable");
                        } else {
                          {
                            // callback(err,result) register insert
                            executeQuery.queryForAll(
                              sqlQueryMap["kuchipudiRegistration"],
                              // code,name,email,slot_id,country,coupon,phone_number,creation_date,updation_date
                              [
                                data.code,
                                data.name,
                                data.email,
                                data.slot_id,
                                data.country,
                                coupon,
                                data.phone_number,
                                creationdate,
                                updationdate
                              ],
                              (err, result) => {
                                if (err) {
                                  callback(err, null);
                                } else {
                                  result.slot_type = slotResult[0].slot_type
                                  result.slot_time = slotResult[0].slot_time
                                  callback(null, result);
                                  updateSlotTable(data.slot_id)
                                  updatePaymentHistoryById(data.code)

                                }
                              }
                            );
                          }
                        }
                      }
                    );
                  } catch (err) {
                    if (err) {
                      callback(err, null);
                      // console.log("Login Error", err);
                    }
                  }

                }
              }
            }
          );

        }

      }
    );
  } catch (err) {
    if (err) {
      callback(err, null);
      // console.log("Login Error", err);
    }
  }
};


exports.getAvaliableSlot = (slotType, callback) => {
  try {
    executeQuery.queryForAll(
      sqlQueryMap["getAvaliableSlot"],
      [slotType],
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          {
            callback(err, result)
          }
        }
      }
    );
  } catch (err) {
    if (err) {
      callback(err, null);
      // console.log("Login Error", err);
    }
    // eslint-disable-next-line no-console
  }
};

function getDefaultLongFormattedDate(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}

// queriessss





function updateSlotTable(id) {
  // return moment(date).format('YYYY-MM-DD HH:mm:ss');
  executeQuery.queryForAll(
    sqlQueryMap["updateAvaliableSlot"],
    [id],
    (err, result) => {
      if (err) {
        // callback(err, null);
        // return err
      } else {
        {
          // callback(err,result)
          // return result
        }
      }
    }
  );
}


function updatePaymentHistoryById(id) {
  // return moment(date).format('YYYY-MM-DD HH:mm:ss');
  executeQuery.queryForAll(
    sqlQueryMap["updatePaymentHistoryById"],
    [id],
    (err, result) => {
      if (err) {
        // callback(err, null);
        // return err
      } else {
        {
          // callback(err,result)
          // return result
        }
      }
    }
  );
}

exports.insertPaymentHistory = (data, callback) => {
  // return moment(date).format('YYYY-MM-DD HH:mm:ss');
  // crossCheckingPaymetHistory
  try {
    executeQuery.queryForAll(sqlQueryMap["crossCheckingPaymetHistory"], [data.payment_code],
      (err, result) => {
        // console.log("crossCheckingPaymetHistory", err, result)
        if (result.length === 0) {
          executeQuery.queryForAll(
            sqlQueryMap["insertPaymentHistory"],
            [data.name, data.phone_number, data.amount, data.transaction_id, data.payment_mode, data.payment_date, data.payment_code, 0, data.slot_type],
            (err, result) => {
              if (err) {
                callback(err, null);
              } else {
                {
                  callback(null, result)
                }
              }
            }
          );
        } else {
          return callback(err, "Already Existed Payment Code");

        }
      })
  }
  catch (err) {

  }
}

exports.sendSlotConfirmationMail = (mail_data, callback) => {
  
  data = mail_data;
let mailTransporter = nodemailer.createTransport({ 
	service: 'gmail', 
	auth: { 
		user: 'icmdachennai@gmail.com', 
		pass: 'Jithyalakshmi1'
	} 
}); 
let mailDetails = { 
	from: 'icmdachennai@gmail.com', 
	to: data.email, 
	subject: `ICMDA Kuchipudi Festival slot is booked.`, 
	html: `<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700' rel='stylesheet' type='text/css'>
    <style>
    
  @font-face {
      font-family: "Akkurat-Regular";
      src:url("../font/akkurat/lineto-akkurat-regular.eot");
      src:url("../font/akkurat/lineto-akkurat-regular.eot?#iefix") format("embedded-opentype"),
          url("../font/akkurat/lineto-akkurat-regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
  }
  
  .cf:before,
  .cf:after {
      content: " ";
      display: table;
  }
  .cf:after {
      clear: both;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    background-color: #fffffe;
  }
  body {
    padding: 0 20px;
    min-width: 300px;
    font-family: 'Akkurat-Regular', sans-serif;
    background-color: #fffffe;
    color: #1a1a1a;
    text-align: center;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased
  }
  a:link,
  a:visited {
    color: #00c2a8;
  }
  a:hover,
  a:active {
    color: #03a994;
  }
  .site-header {
    margin: 0 auto;
    max-width: 820px;
  }
  .site-header__title {
    margin: 0;
    font-family: Montserrat, sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }
  
  .main-content {
    margin: 0 auto;
    max-width: 820px;
  }
  .main-content__checkmark {
    font-size: 4.0625rem;
    line-height: 1;
    color: #24b663;
  }
  .main-content__body {
    margin: 20px 0 0;
    font-size: 1rem;
    line-height: 1.4;
  }
  
  .site-footer {
    margin: 0 auto;
    padding: 80px 0 25px;
    padding: 0;
    max-width: 820px;
  }
  .site-footer__fineprint {
    font-size: 0.9375rem;
    line-height: 1.3;
    font-weight: 300;
  }
  
  
  @media only screen and (min-width: 40em) {
    
    .site-header__title {
      font-size: 6.25rem;
    }
    .main-content__checkmark {
      font-size: 9.75rem;
    }
    .main-content__body {
      font-size: 1.25rem;
    }
    .site-footer {
      padding: 145px 0 25px;
    }
    .site-footer__fineprint {
      font-size: 1.125rem;
    }
  }
  
  
  .btn-success {
      color: #fff;
      background-color: #5cb85c;
      border-color: #4cae4c;
  }
  .btn {
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      border-radius: 4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  
    </style>
    <style>
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  #customers tr:nth-child(even){background-color: #f2f2f2;}
  
  #customers tr:hover {background-color: #ddd;}
  
  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
  }
  </style>
  </head>
  <body>
    <header class="site-header" id="header">
      <div class="row" style="background-color:black;margin-bottom:40px">
      <img width="80%" height="100px" src="https://ucarecdn.com/7c183c4f-2843-466d-a7d6-968148e10b88/" >
      </div>
    </header>
  
    <div class="main-content">
      <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
    <p class="main-content__body" data-lead-id="main-content-body">
    Namaste ${data.name},
    </p>
    <div class="main-content__body" data-lead-id="main-content-body">
    Congratulations, You’ve successfully booked the slot for Kuchipudi Festival.
    </div>
    </div>
  
    Kuchipudi Festival Participant Details: 
  <table id="customers" style="margin-top:10px">
  
    <tr>
      <td>Registraion Id</td>
      <td>${data.id}</td>
    </tr>
    <tr>
    <tr>
      <td>Name</td>
      <td>${data.name}</td>
    </tr>
  
    <tr>
      <td>Slot Type</td>
      <td>${data.slot_type}</td>
    </tr>
    <tr>
      <td>Slot Time</td>
      <td>${data.slot_time}</td>
    </tr>
  </table>

    <p>
      Details about Prize Distribution: 
    </p>

    <p>
      We are going to conduct an event in Kuchipudi Kalakshetram 
      All the participants are welcome to the event and collect your prizes. If anyone not able to attend the event,
       they can get the Winning/Participation certificate and Medal via email and Courier (you need to pay for courier charges).
    </p>

    <p>
      If anybody wants to participate in the ICMDA festival, please visit the HTTP://ICMDA.CO.IN website to register your slot.
      Please Join the ICMDA Telegram channel (http://t.me/icmdachennai) for the latest updates.
    </p> 
  <div>
  Feel free to reach us if you have any queries.

  Email : icmdachennai@gmail.com 
  Phone : 9840111333 | 9884112999
    <footer class="site-footer" id="footer" style="padding:15px">
      <p class="site-footer__fineprint" id="fineprint">Copyright © ICMDA 2020 | All Rights Reserved</p>
    </footer>
  </div>
  </body>
  </html>
  `}; 

mailTransporter.sendMail(mailDetails, function(err, respp) { 
	if(err) { 
		console.log('Error Occurs',err); 
    callback(`Error! Mail not sent to id [${data.id}] >>>>>  [${data.email}]`,null)
	} else { 
		console.log('Email sent successfully'); 
    callback(null,`Email sent successfully to id  [${data.id}] >>>> [${data.email}]`)
	} 
}); 
};
