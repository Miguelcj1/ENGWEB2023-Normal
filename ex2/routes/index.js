var express = require('express');
var router = express.Router();
const conf = require('../configs/env')
const axios = require('axios')

/* GET home page. */
router.get('/', function (req, res, next) {
    var data = new Date().toISOString().substring(0, 16)
    axios.get(conf.apiAccessPoint + '/plantas')
    .then((result) => {
        res.render('index', { title: 'Página principal', plantas: result.data , d: data});
    }).catch((err) => {
        res.render('error', { error: err });
    });
});

router.get('/:id', function (req, res, next) {
    var data = new Date().toISOString().substring(0, 16)
    axios.get(conf.apiAccessPoint + `/plantas/${req.params.id}`)
    .then((result) => {
        res.render('plantaInfo', { title: `Planta: ${req.params.id}`, planta: result.data, d: data });
    }).catch((err) => {
        res.render('error', { error: err });
    });
});

router.get('/especies/:id', function (req, res, next) {
    var data = new Date().toISOString().substring(0, 16)
    axios.get(conf.apiAccessPoint + `/plantas?especie=${req.params.id}`)
    .then((result) => {
        res.render('especieInfo', { title: `Espécie: ${req.params.id}`, plantas: result.data, especie: req.params.id, d: data });
    }).catch((err) => {
        res.render('error', { error: err });
    });
});

module.exports = router;
