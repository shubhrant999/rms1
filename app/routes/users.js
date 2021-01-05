// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");


module.exports = app => {
  const Users = require("../controllers/users.js");  
  var router = require("express").Router();
  router.post("/", Users.create);    
  app.use('/user', router);
}