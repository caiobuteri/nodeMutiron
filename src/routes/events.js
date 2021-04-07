const express = require('express');
const controllerEventos = require('../controllers/controllerEventos');
const router = express.Router();

const controller = require('../controllers/controllerEventos');

const util = require('../functions/util');
const servicesEventos = require('../services/servicesEventos');

router.post('/listaEventoss', async (req, res) => {
  console.log('chegou');
  const a = await controller.listaEventos();
  
  console.log(a)
  res.json(a);
});

router.get('/evento/:id', async(req, res) => {
  let id_evento = req.params.id;
  let id_usuario = req.user;

  let dadosCurtidos = await util.preencheArrayEventosCurtidos(id_usuario, id_evento);

  let dadosParticipados = await util.preencheArrayEventosParticipados(id_usuario, id_evento);

  console.log(dadosCurtidos[1].data.toString())

  const data = dadosCurtidos[1].data.split('-')

  const date = data[2].substring(0,2) + '/' + data[1] + '/' + data[0]

  dadosCurtidos[1].data = date;

  res.render('pages/evento', 
  { evento: dadosCurtidos[1], 
    user: id_usuario, 
    eventsCurtidos: dadosCurtidos[0],
    eventsParticipados: dadosParticipados});
});

router.get('/criarEvento', (req, res) => {
  res.render('pages/criarEvento');
});

router.post('/insereEvento', (req, res) => {
  let info = [req.body.titulo, req.body.descricao, req.body.data, req.body.localizacao, req.user];

  controller.insereEventos(info).then((eventId) => {
    
    res.redirect(`/events/evento/${eventId}`);
  
  });
});

router.get('/deletaEvento/:id', controller.deleteEvento)

module.exports = router;