var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const db = req.db;
  const cookieKeys = req.body.currentCartKeys;
  const cartRecords = db.get('cartrecord');
  cartRecords.find({},{},function(e,docs){
    res.send(docs.filter((o) => cookieKeys.includes(o.cookieKey)));
  });
});

module.exports = router;
