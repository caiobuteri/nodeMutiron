const { Router } = require('express');
const express = require('express')
const router = express.Router();

const multiparty = require('multiparty');

const controllerUsuario = require('../controllers/controllerUsuarios');
const controllerEventos = require('../controllers/controllerEventos');

router.post('/loginMobile', async(req, res) => {
  let form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {
    let nome = fields.login[0];
    let senha = fields.password[0];

    nome = nome.replace(/[^a-z0-9]/gi,'');
    senha = senha.replace(/[^a-z0-9]/gi,'');
    
    res.json(await controllerUsuario.loginMobile(nome, senha));

  });
});

router.post('/cadastroMobile', async(req, res) => {
  let form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {

    console.log(fields)
    let nome = fields.login[0];
    let senha = fields.password[0];

    nome = nome.replace(/[^a-z0-9]/gi,'');
    senha = senha.replace(/[^a-z0-9]/gi,'');
    
    console.log(nome, senha)

    res.json(await controllerUsuario.cadastroMobile(nome, senha));

  });
});

router.post('/cadastroEvento', async(req, res) => {
  let form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {

    console.log(fields)
    let title = fields.title[0];
    let location = fields.location[0];
    let date = fields.date[0];
    let description = fields.description[0];
    let criador = fields.criador[0];

    title = title.replace(/[^a-z0-9]/gi,'');
    location = location.replace(/[^a-z0-9]/gi,'');
    date = date.replace(/[^a-z0-9]/gi,'');
    description = description.replace(/[^a-z0-9]/gi,'');
    criador = criador.replace(/[^a-z0-9]/gi,'');
    
    console.log(title, location, date, description, criador);

    res.json(await controllerEventos.cadastroEventoMobile(title, location, date, description));

  });
});

router.get('/retornaEventos', async(req, res) => {

  await controllerEventos.listaEventosMobile();

  // res.send("a")
  // console.log('chegou')
  // console.log(await controllerEventos.listaEventosMobile());
  res.json(await controllerEventos.listaEventosMobile());

});

router.get('/retornaEventoDetalhes', async(req, res) => {

  await controllerEventos.listaEventosMobile();

  // res.send("a")
  // console.log('chegou')
  // console.log(await controllerEventos.listaEventosMobile());
  res.json(await controllerEventos.listaEventosMobile());

});

router.post('/insereeventomobile', async(req, res) => {

  let form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {

    console.log(fields)

    let title = fields.title[0];
    let location = fields.location[0];
    let date = fields.date[0];
    let description = fields.description[0];
    let login = fields.criador[0];

    let dateArray = date.split('/');

    let date2 = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);

    console.log(date2)

    let resultId = await controllerUsuario.getUserName(login);

    let id = resultId.idpessoa;

    let info = [title, location, date, description, id];

    let new_id = await controllerEventos.insereEventos(info);

    if(new_id == undefined){
      res.json({success: 0});
    } else {
      res.json({success: 1});
    }
  });

});

router.post('/eventoDetalhado', async(req, res) => {

  let form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {

    let id_evento = fields.eid[0];
    
    let result = await controllerEventos.eventoDetalhado(id_evento);
    let dados = JSON.parse(JSON.stringify(result[0]));

    // console.log(result[0].data.split('-'));
    let dateArray = dados.data.split('-');
    dados.data = dateArray[2].substring(0,2) + '/' + dateArray[1] + '/' + dateArray[0];

    res.json(dados);
  });
});

module.exports = router;
