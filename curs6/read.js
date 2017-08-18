var fs = require('fs');


fs.readFile('views/index.html',utf8, function(err,data){
    res.writeHead(200);
    res.end(data);
});
