var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Passing data into a page
// router.get('/examples/template-data', function (req, res) {
//   res.render('examples/template-data', { 'name': 'Foo' })
// })

router.get('/cases', function (req, res) {
  var user = req.query.username

  if (user == 'admin') {
    res.redirect('/admin-dashboard')
  } else {
    res.render('cases')
  }
})

router.get('/caseworker', function (req, res) {
  var compName = req.query.compName
  var urn = req.query.urn
  var overview = req.query.overview
  var status = req.query.status

  res.render('caseworker', { 'compName': compName ,  'urn': urn, 'status': status })
})

router.get('/caseworker-linear', function (req, res) {
  var compName = req.query.compName
  var urn = req.query.urn
  var overview = req.query.overview
  var status = req.query.status

  res.render('caseworker-linear', { 'compName': compName ,  'urn': urn, 'status': status })
})

router.get('/caseworker-linear-questions', function (req, res) {
  var compName = req.query.compName
  var urn = req.query.urn
  var overview = req.query.overview
  var status = req.query.status

  res.render('caseworker-linear-questions', { 'compName': compName ,  'urn': urn, 'status': status })
})

router.get('/application-hold', function (req, res) {
  var compName = req.query.compName
  var urn = req.query.urn
  var status = req.query.status

  res.render('application-hold', { 'compName': compName ,  'urn': urn, 'status': status })
})

router.get('/application-hold-alpha', function (req, res) {
  var compName = req.query.compName
  var urn = req.query.urn
  var status = req.query.status

  res.render('application-hold-alpha', { 'compName': compName ,  'urn': urn, 'status': status })
})

router.get('/application-hold-confirm', function (req, res) {
  var compName = req.query.compName
  var urn = req.query.urn

  var retrieve = req.query.retrieve

  if (retrieve == 'retrieve') {
    res.render('caseworker', { 'compName': compName ,  'urn': urn })
  } else {
    res.render('application-hold-confirm', { 'compName': compName ,  'urn': urn })
  }
})

router.get('/application-retrieve', function (req, res) {
  var compName = req.query.compName
  var urn = req.query.urn
  var status = req.query.status

  res.render('application-retrieve', { 'compName': compName ,  'urn': urn, 'status': status })
})

router.get('/application-refusal', function (req, res) {
  var compName = req.query.compName
  var urn = req.query.urn
  var decision = req.query.decision

  if (decision == 'true') {
    res.render('application-grant', { 'compName': compName ,  'urn': urn })
  } else {
    res.render('application-refusal', { 'compName': compName ,  'urn': urn })
  }
})

// add your routes here

// Documents check
router.get('/documents-check', function (req, res) {
  var doc1 = req.query.doc1
  var doc2 = req.query.doc2
  var doc3 = req.query.doc3
  // var doc4 = req.query.doc4
  // var doc5 = req.query.doc5

  if (doc1 == 'doc1' && doc2 == 'doc2' && doc3 == 'doc3') {
  // && doc4 == 'doc4' && doc5 == 'doc5')
    res.redirect('/fees')
  } else {
    res.render('documents-check')
  }
})

// Fee check
router.get('/security-checks', function (req, res) {
  var fee = req.query.fee

  if (fee == 'false') {
    res.redirect('/fee-check')
  } else {
    res.render('security-checks')
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


