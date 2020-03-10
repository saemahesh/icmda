const nodemailer = require('nodemailer'); 


let mailTransporter = nodemailer.createTransport({ 
	service: 'gmail', 
	auth: { 
		user: 'saemahesh@gmail.com', 
		pass: 'Nxe4y@wkat'
	} 
}); 

// var mailTransporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false, // secure:true for port 465, secure:false for port 587
//  auth: { 
// 		user: 'saemahesh@gmail.com', 
// 		pass: 'Nxe4y@wkat'
// 	} 
// });

let mailDetails = { 
	from: 'saemahesh@gmail.com', 
	to: 'saimahesh.rambha@scriptbees.com', 
	subject: 'Thanks for registering at ICMDA', 
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
		<p class="main-content__body" data-lead-id="main-content-body">Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.</p>
	</div>

	 <div style="margin:30px 0">
    <a target="_blank" href="https://www.w3schools.com">
    <button type="button" class="btn btn-success">Click here to download your ID card</button>
    </a>
    </div>

	<footer class="site-footer" id="footer">
		<p class="site-footer__fineprint" id="fineprint">Copyright ©2020 | All Rights Reserved</p>
	</footer>
</body>
</html>`}; 

mailTransporter.sendMail(mailDetails, function(err, data) { 
	if(err) { 
		console.log('Error Occurs',err); 
	} else { 
		console.log('Email sent successfully'); 
	} 
}); 
