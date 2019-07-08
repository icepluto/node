 

var fs = require('fs')
var express = require('express')
var router = express.Router()
router.get('/', function (req, res) {
    fs.readFile('./db.json', 'utf8', function (err, data) {
      if (err) {
        return res.status(500),send('Sever error')
      }
      res.render('index.html', {
        animals: [
          'dog',
          'cat',
          'pag'
        ],
        person: JSON.parse(data).person
      })
    })
  
  })
module.exports = router
