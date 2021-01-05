const checkAuth = require('../middleware/auth');
const verifyLogin = checkAuth.verifyLogin;

module.exports = app => {
    const vacancy = require("../controllers/vacancy.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", vacancy.create);
  
    // Retrieve all Tutorials
    router.get("/", verifyLogin, vacancy.findAll);
  
    router.get("/:id", vacancy.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", vacancy.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", vacancy.delete);
  
    // Delete all Tutorials
    router.delete("/", vacancy.deleteAll);
  
    app.use('/api/vacancy_category', router);
  };