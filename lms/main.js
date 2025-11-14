const readline = require('readline');
const CommandProcessor = require('./CommandProcessor');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
})

const processor =  new CommandProcessor();


console.log('📚 Library Management System Started');
console.log('Commands: ADD_BOOK, REMOVE_BOOK, LIST_BOOKS, REGISTER_MEMBER, ISSUE_BOOK, RETURN_BOOK, SHOW_BORROWED');
rl.prompt();

rl.on('line', (input) => {
  processor.execute(input);
  rl.prompt();
});