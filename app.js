const names = require('./data/names.json');
const emotions = require('./data/emotions.json');
const nouns = require('./data/nouns.json');

let randomName = names.data[Math.floor(Math.random() * names.data.length)];
let randomEmotion = emotions.data[Math.floor(Math.random() * emotions.data.length)];
let randomNoun = nouns.data[Math.floor(Math.random() * nouns.data.length)];

let fullMessage = `${randomName} is ${randomEmotion} about the ${randomNoun}`;

console.log(fullMessage);