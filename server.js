/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Harmish Patel Student ID:15456212 Date: 27-01-2023
*
*  Cyclic Web App URL: https://expensive-pear-sweatshirt.cyclic.app/
*
*  GitHub Repository URL: https://github.com/Har7974/Web322
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();


app.get("/", (req, res) => {
    res.send("Harmish Patel 15456212");
});

app.listen(HTTP_PORT);