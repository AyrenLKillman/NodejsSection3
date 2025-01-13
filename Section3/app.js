//const fs = require('fs')

//? const anotherName = require('fs')
//? anotherName.writeFileSync(filename,string)
//! just use common name (what the module is)

// fs.writeFileSync('notes.txt', 'this file was created by node.js :3')

//challenge 1
//TODO    use appendFileSync to append to the file
//TODO    run the script
//TODO     check work by opening file and viewing appended text

//? fs.appendFileSync('notes.txt', " also u sus lol")

//----------------------------------------------------------------//
//const add = require('./utils.js')

//const sum = add(4,-2)

//console.log(sum)

//challenge 2
//TODO    new file named notes.js
//TODO    function that returns 'your notes...'
//TODO     export function
//TODO     load and call function from app.js


// const Notes = require('./notes.js')

// const Notez = Notes
// console.log(Notez)


//----------------------------------------------------------------//
//const validator = require('validator')
//console.log(validator.isEmail('Bob@example.com'))
//console.log(validator.isURL('https://getbootstrap.com'))

//Challenge 3
//TODO install chalk
//TODO load it into app.js
//TODO make it print a string in green in the console

import chalk from 'chalk';

console.log(chalk.green.bold('this thing dont like me that much but it work'));
//----------------------------------------------------------------//
//use of nodemon
console.log('bruh')