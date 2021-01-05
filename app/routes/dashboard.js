const checkAuth = require('../middleware/auth');

const verifyLogin = checkAuth.verifyLogin;
const checkPermission = checkAuth.checkPermission;

const db = require("../models");
const Vacancy = db.vacancy;

module.exports = app => {
    var router = require("express").Router();
    
    router.get('/', [verifyLogin,checkPermission('index')], function(req, res, next) {
        username = req.session.userdata.username;
        Vacancy.findAll({ where: null })
        .then(data => {        
                res.render('admin/dashboard', { title: 'Dashboard', username: username, data:data });
        })
        .catch(err => {
                res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving tutorials."
                });
        });            
    });  
    
    router.get('/edit', [verifyLogin,checkPermission()], function(req, res, next) {
        username = req.session.userdata.username;
        res.send(username);
        res.end();
    });
    router.get('*', [verifyLogin,checkPermission()], function(req, res, next) {
        res.end("you are on test page");
    }); 
    app.use('/dashboard', router);
  };