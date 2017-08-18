var http = require('http');
var custom = require('./custom.js');



var server = http.createServer(function(req,res){
    
    custom.readFile(function(data){
        res.writeHead(200);
        res.end(data);
        //console.log(data);
    });
    
});

server.listen(3000);


