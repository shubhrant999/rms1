const db = require("../models");
const Users = db.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");





exports.login = (req, res) => {

    Users.findOne({ where: { email: req.body.email } })
          .then(data => {     
            if (data===null) {
              return res.status(401).json({
                message: "Auth failed"
              });
            }
            
            bcrypt.compare(req.body.password, data.password, (err, result) => {
              if (err) {
                return res.status(401).json({
                  message: "Auth failed"
                });
              }

              // res.send(result);
              if (result) {
                const token = jwt.sign(
                  {
                    email: data.email,
                    userId: data.id
                  },
                  process.env.JWT_KEY,
                  {
                      expiresIn: "1h"
                  }
                );
                return res.status(200).json({
                  message: "Auth successful",
                  token: token
                });
              }
              res.status(401).json({
                message: "Auth failed"
              });
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
        });
};

exports.create = (req, res) => {
  
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }

    const user = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hash,
      role_id: req.body.role_id
    };

    Users.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
    
  });
  

  
};