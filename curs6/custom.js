var fs = require('fs');

module.exports = {
    custom: function(callback){
        fs.readFile('views/index.html','utf-8', function(err, data){
           callback(data);
        });
    }
};