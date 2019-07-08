var http = require('http')
var fs = require('fs')

var sever = http.createServer()

sever.on('request', function (req, res) {
  console.log('request success')
  var url = req.url
  if(url === '/'){
    fs.readFile('./index.html', function (err, data){
      if(err){
        res.setHeader('Content-Type','text/plain; charset=utf-8')
        res.end('文件获取失败')
      }else{
        res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end(data)
      }
    })
  }
})
sever.listen(3000, function () {
  console.log('running...')
})