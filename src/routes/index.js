const express = require('express');
const router = express.Router();

const controllerEventos = require('../controllers/controllerEventos');

router.get('/index', (req, res) => {
  controllerEventos.listaEventos().then((resultado) => {
    res.render('pages/index', { eventos: resultado });
  });
});

module.exports = router;