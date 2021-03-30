const { Router } = require('express');
const express = require('express')
const router = express.Router();

const bcrypt = require('bcryptjs')
const passport = require('passport')

const Multer = require('multer');

const multer = Multer();

const multiparty = require('multiparty');

const controller = require('../controllers/controllerUsuarios');

router.get('/login', (req, res) => {
  res.render('pages/login')
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/index',
  failureRedirect: '/login',
  failureFlash: true
}));
 
router.post('/loginMobile', async(req, res) => {
  let form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {
    let nome = fields.login[0];
    let senha = fields.password[0];

    nome = nome.replace(/[^a-z0-9]/gi,'');
    senha = senha.replace(/[^a-z0-9]/gi,'');
    
    res.json(await controller.loginMobile(nome, senha));

  });
});

router.post('/cadastroMobile', async(req, res) => {
  let form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {
    let nome = fields.login[0];
    let senha = fields.password[0];

    nome = nome.replace(/[^a-z0-9]/gi,'');
    senha = senha.replace(/[^a-z0-9]/gi,'');
    
    console.log(nome, senha)

    res.json(await controller.cadastroMobile(nome, senha));

  });
});

module.exports = router;