var express = require('express');
var path = require('path');
require('./models/db');
require("body-parser");
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();


({message: 'Client created'});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
app.use('/api', indexRouter);
module.exports = app;
