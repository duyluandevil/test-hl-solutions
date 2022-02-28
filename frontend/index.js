var express = require('express');
var app = express();

var port = 3000; // Create Port for HTTP 

var jokeModel = require("./model/joke.model")
var jokeRouter = require("./router/joke.route"); // Use router joke

app.set('view engine', 'pug')
app.set('views', "./frontend/views")

app.use("/", jokeRouter)

app.listen(port,() =>{
    console.log("Server is listening on port 3000...")
});

