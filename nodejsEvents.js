const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
  console.log('pls turn off the motor!');

  setTimeout(() => {
    console.log('pls turn off the motor!,its a gentle reminder');
  }, 3000);

});

console.log('The script is runnig');
myEmitter.emit('waterFull');
console.log('The script is still runnig');
