const express = require('express');
const faker = require('faker');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const flash = require('connect-flash');

const passport = require('passport');
require('./config/auth')(passport)

const users = require('./routes/users');
const events = require('./routes/events');
const participacoes = require('./routes/participacao');
const login = require('./routes/login');
const index = require('./routes/index');
const curtir = require('./routes/curtir');
const participar = require('./routes/participacao');

const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());

// Configurações Session:
  app.use(session({
    secret: 'mutiron',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 1000 }
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(flash());

const authenticationMiddleware = (req, res, next) => {
  if(req.isAuthenticated()) return next();
  else res.redirect('/login')
}

app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')    // Setamos que nossa engine será o ejs

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true })) // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use('/users', authenticationMiddleware, users);
app.use('/events', authenticationMiddleware, events);
app.use('/participacao', authenticationMiddleware, participacoes);
app.use('/', login);
app.use('/', authenticationMiddleware, index);
app.use('/', curtir);
app.use('/', participar);

app.listen(3333, () => {
  console.log("Back-end rodando!");
})