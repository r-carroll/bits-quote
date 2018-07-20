var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout.ejs', { 
    title: 'Flash Quote',
    head: '../partials/head.ejs',
    mainBody: 'index.ejs' });
});

module.exports = router;
