var readlineSync = require('readline-sync')
const userName = readlineSync.question("may I have your name? ")
console.log('Hi '+ userName + '!');
