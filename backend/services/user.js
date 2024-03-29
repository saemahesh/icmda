let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
let config = require("../config.js");
let moment = require("moment");
let _ = require("lodash");

exports.register = (data, callback) => {
  let today = moment().toDate();
  console.log('data ', data);
  // var data = ;
  executeQuery.queryForAll(
    sqlQueryMap["register"],
    [
     data.formValues.artistName,
     data.formValues.artForm,
     data.formValues.email,
     data.formValues.mobileNumber,
     data.formValues.country,
     data.formValues.address,
     data.formValues.city,
     data.formValues.zipcode,
     today,
     data.imageUrl
      
    ],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        data.formValues.id = result.insertId;
        this.sendMail(data)
       console.log('result ', result.insertId)
        callback(null, result);
      }
    }
  );
};
exports.eventRegister = (data, callback) => {
  let today = moment().toDate();
  console.log('data ', data);
  // var data = ;
  
  if(data.formValues.artCategory==1){
    data.formValues.artCategory="Music"
  }if(data.formValues.artCategory==2){
    data.formValues.artCategory="Dance"
  }
  switch (data.formValues.cLevel) {
    case "1":
      data.formValues.cLevel = "Sub-Junior";
      break;
    case "2":
      data.formValues.cLevel = "Junior";
      break;
    case "3":
      data.formValues.cLevel = "Senior";
      break;
    case "4":
      data.formValues.cLevel = "Super Senior";
      break;
    case "5":
      data.formValues.cLevel = "Open Category for Gold Medal";
      break;
    case "6":
      data.formValues.cLevel = "Prodigy Category";
      break;
    case "7":
      data.formValues.cLevel = "Special Category";
      break;
    case "8":
        data.formValues.cLevel = "Sub-Junior Progressive";
        break;
    case "9":
        data.formValues.cLevel = "Junior Progressive";
        break;
  }

  console.log(data.formValues.artCategory,data.formValues.cLevel)
  executeQuery.queryForAll(
    sqlQueryMap["eventRegister"],   
    [
     data.formValues.name,
     data.formValues.teacherName,
     data.formValues.teacherNumber,
     '',
     data.formValues.artCategory,
     data.formValues.artForm,
     data.formValues.compType,
     data.formValues.gender,
     data.formValues.age,
     data.formValues.compLevel,
     '',
     '',
     data.formValues.email,
     data.formValues.mobileNumber,
     data.formValues.address,
     data.formValues.city,
     data.formValues.zipcode,
     today,
     data.imageUrl,
     data.formValues.country,
     data.amount,
     data.formValues.cLevel     
    ],
    (err, result) => {
      console.log(err, result)
      if (err) {
        callback(err, null);
      } else {
        data.formValues.id = result.insertId;
        this.sendEventMail(data)
       console.log('result ', result.insertId)
        callback(null, result);
      }
    }
  );
};
exports.getMember = (id, callback) => {
  try {
    executeQuery.queryForAll(
      sqlQueryMap["getMember"],
      [id],
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          {
            callback(err,result)
          }
        }
      }
    );
  } catch (err) {
    if (err) {
      callback(err, null);
      console.log("Login Error", err);
    }
    // eslint-disable-next-line no-console
  }
};

