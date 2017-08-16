// var http = require('http'),
//     fs = require('fs');

// fs.readFile('./index.html', function(err, html) {
//     if (err) {
//         throw err;
//     };
//     http.createServer(function(request, response) {
//         response.writeHeader(200, { "Content-Type": "text/html" });
//         response.write(html);
//         response.end();
//     }).listen(3001);
// });

var http = require('http');
var myModule = require('./myModule');

var server = http.createServer(function(req, res) {
    myModule.readFile(function(data) {
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(3001);