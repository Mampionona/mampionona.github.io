const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');
app.use(compression({ threshold: 0 }));
app.use(express.static(__dirname, { maxAge: 31557600000 }));
app.set('etag', false); // turn off
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 80);


/*HTTPS*/


/*const crypto = require('crypto'),
  fs = require("fs"),
  http = require("http");

var privateKey = fs.readFileSync('privatekey.pem').toString();
var certificate = fs.readFileSync('certificate.pem').toString();

var credentials = crypto.createCredentials({key: privateKey, cert: certificate});

var handler = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
};

var server = http.createServer();
server.setSecure(credentials);
server.addListener("request", handler);
server.listen(8000);*/