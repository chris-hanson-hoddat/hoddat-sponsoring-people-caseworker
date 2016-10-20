var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

// Documents check
router.get('/documents-reject', function (req, res) {
  var doc1 = req.query.doc1
  var doc2 = req.query.doc2
  var doc3 = req.query.doc3
  var doc4 = req.query.doc4

  if (doc1 == 'doc1' && doc2 == 'doc2' && doc3 == 'doc3' && doc4 == 'doc4') {
    res.redirect('/fees')
  } else {
    res.render('documents-reject')
  }
})

// Fee check
router.get('/documents-confirm', function (req, res) {
  var fee = req.query.fee

  if (fee == 'false') {
    res.redirect('/fee-reject')
  } else {
    res.render('documents-confirm')
  }
})

// Caseworker - company details
// router.get('/caseworker', function (req, res) {
//   var company = req.query.company

//   if (company == 'true') {
//     res.redirect('/caseworker-refusal')
//   } else {
//     res.render('caseworker')
//   }
// })

module.exports = router


