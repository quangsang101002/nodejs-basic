// const express = require("express");\
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";
import { render } from "ejs";
// import connection from "./configs/connectDB";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var morgan = require("morgan");

//set up view engine
configViewEngine(app);

//init route
initWebRoute(app);

//init API route
initAPIRoute(app);

app.use(morgan("combined"));
//handle 404 not found
app.use((req, res) => {
  return res.render("404.ejs");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
