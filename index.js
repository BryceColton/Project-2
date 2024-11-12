const express = require('express');

const app = express();

const path = require('path')

const port = 5000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => 
{
    res.render("index")
})

app.get("/logIn", (req, res) => 
{
    res.render("logIn")
})

app.listen(port, () => console.log("Listening"));