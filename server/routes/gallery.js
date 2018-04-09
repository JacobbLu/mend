var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  const db = req.db;
  const galleryRecords = db.get('gallery');
  galleryRecords.find({},{},function(e,docs){
    res.send(docs);
  });
});

module.exports = router;
