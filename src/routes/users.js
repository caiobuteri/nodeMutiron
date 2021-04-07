const { Router } = require('express');
const express = require('express')
const router = express.Router();

const bcrypt = require('bcryptjs')
const passport = require('passport')

const controller = require('../controllers/controllerUsuarios');

router.get('/lerUsuarios', (req, res) => {
  res.render('pages/index')
  let json = controller.leUsuarios().then((resultado) => {
    
    //res.json(resultado)
  });
});

// router.post('/login', (req, res, next) => {
//   passport.authenticate("local", {
//     successRedirect: '/',
//     failureRedirect: '/users/login',
//     failureFlash: true
// })(req, res, next)
// });

router.get('/insereUsuario', (req, res) => {
  res.render('pages/cadastro');
});

router.post('/insereUsuario', (req, res) => {
  let json = controller.insereUsuario(req).then((resultado) => {
  res.render('pages/index');
  });
});
 
router.get('/atualizaUsuario', (req, res) => {

  let json = controller.atualizaUsuario().then((resultado) => {
    res.json(resultado)
  })
})

router.get('/deletaUsuario', (req, res) => {

  let json = controller.deleteUsuario().then((resultado) => {
    res.json(resultado);
  })
})

module.exports = router;