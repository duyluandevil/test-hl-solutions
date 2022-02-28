var express = require('express')
var Router = express.Router();

var jokeController = require('../controller/joke.controller');

Router.get("/", jokeController.index)

module.exports = Router