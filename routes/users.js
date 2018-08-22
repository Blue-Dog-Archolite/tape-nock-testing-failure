var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    user: 'Bill Clinton',
    org: 'TechOps',
    role: 'Admin',
    uid: 'crodriguez',
  });
});

router.get('/otherUser', function (req, res, next) {
  res.json({
    some: 'Thing',
    other: 'NotThing',
  });
});

module.exports = router;
