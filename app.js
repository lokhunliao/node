// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about Environment where the program is being executed


// console.log(__dirname);
// setInterval(() => { 
//     console.log('hello');
// }, 1000)
// const amount = 12

// if(amount < 10) {
//     console.log('small number')
// }
// else {
//     console.log('large number')
// }

// console.log(`hey, it's my first node app!`);

//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
// const {john, peter} = require('./4-names');
// console.log(names);
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor')
// console.log(data);

require('./7-mind-grenada')

sayHi(names.john)
sayHi(names.peter)




