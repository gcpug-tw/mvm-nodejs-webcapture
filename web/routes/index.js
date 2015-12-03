var express = require('express');
var router = express.Router();
var webshot = require('webshot');

router.get('/test', function(req, res, next) {
	res.end('ok');
});

/* GET home page. */
router.get('/webshot', function(req, res, next) {
  var url = req.query.url;
	res.writeHead(200, { 'Content-Type': 'image/jpeg' });
	webshot(url).pipe(res);
});

/* Download web page image */
router.get('/webshot/:filename', function(req, res, next) {
  var url = req.query.url;
  var filename = req.params.filename;

	webshot(url, "./public/downloads/" + filename, function(err) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end('<img src="/downloads/' + filename + '"/>');
	});
});


module.exports = router;
