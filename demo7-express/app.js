var express = require('express')
// var artTemplate = require('art-template')
var bodyParser = require('body-parser')

var app = express()
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var time = new Date();
var day = time.toUTCString()
var comments = [{
  name: 'pang',
  message: 'i siad ....',
  date: day
}]
app.get('/', function (req, res) {
    res.render('index.html', {
      comments: comments
    })
})
app.get('/post', function (req, res) {
  res.render('admin.html')
})
// app.post('/post', function (req, res) {
//   var comment = req.body
//   comment.dateTime = day
//   comments.unshift(comment)
//   res.redirect('/')
// })
app.post('/pinglun', function (req, res) {
  var comment = req.body
  comment.dateTime = day
  comments.unshift(comment)
  res.redirect('/')
})
app.get('/404', function (req, res) {
  res.render('404.html')
})


app.listen(3000, function () {
  console.log('running')
})
