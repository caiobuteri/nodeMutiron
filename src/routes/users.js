const express = require('express')
const router = express.Router()

const ctl = require('../controllers/controllerUsuarios')

router.get('/lerUsuarios', (req, res) => {
  
  let json = ctl.leUsuarios().then((resultado) => {
    res.json(resultado)
  })  
})

router.get('/insereUsuario', (req, res) => {
  res.render('pages/cadastro')
});

router.post('/insereUsuario', (req, res) => {
  let json = ctl.insereUsuario().then((resultado) => {
    res.json(resultado)
  });
});
 
router.get('/atualizaUsuario', (req, res) => {

  let json = ctl.atualizaUsuario().then((resultado) => {
    res.json(resultado)
  })
})

router.get('/deletaUsuario', (req, res) => {

  let json = ctl.deleteUsuario().then((resultado) => {
    res.json(resultado);
  })
})

module.exports = router;