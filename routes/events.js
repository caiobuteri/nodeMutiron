const express = require('express');
const router = express.Router();

const ctl = require('../src/controllers/controllerEventos');

router.get('/listaEventos', ctl.listaEventos);  

router.get('/insereEvento', ctl.insereEventos);

router.get('/deletaEvento/:id', ctl.deleteEvento)

module.exports = router;