var fs = require('fs')
var Person = require('./person')
var express = require('express')
var router = express.Router()
router.get('/', function (req, res) {
  Person.find(function (err, person) {
    if (err) {
      return res.status(500), send('Sever error')
    }
    res.render('index.html', {
      animals: [
        'dog',
        'cat',
        'pag'
      ],
      person: person
    })
  })
})


router.get('/new', function (req, res) {
  res.render('new.html')
})
router.post('/new', function (req, res) {
  // res.render('new.html')
})








module.exports = router
