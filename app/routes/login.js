module.exports = app => {
    const Login = require("../controllers/login.js");  
    var router = require("express").Router();
   
    
    router.get('/', function(req, res, next) {
            res.render('login', { title: 'Express' });
    });

    router.post("/", Login.login);  
    router.get("/logout", Login.logout);    
    app.use('/login', router);
  };