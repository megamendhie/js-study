var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventHandler = ()=>{console.log('This is a cool demo');}

eventEmitter.on('start', eventHandler);
eventEmitter.emit('start');