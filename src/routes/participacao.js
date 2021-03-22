const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerParticipacao');

router.post('/participar', (req, res) => {
  let id_evento = req.body.id_evento;
  let id_user = req.user;

  controller.participa(id_user, id_evento).then((evento) => {
    res.redirect(`/events/evento/${id_evento}`);
  });

  // res.render('/evento/:id');
});

router.post('/desparticipar', async(req, res) => {
  let id_evento = req.body.id_evento;
  let id_criador = req.user;

  controller.desparticipa(id_criador, id_evento).then((evento) => {
  res.redirect(`/events/evento/${id_evento}`);
  });
});

module.exports = router;