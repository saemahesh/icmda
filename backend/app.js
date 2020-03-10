let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let moment = require("moment");
require("dotenv").config();
let services = require("./services/case");
let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let caseRouter = require("./routes/case");
let jwt = require("jsonwebtoken");
let passport = require("passport");
let passportJWT = require("passport-jwt");
let extractJwt = passportJWT.ExtractJwt;
let jwtStrategy = passportJWT.Strategy;
let mysql = require("mysql");
let db_template = require("db-template");
let fs = require("fs");
let parser = require("xml-js");
let app = express();
let async = require("async");




app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization,x-access-token"
  );

  next();
});

app.use("/api/users", usersRouter);
app.use("/api", caseRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log('req ', req.url)
  next(createError(404));
});

let bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// let session = require('express-session');
// app.use(session({
//   secret: '',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }))

// database connection - mysql config
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  connectionLimit: 500,
  connectTimeout: 50000
});

executeQuery = db_template(pool);
pool.on("connection", connection => {
  console.log("Connection Acquired");
});
pool.on("acquire", connection => {
  console.log("Connection %d acquired", connection.threadId);
});

pool.on("enqueue", () => {
  console.log("Waiting for available connection slot");
});

pool.on("release", connection => {
  console.log("Connection %d released", connection.threadId);
});

let content = fs.readFileSync(__dirname + "/sql-queries.xml");

let json = parser.xml2json(content, {
  sanitize: false
});

let sqlQueries = JSON.parse(json)["elements"][1].elements;
sqlQueryMap = {};
for (let i = 0; i < sqlQueries.length; i++) {
  if (sqlQueries[i]["attributes"]) {
    sqlQueryMap[sqlQueries[i]["attributes"]["id"]] =
      sqlQueries[i]["elements"][0]["cdata"];
  }
}

pool.on("error", err => {
  if (err) {
    console.log("appPool Erro", err);
  }
});
//Custom cookie extractor for passport authentication
let cookieExtractor = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["token"];
  }
  return token;
};

let jwtOptions = {};
jwtOptions.jwtFromRequest = cookieExtractor; //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDk4MzE3OTgzfQ.3SCnHzYDcEwVqYl5N5GBa8vjGPVn2lu1V5y0E-MQ0yw";
jwtOptions.secretOrKey = "gstreport"; // project based key
jwtOptions.tokenBodyField = "token";
let strategy = new jwtStrategy(jwtOptions, (jwt_payload, done) => {
  // utility.getRedisDataFromKey(jwt_payload, (err, result) => {
  //     if (err) {
  //         done(null, false);
  //     } else {
  //         done(null, result);
  //     }

  done(null, result);
});
passport.use(strategy);
app.use(passport.initialize());

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
