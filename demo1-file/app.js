const fs = require('fs')
fs.readFile('./apple.txt', function (error, data) {
  if (error) {
    console.log('此文件不存在')
  }else{
    console.log(data.toString())
  }
})