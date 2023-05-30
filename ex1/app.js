var express = require('express');
var path = require('path');
var logger = require('morgan');

var mongoose = require('mongoose')
var mongodb = 'mongodb://127.0.0.1/plantas'
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, "MongoDB conection error.."))
db.on('open', function() {
  console.log("MongoDB: Conexão estabelecida com sucesso...")
})

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
