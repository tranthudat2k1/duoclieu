const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const dotenv = require('dotenv');
// env
dotenv.config();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Router
require('./routes')(app)

// config mongodb
require('./db/mongodb').connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})