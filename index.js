const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

require("./config/db");

const app =express();

// mongoose.connect('mongodb://localhost/moviedb');
// mongoose.Promise=global.Promise;

app.set("view engine", "ejs");
app.use(express.static('./public'));

//app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/',require('./routes/api'));

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

app.listen(4112,function(){

    console.log("now listneing for requests");
});


