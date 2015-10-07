var fs = require('fs');
var read = require("fs").readFileSync;
//var path = require('path');
//var appDir = path.dirname(require.main.filename);
//var caretPath = path.resolve(appDir,'../../','.env');
var config = {};
function Env(){
    fs.exists('./.env', function(exists) {
        if (exists) {
            console.info('.env is loaded.');
        }else{
            console.warn('.env file does not found.');
            return 0;
        }
    });
}

Env.prototype.string = function(){
    var doc;

    try {
        doc = read('./.env').toString().split('\n');
    } catch (exc) {
        return;
    }

    var i = -1;
    var len = doc.length;
    var row;

    while (++i < len) {
        if (!doc[i]) continue;
        row = doc[i].split(/\s*=\s*/);
        config[row[0]] = row[1];
    }

    return config;
};

Env.prototype.json = function(){
    if(JSON.parse(read('./.env').toString())){
        config = JSON.parse(read('./.env').toString());
    }

    return config;
};

Env.prototype.env = function (config, value) {
    if(config){
        return config;
    }else{
        return value;
    }
};

module.exports = Env;




