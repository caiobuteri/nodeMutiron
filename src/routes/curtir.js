const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerCurtida');

router.post('/curtir', (req, res) => {
  let id_evento = req.body.id_evento;
  let id_user = req.user;

  controller.curte(id_user, id_evento).then((evento) => {
    res.redirect(`/events/evento/${id_evento}`);
  });

  // res.render('/evento/:id');
});

router.post('/curtido', async(req, res) => {
  let id_evento = req.body.id_evento;
  let id_criador = req.user;

  controller.descurte(id_criador, id_evento).then((evento) => {
  res.redirect(`/events/evento/${id_evento}`);
  });
});

module.exports = router;
