const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require("cors");
const path = require("path");
const dotenv = require('dotenv');
const db = require("./app/models");
const { table } = require("console");
const app = express();

dotenv.config();
// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));
// app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Neuro Talent application." });
});


require("./app/routes/vacancy.routes")(app);
require("./app/routes/users")(app);
require("./app/routes/login")(app);
require("./app/routes/dashboard")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT);