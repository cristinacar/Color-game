var express = require('express');
var port = 3000;

var app = express();
app.get('/', function(req, res) {
    res.send("Hello world");
});

app.listen(port, function() {
    console.log("Express pornit on port " + port);
});