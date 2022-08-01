const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use('/', require('./routes/calcRoutes'))

app.use(express.static(__dirname + '/public'))


const conexao = 4000
app.listen(conexao, console.log("Conectado!"))