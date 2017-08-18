var express = require('express');
var port = 3000;
var app = express();

app.get('/',function(req,res){
    res.send('hello worlddas dasd !');
});


app.listen(port, function(){
    console.log('Express started on port ' + port);
})

