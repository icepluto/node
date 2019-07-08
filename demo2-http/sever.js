var server = require('http')
var fs = require('fs')

var server = server.createServer()
server.on('request', function (req, res) {
  console.log('first req', req.url)
  var url = req.url
  if (url === '/') {
    fs.readFile('./index.html', function (err, data) {
      if (err) {
        res.setHeader('Content-Type','text/plain; charset=utf-8')
        res.end('文件读取失败')
      }else{
        res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end(data)
      }
    })
  }
})
server.listen(3000, function () {
  console.log('runninga')
})