var express = require('express');
var router = express.Router();
var webshot = require('webshot');
var util = require('util');

router.get('/', function(req, res){
	var url = 'http://[your-ip-address]';
	res.end(util.format('Welcome to web capture web site, using %s/webshot?url=[URL] for retrieve captured image.', url));
});

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
