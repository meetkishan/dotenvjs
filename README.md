# dotenvjs
Loads environment variables from `.env.js` to `cfg.var` automagically.

.env.js ~
    module.exports = {  
        KEY1 : 'VALUE1',
        KEY2 : 'VALUE2',
        KEY3 : 'VALUE3',
        KEY4 : {
            VALKEY1 : 'KEY4VAL1',  
            VALKEY2 : 'KEY4VAL2',  
            VALKEY3 : 'KEY4VAL3',  
        }
    };
   
-----------------
YourConfig.js
    
    configVar = env(cfg.KEY1, 'defaultValue');
    configVar2 = env(cfg.KEY2, 'defaultValue');
    configVar3 = env(cfg.KEY3, 'defaultValue');
    
-----------------
