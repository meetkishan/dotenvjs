var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);
var caretPath = path.resolve(appDir,'../../','.env');

function Caret(){
    fs.exists(caretPath +'.js', function(exists) {
        if (exists) {
            global.cfg = require(caretPath);

            global.env = function (key, value) {
                if(key){
                    return key;
                }else{
                    return value;
                }
            };

            console.log(env(cfg.NAME, 'kk'));

        }else{
            console.warn('^.js file does not found.');
        }
    });
}

module.exports = Caret;




