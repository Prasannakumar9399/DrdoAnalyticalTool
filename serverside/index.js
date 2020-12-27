require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const routesInd = require('./routes/routeInd');

var app = express();


//middleware
app.use(bodyParser.json());
app.use(cors());

//now the url for register is "/api/register"
app.use("/api", routesInd);

//start server
app.listen(process.env.PORT, () => { console.log("Server started at port " + process.env.PORT) })