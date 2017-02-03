var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        info: 'This is the home page'
  });
});

router.get('/mom', function(req, res, next) {
  res.render('mom', { title: 'Mom',
                        info: 'My mom lives in Bracebridge and works at my step dads business'
  });
});

router.get('/dad', function(req, res, next) {
  res.render('dad', { title: 'Dad',
                        info: 'My dad is retired and lives in Innisfil'
  });
});

router.get('/zach', function(req, res, next) {
  res.render('zach', { title: 'Zach',
                        info: 'Older brother. Runs a succesful meme page on facebook'
  });
});

router.get('/forrester', function(req, res, next) {
  res.render('forrester', { title: 'Forrester',
                        info: 'Younger brother. Works as a cook at a pub'
  });
});

module.exports = router;
