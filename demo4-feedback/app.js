var http = require('http')
var fs = require('fs')
var template = require('art-template')


http
  .createServer(function (req, res) {
    var url = req.url
    if (url === '/') {
      fs.readFile('./views/index.html', function (err, data) {
        if (err) {
          return res.end('404 not found')
        }
        var htmlStr = template.render(data.toString(), {
          name: '张1',
          message: 'today is good'
        })
        res.end(htmlStr)
      })
    }else if(url === '/post'){
      fs.readFile('./views/post.html', function (err, data) {
        if (err) {
          return res.end('404 not found')
        }else{
          return res.end(data)
        }
      })
    }else if (url.indexOf('/public/') === 0) {
      fs.readFile('.' + url, function (err, data) {
        if (err) {
          return res.end('404a')
        }else{
          res.end(data)
        }
      })
    } else {
      fs.readFile('./public/404.html', function (err, data) {
        if (err) {
          return res.end('404 not found')
        } else {
          res.end(data)
        }
      })
    }
  })
  .listen(3000, function () {
    console.log('running')
  })