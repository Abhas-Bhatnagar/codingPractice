var EventEmitter = require('events').EventEmitter;
var util = require('util');

class SyncEmit {
    constructor() {
    }
    testing() {
        setTimeout(()=>{
            return this.emit('ready');
        },1000);
        setTimeout(()=>{
            return this.emit('notReady');
        },1000);
    }
}

util.inherits(SyncEmit, EventEmitter);

let syncEmitObj = new SyncEmit();
syncEmitObj.on('ready', function() {
    console.log('Object is ready');
});

syncEmitObj.on('notReady', function() {
    console.log('Object is notReady');
});


syncEmitObj.testing();
