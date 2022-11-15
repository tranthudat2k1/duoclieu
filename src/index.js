const express = require('express')
const app = express()
const port = 8000
const path = require("path")
const dotenv = require('dotenv');
// env
dotenv.config();
// static file 
app.use(express.static( path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'))
// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Router
require('./routes')(app)

// config mongodb
require('./db/mongodb').connect()

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})