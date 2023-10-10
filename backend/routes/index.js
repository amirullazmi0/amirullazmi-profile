var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('Hello World!')
});

router.get('/about', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('about')
});

module.exports = router;
