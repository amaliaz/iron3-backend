const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
require("./configs/dbConfig");
var multer  = require('multer');
require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL, 
    optionsSuccessStatus: 200,
    credentials: true, 
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// Enable authentication using session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use("/", require("./routes/auth"));
app.use("/", require("./routes/trips"));
app.use("/", require("./routes/users")); 
app.use("/", require("./routes/index"));

// For any routes that starts with "/api", catch 404 and forward to error handler
app.use("/*", (req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  console.error("----- An error happened -----");
  console.error(err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(err.status || 500);

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === "production") res.json(err);
    else
      res.json(
        JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
      );
  }
});

module.exports = app;