exports.getProfiles = (addUser, callback) => {
  executeQuery.queryForAll(
    sqlQueryMap["getProfiles"],
    [],
    (err, result) => {
      if (err) {
        console.log('err ', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};

exports.getRegistrationProfiles = (callback) => {
  executeQuery.queryForAll(
    sqlQueryMap["getRegistrationProfiles"],
    [],
    (err, result) => {
      if (err) {
        console.log('err ', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};


exports.sendMail = (mail_data, callback) => {
  
  data = mail_data.formValues;
  data.profile_pic = mail_data.imageUrl;


let mailTransporter = nodemailer.createTransport({ 
	service: 'gmail', 
	auth: { 
		user: 'icmdachennai@gmail.com', 
		pass: 'Jithyalakshmi1'
	} 
}); 
let id_url = `https://icmda.co.in/idcard/${data.id}`
let mailDetails = { 
	from: 'icmdachennai@gmail.com', 
	to: data.email, 
	subject: `Thanks ${data.artistName} for registering as a member at ICMDA`, 
	html: `<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700' rel='stylesheet' type='text/css'>

	
</head>
<body>
	<header class="site-header" id="header">
    <div class="row" style="background-color:black;margin-bottom:40px">
    <img width="80%" height="100px" src="https://ucarecdn.com/7c183c4f-2843-466d-a7d6-968148e10b88/" >
    </div>
		<h2  data-lead-id="site-header-title" style="color:#b64f33;font-size:40px">THANK YOU!</h2>
	</header>

	<div class="main-content">
		<i class="fa fa-check main-content__checkmark" id="checkmark"></i>
    <p class="main-content__body" data-lead-id="main-content-body">
    Thanks a bunch for filling that out. It means a lot to us, just like you do! 
    We really appreciate you for joining as a member at ICMDA. Thanks for joining our family.</p>
  </div>
  <p>
  You will get the id card soon.
  </p>
	<footer class="site-footer" id="footer">
		<p class="site-footer__fineprint" id="fineprint">Copyright © ICMDA 2020 | All Rights Reserved</p>
	</footer>
</body>
</html>`}; 

// <div style="margin:30px 0">
// <a target="_blank" href="${id_url}">
// <button type="button" class="btn btn-success" style="background:lightgreen">Click here to download your ID card</button>
// </a>
// </div>

mailTransporter.sendMail(mailDetails, function(err, data) { 
	if(err) { 
		console.log('Error Occurs',err); 
	} else { 
		console.log('Email sent successfully'); 
	} 
}); 
};

exports.sendEventMail = (mail_data, callback) => {
  
  data = mail_data.formValues;
  data.imageUrl = mail_data.imageUrl;
  data.amount = mail_data.amount;
  data.guidelines_url = 'http://icmda.co.in/guidelines';


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
	subject: `Thanks ${data.name} for registering to the Dec 2020 online competition.`, 
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
      <h2  data-lead-id="site-header-title" style="color:#b64f33;font-size:40px">THANK YOU!</h2>
    </header>
  
    <div class="main-content">
      <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
    <p class="main-content__body" data-lead-id="main-content-body">Thanks ${data.name} for registering to the DEC2020 online competition. Your participation details are mentioned below.</p>
    </div>
  
  <table id="customers" style="margin-top:10px">
  
    <tr>
      <td>Registration Id</td>
      <td>DEC2020-${data.id}</td>
    </tr>
    <tr>
      
    <tr>
      <td>Name</td>
      <td>${data.name}</td>
    </tr>
    <tr>
      <td>Photo</td>
      <td><img src="${data.imageUrl}" width="120px" height="150px"></td>
    </tr>
    <tr>
      <td>Competition Type</td>
      <td>${data.compType}</td>
    </tr>
    <tr>
      <td>Art Category</td>
      <td>${data.artCategory}</td>
    </tr>
    <tr>
      <td>Art Form</td>
      <td>${data.artForm}</td>
    </tr>
    <tr>
      <td>Gender</td>
      <td>${data.gender}</td>
    </tr>
    <tr>
      <td>Date of Birth</td>
      <td>${data.age}</td>
    </tr>
    <tr>
      <td>Competition Level</td>
      <td>${data.compLevel}</td>
    </tr>
    <tr>
      <td>Participation Category</td>
      <td>${data.cLevel}</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>${data.email}</td>
    </tr>
    <tr>
      <td>Mobile</td>
      <td>${data.mobileNumber}</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>${data.address}</td>
    </tr>
    <tr>
      <td>Country</td>
      <td>${data.country}</td>
    </tr>
    <tr>
      <td>City</td>
      <td>${data.city}</td>
    </tr>
    <tr>
      <td>Zipcode/PinCode</td>
      <td>${data.zipcode}</td>
    </tr>
    <tr>
      <td>Teacher Name</td>
      <td>${data.teacherName}</td>
    </tr>
    <tr>
      <td>Teacher Mobile</td>
      <td>${data.teacherNumber}</td>
    </tr>

    <tr>
      <td>Amount to pay</td>
      <td>${data.amount} INR (Excluding transaction fee)</td>
    </tr>
  </table>
  
     <div style="margin:30px 0;display:grid">
     <a target="_blank" href="${data.guidelines_url}">
     <button type="button" class="btn btn-success" style="cursor:pointer">Click here to see the Guidelines</button>
     </a>
      </div>

  <div class=" col-md-12 well" style=" border: 5px solid #5db29f;  padding: 10px;"> 
        <label style="font-size:medium;background: #33626d;color: white;padding: 5px;">Make payment with either PhonePe / Gpay/ Paypal / NetBanking 
        <span style="color: red;">(Excluding transaction fee)</span>
        </label><br>
        <div class="col-md-4">
          <div class="form-group">
            <label style="font-size: medium;">PhonePe / GPay (India)</label>
            <div style="background-color: white;font-size: 20px;padding-left:10px;font-weight: bold;">
              9884220404

            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label style="font-size: medium;">PayPal (International)</label>
            <div style="background-color: white;font-size: 1em;padding-left:10px;font-weight: bold;padding: 8px;">
              <a href="https://paypal.me/icmdaDecEvent" target="blank">https://paypal.me/icmdaDecEvent</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
          <label style="font-size: medium;">NetBanking</label>
          <div style="background-color: white;font-size: 1em;padding-left:10px;font-weight: bold;padding: 8px;display:grid">
           <span>Account No : 20264708218 </span>
           <span>Name : Asha Deepa R </span>
           <span>IFSC       : SBIN0016987 </span>
           <span>BANK NAME  : State Bank Of India</span>
          </div>
        </div>
      </div>
      </div>
  
  <p style="color:red;margin-top:10px"> Important Note: Please e-mail your video link along with payment receipt to the <strong style="color:black">videos@icmda.co.in</strong> email. If payment receipt is not valid, then you are not allowed to participate in competition
  </p>
  
  Feel free to reach us if you have any queries.

  Email : icmdachennai@gmail.com 
  Phone : 9840111333 | 9884112999
    <footer class="site-footer" id="footer" style="padding:15px">
      <p class="site-footer__fineprint" id="fineprint">Copyright © ICMDA 2020 | All Rights Reserved</p>
    </footer>
  </body>
  </html>
  `}; 

mailTransporter.sendMail(mailDetails, function(err, data) { 
	if(err) { 
		console.log('Error Occurs',err); 
	} else { 
		console.log('Email sent successfully'); 
	} 
}); 
};



