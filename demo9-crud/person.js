var fs = require('fs')

var dbPath = './db.json'

exports.find = function (callback){
  fs.readFile(dbPath, function (err, data) {
    if  (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).person)
  })
}
























