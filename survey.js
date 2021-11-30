const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

let answers = [];

const profileQuestion = (promptQ) => {
  return new Promise((callbackFn, errorFn) => {
    rl.question(promptQ, (uInput) => {
      callbackFn(uInput);
    }, () => {
      errorFn();
    });
  });
};

const main = async () => {
  for (const q of questions) {
    answers.push(await profileQuestion(q));
  }
  rl.close();
  console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
};

main();
