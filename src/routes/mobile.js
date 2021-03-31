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

router.get('/retornaEventos', async(req, res) => {

  await controllerEventos.listaEventosMobile();

  // res.send("a")
  // console.log('chegou')
  // console.log(await controllerEventos.listaEventosMobile());
  res.json(await controllerEventos.listaEventosMobile());

});

module.exports = router;