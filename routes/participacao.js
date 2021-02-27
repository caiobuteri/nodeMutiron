const express = require('express');
const router = express.Router();

const ctl = require('../src/controllers/controllerParticipacao');

router.get('/criaParticipacao', ctl.insereParticipacao);
router.get('/deletaParticipacao/:id', ctl.deletaParticipacao);

module.exports = router;