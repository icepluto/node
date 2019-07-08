var express = require('express')
var app = express()
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'));

app.get('/', function (req, res) {
  res.render('index.html', {
    message: 'haha'
  })
})

app.listen(3000, function () {
  console.log('running')
})