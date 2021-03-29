const { Router } = require('express');
const express = require('express')
const router = express.Router();

const bcrypt = require('bcryptjs')
const passport = require('passport')

const Multer = require('multer');

const multer = Multer();

const controller = require('../controllers/controllerUsuarios');

router.get('/login', (req, res) => {
  res.render('pages/login')
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/index',
  failureRedirect: '/login',
  failureFlash: true
}));

router.post('/loginMobile', multer.none(), async(req, res) => {
  let nome = req.body.login;
  let senha = req.body.password;

  console.log(nome, senha)

  res.json(await controller.loginMobile(nome, senha));
});

module.exports = router;