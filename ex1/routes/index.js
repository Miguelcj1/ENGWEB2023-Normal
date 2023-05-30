var express = require('express');
var router = express.Router();
const Plantas = require('../controllers/Plantas')


router.get('/plantas/freguesias', function (req, res, next) {
    Plantas.freguesias()
    .then((result) => {
        res.jsonp(result)
    }).catch((err) => {
        res.jsonp({error: err})
    });
})

router.get('/plantas/especies', function (req, res, next) {
    Plantas.especies()
    .then((result) => {
        res.jsonp(result)
    }).catch((err) => {
        res.jsonp({error: err})
    });
})

router.get('/plantas/:id', function (req, res, next) {
    Plantas.getPlanta(req.params.id)
    .then((result) => {
        res.jsonp(result)
    }).catch((err) => {
        res.jsonp({error: err})
    });
})

router.get('/plantas', function (req, res, next) {
    if (req.query && Object.keys(req.query).length > 0) {
        if (req.query.especie) {
            Plantas.getEspecie(req.query.especie)
            .then((result) => {
                res.jsonp(result)
            }).catch((err) => {
                res.jsonp({error: err})
            });
        }
        else if (req.query.implant) {
            Plantas.getImplant(req.query.implant)
            .then((result) => {
                res.jsonp(result)
            }).catch((err) => {
                res.jsonp({error: err})
            });
        }
    }
    else{
        Plantas.list()
        .then((result) => {
            res.jsonp(result)
        }).catch((err) => {
            res.jsonp({error: err})
        });
    }
})


router.post('/plantas', function(req, res) {
    Plantas.addPlanta(req.body)
      .then(lista => {
        res.jsonp(lista)
      })
      .catch(erro => {
        res.jsonp({error: err})
      })
})


router.delete('/plantas/:id', function(req, res) {
  Plantas.deletePlanta(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
        res.jsonp({error: err})
    })
})

module.exports = router;
