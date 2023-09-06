const express = require("express");
const app = express();
const router = require("./routes/index");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods", 
    "GET, POST, OPTIONS, PUT, DELETE"
    
    );
  next();
});

app.use("/rickandmorty", router);


module.exports = app;
