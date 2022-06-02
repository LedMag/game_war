'use strict';

const readline = require('readline');
const net = require('net');

class Player{

  constructor(name){
    this.wins = 0;
    this.card = {};
    this.name = name;
  };

};

const socket = new net.Socket();

socket.on('data', (data) => {
  console.log('📨:', data);
});

socket.connect({
  port: 2000,
  host: '127.0.0.1',
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `${promptName}> `,
});

rl.prompt();

function print(str){
  console.log(str)
};

// const commands = new Map();
// commands.set('help', print, 'help');
// commands.set('hello', print('hello'));
// commands.set('\n', print('enter'));

const commands = {
  help() {
    console.log('Commands:', Object.keys(commands).join(', '));
  },
  hello() {
    socket.write('hello');
    // console.log('Hello there!');
  },
  clear(){
    console.clear();
  },
  pause(){
    rl.pause();
  },
  exit() {
    rl.close();
  }
};

rl.question('What\'s your name?: ', (name) => {
  let player = new Player(name);
  promptName = player.name;
  rl.write(`Thanks, ${name}\nPush Enter for start game.`);
});

rl.on('line', (line) => {
  line = line.trim();
  const command = commands[line];
  if (command) command();
  else console.log('Unknown command');
  rl.prompt();
}).on('close', () => {
  console.log('Bye!');
  process.exit(0);
});
