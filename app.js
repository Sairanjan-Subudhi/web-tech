const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// Middleware to serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

//EJS as the view engine
app.set('view engine', 'ejs');

//views directory
app.set('views', path.join(__dirname, 'views'));

//routes for each page
app.get("/", (req, res) => {
    res.render('index');
});

app.get("/csk", (req, res) => {
     res.render('csk');
 });

 app.get("/mi", (req, res) => {
    res.render('mi');
});

app.get("/rcb", (req, res) => {
    res.render('rcb');
});

app.get("/login", (req, res) => {
    res.render('login');
});

app.get("/signup", (req, res) => {
    res.render('signup');
});


app.listen(3000,(req,res)=>{
    console.log("Server is running at port 3000");
    });
console.log("Connected to MongoDB Atlas");
// Import dependencies

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
