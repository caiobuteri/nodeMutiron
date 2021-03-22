const localStrategy = require('passport-local').Strategy;
const db = require('mysql');
const bcrypt = require('bcryptjs')
const controllerUser = require('../controllers/controllerUsuarios');

const retornaUsuarioName = async(nome) => {
  let user = await controllerUser.getUserName(nome);
  let result = JSON.parse(JSON.stringify(user));
  return result;
}

const retornaUsuarioId = async(id) => {
  let user = await controllerUser.getUserId(id);
  let result = JSON.parse(JSON.stringify(user));
  return result;
}

module.exports = (passport) => {
  passport.use(new localStrategy({ usernameField: 'nome', passwordField: 'senha' }, async(nome, senha, done) => {

    let user =  await retornaUsuarioName(nome);

    // console.log(nome)
    // console.log(senha)

    if (!user) return done(null, false);
    
    if(!senha == user.senha) return done(null, false);
    return done(null, user);

  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(async(user, done) => {
    // console.log(id)
    // let user = await retornaUsuarioId(user.idpessoa);
    done(null, user.idpessoa);
  })
}