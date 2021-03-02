const express = require('express')
const faker = require('faker')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const cors = require('cors');

const users = require('./routes/users');
const events = require('./routes/events');
const participacoes = require('./routes/participacao')

const app = express()
app.use(cors())

// app.use(expressLayouts)          // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
// app.set('layout', './layout')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')    // Setamos que nossa engine será o ejs

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true })) // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use('/users', users)
app.use('/events', events)
app.use('/participacao', participacoes)

app.listen(3333, () => {
  console.log("Back-end rodando!")
})