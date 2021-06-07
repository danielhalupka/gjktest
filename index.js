const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Ahojte')
})

app.get('/volaco', function (req, res) {
    res.send('Volaco')
})
 
app.listen(3000)