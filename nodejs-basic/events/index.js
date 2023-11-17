const EventEmitter = require('events').EventEmitter

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

const MyEmitter = new EventEmitter;

MyEmitter.on('birthday', birthdayEventListener);

MyEmitter.emit('birthday', 'Yumana');

