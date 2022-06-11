const express = require('express'),
routes = express.Router(),
BookController = require('../controllers/bookController');

routes.post("/book", BookController.create)



module.exports = routes;