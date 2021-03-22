const { Router } = require('express');
const express = require('express')
const router = express.Router();

const bcrypt = require('bcryptjs')
const passport = require('passport')

const controller = require('../controllers/controllerUsuarios');

router.get('/login', (req, res) => {
  res.render('pages/login')
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/index',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;